using System;
using System.Collections.Generic;

#nullable disable

namespace server
{
    public partial class Doctor
    {
        public Doctor()
        {
            Appointments = new HashSet<Appointment>();
            DoctorAvailabilities = new HashSet<DoctorAvailability>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public int SpecializationId { get; set; }

        public virtual DoctorSpecialization Specialization { get; set; }
        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual ICollection<DoctorAvailability> DoctorAvailabilities { get; set; }
    }
}
