using System;
using System.Collections.Generic;

#nullable disable

namespace server.model
{
    public partial class Doctor
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNo { get; set; }
        public string EmailId { get; set; }
        public string SpecializationId { get; set; }
        public string Photo { get; set; }
    }
}
