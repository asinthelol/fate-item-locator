using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using locator.Dtos.ItemDrop;
using locator.Dtos;
using locator.Models;

namespace locator.Mappers
{
    public static class ItemDropMappers
    {
      public static ItemDropDto ToItemDropDto(this Models.ItemDropLocations itemDrop)
      {
        return new ItemDropDto
        {
          id = itemDrop.id,
          itemId = itemDrop.id,
          questId = itemDrop.id,
          ap_drop = itemDrop.ap_drop,
          drop_rate = itemDrop.drop_rate
        };
      }

      public static Models.ItemDropLocations ToItemDropFromCreateDto(this CreateItemDropRequestDto itemDropDto)
      {
        return new Models.ItemDropLocations
        {
          itemId = itemDropDto.itemId,
          questId = itemDropDto.questId,
          ap_drop = itemDropDto.ap_drop,
          drop_rate = itemDropDto.drop_rate
        };
      }
    }
}