$(document).ready(function () {
    $('#webform').submit(function (e) {
        e.preventDefault();
        let form = $(this);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: form.attr('action'),
            data: {
                data3: {
                    title: $('#title').val(),
                    link: $('#link').val(),
                    imageUrl: $('#imageUrl').val(),
                    description: $('#description').val(),
                }
            },
            success: function () {
                $('#success').show();
                $('#webform').hide();
            },
            error: function (xhr, res, text) {
    
            }
        });
    });
});
