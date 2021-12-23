using WebAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class LicenseAdmin
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "License Type is required.")]
        public string Type { get; set; }
        public int Jurisdiction { get; set; }
        public string Description { get; set; }
        public int Account { get; set; }

        [Required(ErrorMessage = "Code is required and must be unique.")]
        public string Code { get; set; }

        public string OneTimePayment { get; set; }
        public string GrossReceipts { get; set; }
        public bool? isActive { get; set; }
        public JurisdictionMaster JurisdictionMaster { get; set; }
        public int LicenseTypesID { get; set; }
    }

}