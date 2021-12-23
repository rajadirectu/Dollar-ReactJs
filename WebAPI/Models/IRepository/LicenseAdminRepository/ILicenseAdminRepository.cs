using WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public interface ILicenseAdminRepository
    {
        LicenseAdmin GetLicenseAdmin(int id);
        IEnumerable<LicenseAdmin> GetAllLicenses();
        LicenseAdmin Add(LicenseAdmin licenseAdmin);
        LicenseAdmin Update(LicenseAdmin licenseAdminChanges);
        LicenseAdmin Delete(int id);

        //LicenseAdmin UpdateLicense(string code);

    }
}
