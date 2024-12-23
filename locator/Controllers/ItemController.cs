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
    public class ItemController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        
        public ItemController(ApplicationDBContext context)
        {
          _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var items = _context.Items.ToList()
            .Select(i => i.ToItemDto());

            if (items == null) return NotFound();

            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            var item = _context.Items.Find(id);

            if (item == null) return NotFound();

            return Ok(item.ToItemDto());
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateItemRequestDto itemDto)
        {
            var itemModel = itemDto.ToItemFromCreateDto();
            _context.Items.Add(itemModel);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = itemModel.id }, itemModel.ToItemDto());
        }
    }
}