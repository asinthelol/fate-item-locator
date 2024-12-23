using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using locator.Dtos.Item;
using locator.Dtos;
using locator.Models;

namespace locator.Mappers
{
    public static class ItemMappers
    {
      public static ItemDto ToItemDto(this Models.Items item)
      {
        return new ItemDto
        {
          id = item.id,
          name = item.name,
          rarity = item.rarity,
          type = item.type,
          description = item.description,
          image = item.image
        };
      }

      public static Models.Items ToItemFromCreateDto(this CreateItemRequestDto itemDto)
      {
        return new Models.Items
        {
          name = itemDto.name,
          rarity = itemDto.rarity,
          type = itemDto.type,
          description = itemDto.description,
          image = itemDto.image
        };
      }
    }
}