using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using locator.Data;
using locator.Dtos;
using locator.Mappers;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace locator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public QuestController(ApplicationDBContext context)
        {
          _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
          var quests = _context.Quests.ToList()
          .Select(q => q.ToQuestDto());;

          if (quests == null) return NotFound();

          return Ok(quests);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
          var quest = _context.Quests.Find(id);

          if (quest == null) return NotFound();

          return Ok(quest.ToQuestDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateQuestRequestDto questDto)
        {
            var questModel = questDto.ToQuestFromCreateDto();
            _context.Quests.Add(questModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = questModel.id }, questModel.ToQuestDto());
        }
    }
}