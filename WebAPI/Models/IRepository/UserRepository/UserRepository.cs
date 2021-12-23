using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class UserRepository : IUserRepository
    {
        private readonly LicenseAdminContext _context = null;

        //Inject Db context to work with datasbase
        public UserRepository(LicenseAdminContext context)
        {
            _context = context;
        }

        public UserLoginDetails ValidateUserDetails(UserLoginDetails Users)
        {
            var user = _context.Users.Where(m => 
                                        m.Username == Users.Username &&
                                        m.Password == Users.Password
                                        ).FirstOrDefault();

            return user;
        }

    }
}
