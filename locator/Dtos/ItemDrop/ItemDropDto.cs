using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace locator.Dtos.ItemDrop
{
    public class ItemDropDto
    {
      public int id { get; set; }
      public int itemId { get; set; }
      public int questId { get; set; }
      public decimal ap_drop { get; set; }
      public decimal drop_rate { get; set; }
    }
}