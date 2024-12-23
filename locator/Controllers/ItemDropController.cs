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
    public class ItemDropController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        
        public ItemDropController(ApplicationDBContext context)
        {
          _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
          var itemDrops = _context.ItemDropLocations.ToList()
          .Select(i => i.ToItemDropDto());;

          if (itemDrops == null) return NotFound();

          return Ok(itemDrops);
        }

        [HttpGet("{itemid}")]
        public IActionResult GetById([FromRoute] int itemid)
        {
          var itemDrops = _context.ItemDropLocations.Where(i => i.itemId == itemid).ToList();

          if (itemDrops == null) return NotFound();

          return Ok(itemDrops.Select(i => i.ToItemDropDto()));
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateItemDropRequestDto itemDropDto)
        {
            var itemDropModel = itemDropDto.ToItemDropFromCreateDto();
            _context.ItemDropLocations.Add(itemDropModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = itemDropModel.id }, itemDropModel.ToItemDropDto());
        }
    }
}