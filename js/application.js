define(['jquery',
        'handlebars',
        'backbone',
        'text!application/html/templates.hbs',
        'i18n!application/nls/translate',
        'ROUTER',
        'amplify',
        'domReady!'], function($, Handlebars, Backbone, templates, translate, ROUTER) {

    'use strict';

    function APP() {

        this.CONFIG = {
            lang: 'en',
            user_id: null,
            placeholder_id: 'placeholder'
        }

    }

    APP.prototype.init = function(config) {

        /* This... */
        var _this = this;

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Initiate the routing. */
        var router = new ROUTER();
        router.init({});

    };

    return APP;

});