define(['jquery',
        'handlebars',
        'text!html/templates.html',
        'text!js/modules/geobricks_modis/package.json',
        'text!js/modules/geobricks_trmm/package.json'], function($, Handlebars, templates, MODIS, TRMM) {

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

        /* Cast object. */
        MODIS = $.parseJSON(MODIS);
        TRMM = $.parseJSON(TRMM);

        /* Load button template. */
        var source = $(templates).filter('#portfolio_item').html();
        var template = Handlebars.compile(source);
        var dynamic_data = {
            label: MODIS.label[this.CONFIG.lang],
            description: MODIS.description,
            github_url: MODIS.repository.url
        };
        var html = template(dynamic_data);
        $('#portfolio_content').append(html);

        /* Load button template. */
        source = $(templates).filter('#portfolio_item').html();
        template = Handlebars.compile(source);
        dynamic_data = {
            label: TRMM.label[this.CONFIG.lang],
            description: TRMM.description,
            github_url: TRMM.repository.url
        };
        html = template(dynamic_data);
        $('#portfolio_content').append(html);

    };

    return APP;

});