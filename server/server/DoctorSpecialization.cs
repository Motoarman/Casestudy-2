using System;
using System.Collections.Generic;

#nullable disable

namespace server
{
    public partial class DoctorSpecialization
    {
        public DoctorSpecialization()
        {
            Doctors = new HashSet<Doctor>();
        }

        public int Id { get; set; }
        public string SpecializationIn { get; set; }

        public virtual ICollection<Doctor> Doctors { get; set; }
    }
}
