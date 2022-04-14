using System;
using System.Collections.Generic;

#nullable disable

namespace server.model
{
    public partial class Appointment
    {
        public int Id { get; set; }
        public int DoctorId { get; set; }
        public int PatientId { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
