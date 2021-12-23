using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class JurisdictionMaster
    {
        [Key]
        public int JurisdictionId { get; set; }

        [Display(Name = "Jurisdiction")]
        public string Jurisdiction_Name { get; set; }

    }
}
