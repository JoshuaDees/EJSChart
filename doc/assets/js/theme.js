$(function() {
  var $options = {
    init: function() {
      if (localStorage.getItem('options')) {
        var options = JSON.parse(localStorage.options);

        for (var i=0; i<options.length; i++) {
          var $option = $('.options').find('input:checkbox').eq(i);
          $option.prop('checked', options[i]);

          $options.update($option);
        }
      }

      $('.options input:checkbox').on('change', function() {
        $options.update($(this), true);
      });
    },

    update: function($option, write) {
      $('.item.' + $.trim($option.parent('label').text()).toLowerCase()).each(function(i, option) {
        $(option)
          .toggleClass('d-none', !$option.is(':checked'))
          .parent()
          .parent()
          .toggleClass('d-none', !$(option).parent().parent().find('.item:not(.d-none)').length);
      });

      if (write) {
        var options = [];

        $('.options input:checkbox').each(function(i,el) {
            options.push($(el).is(':checked'));
        });

        localStorage.options = JSON.stringify(options);
      }
    }
  };

  var $prettyprint = {
    init: function() {
      $('.prettyprint').each(function(i, el) {
        $(el)
          .addClass('linenums')
          .html(
            $(el).html()
              .replace(/\<\/?code\>/g, '\n')
              .replace(/\<\/?p\>/g, '\n')
              .replace(/^\n/, '')
              .replace(/\n\n/g, '\n')
              .replace(/\n$/, '')
              .replace(/(^|\n) {28}/g, '$1')
              .replace(/(^|\n) {16}/g, '$1')
          );
      })

      prettyPrint();
    }
  }

  $options.init();
  $prettyprint.init();
});
