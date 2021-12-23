using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class spLicenseAdmin
    {
        [Key]
        public int Id { get; set; }
        public string Type { get; set; }
        public string Jurisdiction_Name { get; set; }
        public string Description { get; set; }
        public int Account { get; set; }
        public string Code { get; set; }

        public string OneTimePayment { get; set; }
        public string GrossReceipts { get; set; }
        public bool? isActive { get; set; }

    }
}
