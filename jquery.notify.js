// jQuery Notify plugin

(function(factory, jQuery) {

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    $.fn.notify = function(text, timer) {
        var node = this;
        timer = typeof timer === undefined ? 3000 : timer * 1000;
        var notifyBlock = $('<div />'),
            notifyClose = $('<div />');
        notifyBlock.addClass('notify-block');
        notifyClose.addClass('notify-close');
        notifyClose.append('<i class="icon-cross"></i>');
        notifyClose.click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            NotifyClose();
        });
        notifyBlock.append(notifyClose).append(text);
        notifyBlock.insertBefore(node);
        setTimeout(NotifyClose, timer);
        function NotifyClose() {
            notifyBlock.animate({ height: '0px' }, 500, function() {
                notifyBlock.remove();
            });
        }
    }
}, window.jQuery));
