define(['jquery',
        'backbone',
        'views/HomeView',
        'views/ProjectsView',
        'views/GuidoView',
        'domReady!'], function($, Backbone, HomeView, ProjectsView, GuidoView) {

    'use strict';

    function ROUTER() {

        this.CONFIG = {
            placeholder_id: 'placeholder'
        }

    }

    ROUTER.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang !== null ? this.CONFIG.lang : 'en';

        /* This... */
        var _this = this;

        /* Define the router. */
        var AppRouter = Backbone.Router.extend({

            /* Define the routes. */
            routes: {
                ''                  :   'home',
                '(/)home(/)'        :   'home',
                '(/)guido(/)'       :   'guido',
                '(/)projects(/)'    :   'projects'
            }

        });

        /* Initiate router. */
        var app_router = new AppRouter;

        /* Root URL. */
        app_router.on('route:home', function (lang) {

            /* Display home page. */
            var view = new HomeView({
                placeholder: _this.CONFIG.placeholder_id
            });
            view.render();

        });

        /* Projects. */
        app_router.on('route:projects', function (lang) {

            /* Display projects. */
            var view = new ProjectsView({
                placeholder: _this.CONFIG.placeholder_id
            });
            view.render();

        });

        /* Guido. */
        app_router.on('route:guido', function (lang) {

            /* Display projects. */
            var view = new GuidoView({
                placeholder: _this.CONFIG.placeholder_id
            });
            view.render();

        });

        /* Initiate Backbone history. */
        Backbone.history.start();

    };

    return ROUTER;


});