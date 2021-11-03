#pragma checksum "C:\Users\raja.bose\OneDrive - Accenture\fromVipin\DollarGeneral-master (1)\DollarGeneral-master\Dollar\Views\Home\UploadDatatable.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ccf1c913a88efadf2461da06bedbf8c1f7a98105"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_UploadDatatable), @"mvc.1.0.view", @"/Views/Home/UploadDatatable.cshtml")]
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
#nullable restore
#line 1 "C:\Users\raja.bose\OneDrive - Accenture\fromVipin\DollarGeneral-master (1)\DollarGeneral-master\Dollar\Views\_ViewImports.cshtml"
using Dollar;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\raja.bose\OneDrive - Accenture\fromVipin\DollarGeneral-master (1)\DollarGeneral-master\Dollar\Views\_ViewImports.cshtml"
using Dollar.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ccf1c913a88efadf2461da06bedbf8c1f7a98105", @"/Views/Home/UploadDatatable.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"c678e6068b2114e7389a4564a2b435401e0cca94", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_UploadDatatable : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Users\raja.bose\OneDrive - Accenture\fromVipin\DollarGeneral-master (1)\DollarGeneral-master\Dollar\Views\Home\UploadDatatable.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<h2>Payment Upload</h2>

<input type=""file"" id=""file"" name=""file"" />
<input type=""button"" id=""btnUpload"" value=""Upload File"" />

<div style=""width:90%; margin:0 auto;"">
    <table id=""example"">
        <thead>
            <tr>
                <th>Store Id</th>
                <th>Store Name</th>
                <th>Store Phone</th>
            </tr>
        </thead>
    </table>
</div>

");
            WriteLiteral("<link href=\"//cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css\" rel=\"stylesheet\" />\n");
            DefineSection("Scripts", async() => {
                WriteLiteral(@"
    <script src=""https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js""></script>
    <script src=""//cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js""></script>
    <script>
        $(document).ready(function () {
            var jsonData = {
                ""data"": [
                    {
                        ""Store_id"": ""2904"",
                        ""Store_name"": ""EL CAMPO,TX"",
                        ""Store_phone"": ""WHARTON""
                    },
                    {
                        ""Store_id"": ""2913"",
                        ""Store_name"": ""DAVENPORT,IA"",
                        ""Store_phone"": ""SCOTT""
                    }]
            };
            $('#btnUpload').click(function () {
                var fileInput = document.getElementById('file');
                var file = fileInput.files[0];
                var formData = new FormData();
                formData.append('file', file);

                $.ajax({
                    url: '/Home/UploadDatatable',
           ");
                WriteLiteral(@"         type: ""POST"",
                    contentType: false, // Not to set any content header
                    processData: false, // Not to process data
                    data: formData,
                    success: function (data) {
                        //myJsonData = data;
                        //populateDataTable(myJsonData);
                        //assignToEventsColumns(data);
                        $('#example').DataTable({
                            ""bAutoWidth"": false,
                            ""datatype"": ""json"",
                            data: data.data,
                            ""columns"": [
                                { ""data"": ""store_id"" },
                                { ""data"": ""store_name"" },
                                { ""data"": ""store_phone"" }
                            ]
                        })
                    }
                });

                //function assignToEventsColumns(jsonData) {
                //    var table = $('#example').DataTable({");
                WriteLiteral(@"
                //        ""bAutoWidth"": false,
                //        ""datatype"": ""json"",
                //        data: jsonData.data,
                //        ""columns"": [
                //            { ""data"": ""Store_id"" },
                //            { ""data"": ""Store_name"" },
                //            { ""data"": ""Store_phone"" }
                //        ]
                //    })
                //}
            });
        });
    </script>
");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591