module.exports = {
  publicClasses: function(context, options) {
    'use strict';

    var ret = '';

    for(var i=0; i < context.length; i++) {
      if(!context[i].itemtype && context[i].access === 'public') {
        ret = ret + options.fn(context[i]);
      } else if (context[i].itemtype) {
        ret = ret + options.fn(context[i]);
      }
    }

    return ret;
  }
};
