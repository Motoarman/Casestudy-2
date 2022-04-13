using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactUsController : ControllerBase
    {
        private readonly lifeplus_dbContext _context;

        public ContactUsController(lifeplus_dbContext context)
        {
            _context = context;
        }

        // GET: api/ContactUs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ContactU>>> GetContactUs()
        {
            return await _context.ContactUs.ToListAsync();
        }

        // GET: api/ContactUs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ContactU>> GetContactU(int id)
        {
            var contactU = await _context.ContactUs.FindAsync(id);

            if (contactU == null)
            {
                return NotFound();
            }

            return contactU;
        }

        // PUT: api/ContactUs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutContactU(int id, ContactU contactU)
        {
            if (id != contactU.ContactId)
            {
                return BadRequest();
            }

            _context.Entry(contactU).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactUExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ContactUs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ContactU>> PostContactU(ContactU contactU)
        {
            _context.ContactUs.Add(contactU);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContactU", new { id = contactU.ContactId }, contactU);
        }

        // DELETE: api/ContactUs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ContactU>> DeleteContactU(int id)
        {
            var contactU = await _context.ContactUs.FindAsync(id);
            if (contactU == null)
            {
                return NotFound();
            }

            _context.ContactUs.Remove(contactU);
            await _context.SaveChangesAsync();

            return contactU;
        }

        private bool ContactUExists(int id)
        {
            return _context.ContactUs.Any(e => e.ContactId == id);
        }
    }
}
