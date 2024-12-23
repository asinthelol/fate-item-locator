using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace locator.Models
{
    public class Quests
    {
      public int id { get; set; }
      public string name { get; set; } = string.Empty;
      public string area { get; set; } = string.Empty;
      public int ap { get; set; }
      public decimal bp_drop { get; set; }
    }
}