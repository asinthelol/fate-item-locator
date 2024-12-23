using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace locator.Dtos
{
    public class CreateItemRequestDto
    {
      public string name { get; set; } = string.Empty;
      public string rarity { get; set; } = string.Empty;
      public string type { get; set; } = string.Empty;
      public string description { get; set; } = string.Empty;
      public string image { get; set; } = string.Empty;
    }
}