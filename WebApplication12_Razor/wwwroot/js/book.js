alert();
var dataTable;

$(document).ready(function () {
   
    loadDataTable();
})

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "api/book",
            "type": "Get",
            "datatype":"json"
        },
        "columns": [
            { "data": "title", "width": "20%" },
            { "data": "author", "width": "20%" },
            { "data": "isbn", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `
                  <div class="text-center">
                   <a href="/booklist/edit?id=${data}"class="btn btn-info">Edit</a>
                   <a class="btn btn-danger" onclick=Delete("/api/book?id=${data}")>Delete<a/>
                   </div>
                    `;
                }
            }
        ]
        
    })
}
/*function Delete(url) {
    //alert(url)
    swal({
        title: "want to delete data?",
        text: "delete Information!!!",
        buttons: true,
        dangerModel: true,
        icon:"warning"
    }).then((willdelete) => {
        if (willdelete) {
            $.ajax({
                url: url,
                type: "DELETE",
                success: function (data) {
                    if (data.success) {
                        toastr.success(data.message);
                    dataTable.ajax.reload();
                }
                else{
                    toastr.error(data.message);
                }
            }
            })
        }
    })
}







*/