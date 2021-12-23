using WebAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Data
{
    public class LicenseAdminContext : DbContext
    {

        public LicenseAdminContext(DbContextOptions<LicenseAdminContext> options) : base(options) { }

        public DbSet<LicenseAdmin> LicenseAdmin { get; set; }
     
        public DbSet<spLicenseAdmin> spLicenseAdmin { get; set; }
        public DbSet<UserLoginDetails> Users { get; set; }

    }
}
