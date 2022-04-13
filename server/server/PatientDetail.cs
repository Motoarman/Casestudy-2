using System;
using System.Collections.Generic;

#nullable disable

namespace server
{
    public partial class PatientDetail
    {
        public PatientDetail()
        {
            Appointments = new HashSet<Appointment>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public string MedicalComplaint { get; set; }
        public DateTime? SelectedDate { get; set; }
        public DateTime? SelectedSlot { get; set; }
        public string VisitingStatus { get; set; }

        public virtual ICollection<Appointment> Appointments { get; set; }
    }
}
