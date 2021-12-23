using System;
using System.Collections.Generic;
using System.Linq;
using WebAPI.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Models.IRepository.spLicenseAdminRepository
{

    public class spLicenseAdminRepository : IspLicenseAdminRepository
    {
        private readonly LicenseAdminContext _context = null;

        //Inject Db context to work with datasbase

        public spLicenseAdminRepository(LicenseAdminContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<spLicenseAdmin>> GetAllLicensesNew()
        {
            return await _context.spLicenseAdmin
                        .FromSqlRaw<spLicenseAdmin>("getAllLicenses")
                        .ToListAsync();
        }

        public async Task<spLicenseAdmin> GetSpLicenseAdminById(string code, int? id)
        {
            spLicenseAdmin licenseDetailsById = null;
            if (id != null && code != null)
            {
                 licenseDetailsById = (await _context.spLicenseAdmin
                        .FromSqlRaw<spLicenseAdmin>("getLicenseById {0},{1}", code, id).ToListAsync())
                        .FirstOrDefault();
            }

            return licenseDetailsById;
        }






    }
}
