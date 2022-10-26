document.addEventListener('DOMContentLoaded', () => {
    $('input#btn_translate').click(() => {
      $.get('https://fourtonfish.com/hellosalut/?lang=' +
            $('input#language_code').val(), (data) => {
                 $('div#hello').html(data.hello);
        });
    });
  });