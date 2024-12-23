using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace locator.Models
{
    public class ItemDropLocations
    {
      public int id { get; set; }
      public int itemId { get; set; }
      public int questId { get; set; }
      public decimal ap_drop { get; set; }
      public decimal drop_rate { get; set; }
    }
}