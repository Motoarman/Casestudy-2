using System;
using System.Collections.Generic;

#nullable disable

namespace server.model
{
    public partial class ContactU
    {
        public int ContactId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string EmailId { get; set; }
        public string PComment { get; set; }
    }
}
