using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models.IRepository.spLicenseAdminRepository
{
    public interface IspLicenseAdminRepository
    {
        Task<IEnumerable<spLicenseAdmin>> GetAllLicensesNew();
        Task<spLicenseAdmin> GetSpLicenseAdminById(string code,int? id);

    }
}
