define([], function() {

    'use strict';

    function APP() {

        var lang = 'en';

        this.CONFIG = {

            lang: lang

        };

    }

    APP.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'E';

        /* This... */
        var _this = this;

    };

    return APP;

});