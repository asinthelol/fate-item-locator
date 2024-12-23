using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace locator.Dtos
{
    public class CreateItemDropRequestDto
    {
      public int itemId { get; set; }
      public int questId { get; set; }
      public decimal ap_drop { get; set; }
      public decimal drop_rate { get; set; }
    }
}