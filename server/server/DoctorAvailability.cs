using System;
using System.Collections.Generic;

#nullable disable

namespace server
{
    public partial class DoctorAvailability
    {
        public int Id { get; set; }
        public int DoctorId { get; set; }
        public string DayInWeek { get; set; }
        public DateTime? StartingTime { get; set; }
        public DateTime? EndingTime { get; set; }
        public string OpenForDay { get; set; }
        public int? MinutePerPatient { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }

        public virtual Doctor Doctor { get; set; }
    }
}
