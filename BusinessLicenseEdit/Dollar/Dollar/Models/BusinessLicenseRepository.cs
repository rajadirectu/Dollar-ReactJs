using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dollar.Models
{
    public class BusinessLicenseRepository: IBusinessLicenseRepository
    {
        private readonly AppDbContext db; 
        public BusinessLicenseRepository(AppDbContext db)
        {
            this.db = db;
        }
        public IEnumerable<BusinessLicense_TMP> GetAllBusinessLicense()
        {
            var businessLicenses = from bl in db.BusinessLicense_TMP.Take(1000).ToList() select bl;   
            return businessLicenses; 
        }

        public void UpdateBusinessLicense(List<BusinessLicense_TMP> businessLicenses)
        {
            foreach (BusinessLicense_TMP bl in businessLicenses) 
            {
                BusinessLicense_TMP existing = db.BusinessLicense_TMP.Find(bl.BusinessLicenseId);
                existing.Country = bl.Country;
            }
            db.SaveChanges();
        }
    }
}
