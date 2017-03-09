using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PaperbanknotesServer.model
{
    public class Car
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long id { get; set; }
        public string naam { get; set; }
        public string merk { get; set; }
        public int bouwjaar { get; set; }
        public int aantal_deuren { get; set; }
        public int originele_waarde { get; set; }
        public int prijs { get; set; }
    }
}
