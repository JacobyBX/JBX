$(document).ready(function () {
    $('#webform').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                data1: {
                 
                }
            },
            success: function () {
                $('#success').show();
                $('#webform2').hide();
            },
            error: function (xhr, res, text) {
console.log("An Error Occurred")
            }
        });
    });
});