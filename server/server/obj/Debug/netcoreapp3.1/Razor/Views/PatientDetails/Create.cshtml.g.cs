#pragma checksum "C:\Users\Arman15411\Desktop\Casestudy2\server\server\Views\PatientDetails\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d18d38b4a44fc42dbeeeb6828d652faa69bab312"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_PatientDetails_Create), @"mvc.1.0.view", @"/Views/PatientDetails/Create.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d18d38b4a44fc42dbeeeb6828d652faa69bab312", @"/Views/PatientDetails/Create.cshtml")]
    public class Views_PatientDetails_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<server.PatientDetail>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "C:\Users\Arman15411\Desktop\Casestudy2\server\server\Views\PatientDetails\Create.cshtml"
  
    ViewData["Title"] = "Create";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h1>Create</h1>

<h4>PatientDetail</h4>
<hr />
<div class=""row"">
    <div class=""col-md-4"">
        <form asp-action=""Create"">
            <div asp-validation-summary=""ModelOnly"" class=""text-danger""></div>
            <div class=""form-group"">
                <label asp-for=""FirstName"" class=""control-label""></label>
                <input asp-for=""FirstName"" class=""form-control"" />
                <span asp-validation-for=""FirstName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""LastName"" class=""control-label""></label>
                <input asp-for=""LastName"" class=""form-control"" />
                <span asp-validation-for=""LastName"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""PhoneNo"" class=""control-label""></label>
                <input asp-for=""PhoneNo"" class=""form-control"" />
                <span asp-validation-for=""PhoneNo"" class=""text-dange");
            WriteLiteral(@"r""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""EmailId"" class=""control-label""></label>
                <input asp-for=""EmailId"" class=""form-control"" />
                <span asp-validation-for=""EmailId"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Age"" class=""control-label""></label>
                <input asp-for=""Age"" class=""form-control"" />
                <span asp-validation-for=""Age"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""Gender"" class=""control-label""></label>
                <input asp-for=""Gender"" class=""form-control"" />
                <span asp-validation-for=""Gender"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""MedicalComplaint"" class=""control-label""></label>
                <input asp-for=""MedicalComplaint"" class=");
            WriteLiteral(@"""form-control"" />
                <span asp-validation-for=""MedicalComplaint"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""SelectedDate"" class=""control-label""></label>
                <input asp-for=""SelectedDate"" class=""form-control"" />
                <span asp-validation-for=""SelectedDate"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""SelectedSlot"" class=""control-label""></label>
                <input asp-for=""SelectedSlot"" class=""form-control"" />
                <span asp-validation-for=""SelectedSlot"" class=""text-danger""></span>
            </div>
            <div class=""form-group"">
                <label asp-for=""VisitingStatus"" class=""control-label""></label>
                <input asp-for=""VisitingStatus"" class=""form-control"" />
                <span asp-validation-for=""VisitingStatus"" class=""text-danger""></span>
            </div>
            <d");
            WriteLiteral("iv class=\"form-group\">\r\n                <input type=\"submit\" value=\"Create\" class=\"btn btn-primary\" />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <a asp-action=\"Index\">Back to List</a>\r\n</div>\r\n\r\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 77 "C:\Users\Arman15411\Desktop\Casestudy2\server\server\Views\PatientDetails\Create.cshtml"
      await Html.RenderPartialAsync("_ValidationScriptsPartial");

#line default
#line hidden
#nullable disable
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<server.PatientDetail> Html { get; private set; }
    }
}
#pragma warning restore 1591
