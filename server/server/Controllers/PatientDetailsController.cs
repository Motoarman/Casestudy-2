using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.model;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientDetailsController : ControllerBase
    {
        private readonly lifeplus_dbContext _context;

        public PatientDetailsController(lifeplus_dbContext context)
        {
            _context = context;
        }

        // GET: api/PatientDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PatientDetail>>> GetPatientDetails()
        {
            return await _context.PatientDetails.ToListAsync();
        }

        // GET: api/PatientDetails/5
        [HttpGet("{doctor_id}")]
        public async Task<ActionResult<IEnumerable<PatientDetail>>>GetPatientDetail(int doctor_id)
        {

            var item = from i in _context.PatientDetails
                       where i.DoctorId == doctor_id
                       select i;

            if (item == null)
            {
                return NotFound();
            }

            return await item.ToListAsync();
        }

        //// PUT: api/PatientDetails/5
        //// To protect from overposting attacks, enable the specific properties you want to bind to, for
        //// more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutPatientDetail(int id, PatientDetail patientDetail)
        //{
        //    if (id != patientDetail.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(patientDetail).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!PatientDetailExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/PatientDetails
        [HttpPost]
        public async Task<ActionResult<PatientDetail>> PostPatientDetail(PatientDetail patientDetail)
        {
            _context.PatientDetails.Add(patientDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPatientDetail", new { id = patientDetail.Id }, patientDetail);
        }

        // DELETE: api/PatientDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<PatientDetail>> DeletePatientDetail(int id)

        {
            var patientDetail = await _context.PatientDetails.FindAsync(id);
            if (patientDetail == null)
            {
                return NotFound();
            }

            _context.PatientDetails.Remove(patientDetail);
            await _context.SaveChangesAsync();

            return patientDetail;
        }

        private bool PatientDetailExists(int id)
        {
            return _context.PatientDetails.Any(e => e.Id == id);
        }
    }
}
