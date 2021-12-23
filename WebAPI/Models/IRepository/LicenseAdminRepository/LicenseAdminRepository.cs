using System;
using LicenseAdminCRUD.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class LicenseAdminRepository : ILicenseAdminRepository
    {
        private readonly LicenseAdminContext _context = null;

        //Inject Db context to work with datasbase
        public LicenseAdminRepository(LicenseAdminContext context)
        {
            _context = context;
        }

        public LicenseAdmin GetLicenseAdmin(int id)
        {
            return _context.LicenseAdmin.Find(id);
        }

        public IEnumerable<LicenseAdmin> GetAllLicenses()
        {
            return _context.LicenseAdmin.ToList();
        }

        
        public IEnumerable<LicenseAdmin> GetAllLicensesNew()
        {
            return _context.LicenseAdmin.FromSqlRaw<LicenseAdmin>("getAllLicenses").ToList();
        }
        
        public LicenseAdmin Add(LicenseAdmin licenseAdmin)
        {
            if (licenseAdmin != null)
            {
                _context.Add(licenseAdmin);
                _context.SaveChanges();
            }

            return licenseAdmin;
        }


        //public LicenseAdmin UpdateStatus(bool isActive, int Id)
        //{
        //    if (Id > 0)
        //    {
        //        var licenseAdmin = _context.LicenseAdmin.FirstOrDefault(l => l.Id = Id);
        //        licenseAdmin.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
        //        _context.SaveChanges();
        //        return ;
        //    }

        //}

        //    return licenseAdmin;
        //}

        public LicenseAdmin Update(LicenseAdmin licenseAdminChanges)
        {
            var licenseAdmin = _context.LicenseAdmin.Attach(licenseAdminChanges);
            licenseAdmin.State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
            return licenseAdminChanges;
        }

        public LicenseAdmin Delete(int id)
        {
            LicenseAdmin licenseAdmin = _context.LicenseAdmin.Find(id);
          
            if (licenseAdmin != null)
            {
                _context.LicenseAdmin.Remove(licenseAdmin);
                _context.SaveChanges();
            }
            return licenseAdmin;
        }

        //public LicenseAdmin UpdateLicense(string code)
        //{
        //    LicenseAdmin license = new LicenseAdmin();
        //    license.Code = code;
        //    _context.LicenseAdmin.Attach(license);
        //    _context.SaveChanges();
        //    return license;

        //}
    }
}

