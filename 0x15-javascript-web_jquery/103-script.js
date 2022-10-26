document.addEventListener('DOMContentLoaded', () => {
    $('input#btn_translate').on('keypress click', (e) => {
      $.get('https://fourtonfish.com/hellosalut/?lang=' +
  $('input#language_code').val(),(data) => {
      if (e.which === 13 || e.type === 'click') {
        $('div#hello').html(data.hello);
      }
      });
    });
  });