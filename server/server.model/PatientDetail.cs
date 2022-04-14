using System;
using System.Collections.Generic;

#nullable disable

namespace server.model
{
    public partial class PatientDetail
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public string Age { get; set; }
        public string Gender { get; set; }
        public string MedicalComplaint { get; set; }
        public DateTime? SelectedDate { get; set; }
        public string SelectedSlot { get; set; }
        public string VisitingStatus { get; set; }
    }
}
