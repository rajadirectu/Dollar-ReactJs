using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Dollar.Models
{
    public class BusinessLicense_TMP
    {      
        [Key]
        public int BusinessLicenseId { get; set; }
        public int Store { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int Vendor { get; set; }
        public string Name { get; set; }
        public string LicenseType { get; set; }
        public string ExpirationDate { get; set; }
        public int LicenseYear { get; set; }
    }
}
