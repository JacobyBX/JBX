$(document).ready(function () {
    $('#webform').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                data2: {
                    title: $('#title').val(),
                    link: $('#link').val(),
                    imageUrl: $('#imageUrl').val(),
                    description: $('#description').val(),
                }
            },
            success: function () {
                $('#success').show();
                $('#webform2').hide();
            },
            error: function (xhr, res, text) {

            }
        });
    });
});