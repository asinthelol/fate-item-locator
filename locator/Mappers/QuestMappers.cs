using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using locator.Dtos.Quest;
using locator.Dtos;
using locator.Models;

namespace locator.Mappers
{
    public static class QuestMappers
    {
      public static QuestDto ToQuestDto(this Models.Quests quest)
      {
        return new QuestDto
        {
          id = quest.id,
          name = quest.name,
          area = quest.area,
          ap = quest.ap,
          bp_drop = quest.bp_drop,
        };
      }

      public static Models.Quests ToQuestFromCreateDto(this CreateQuestRequestDto questDto)
      {
        return new Models.Quests
        {
          name = questDto.name,
          area = questDto.area,
          ap = questDto.ap,
          bp_drop = questDto.bp_drop,
        };
      }
    }
}