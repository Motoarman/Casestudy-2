using System;
using System.Collections.Generic;

#nullable disable

namespace server.model
{
    public partial class AppointmentStatus
    {
        public int Id { get; set; }
        public string Status { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}
