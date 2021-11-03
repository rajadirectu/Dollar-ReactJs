using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dollar.Models
{
    public interface IBusinessLicenseRepository
    {
       IEnumerable<BusinessLicense_TMP> GetAllBusinessLicense();
       void UpdateBusinessLicense(List<BusinessLicense_TMP> businessLicenses);
    }
}
