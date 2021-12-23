using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Models.IRepository.spLicenseAdminRepository;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILicenseAdminRepository _licenseAdminRepository;
        private readonly IspLicenseAdminRepository _spLicenseAdminRepository;
        private readonly IUserRepository _userRepository;


        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, 
                                         ILicenseAdminRepository licenseAdminRepository,
                                         IspLicenseAdminRepository spLicenseAdminRepository,
                                         IUserRepository userRepository)
        {
            _logger = logger;
            _licenseAdminRepository = licenseAdminRepository;
            _spLicenseAdminRepository = spLicenseAdminRepository;
            _userRepository = userRepository;

        }

        [HttpPost("ValidateUserDetails")]
        public IActionResult ValidateUserDetails([FromBody]UserLoginDetails Users)
        {
            var userDetail = _userRepository.ValidateUserDetails(Users);
            if (userDetail != null) {
                return Ok(userDetail);
            }
            return NoContent();
        }


        [HttpPost("validate-token")]
        public IActionResult Authorize([FromBody]Authorize model)
        {
            var response = model.token + "," + model.user;
            return Ok(response);
        }


        [HttpGet("GetAllLicensesDetails")]
        public IActionResult GetAllLicensesDetails()
        {
            var licenseAdminRepo = _licenseAdminRepository.GetAllLicenses();
            return Ok(licenseAdminRepo);
        }



        [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("GetLicenseAdminDetails/{code}/{id}")]
        public async Task<ActionResult<spLicenseAdmin>> GetLicenseAdminDetails(string code, int id)
        {
            //Console.WriteLine("token" + token);
                var licenseDetailsById = await _spLicenseAdminRepository.GetSpLicenseAdminById(code, id);
         
            return licenseDetailsById;
        }

    }
}
