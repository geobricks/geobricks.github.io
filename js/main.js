var root = '../../submodules/';

require.config({

    baseUrl: 'js/libs',

    paths: {

        application: root + '../',
        APPLICATION: root + '../js/application',

        router: root + '../',
        ROUTER: root + '../js/router',

        views: root + '../js/views'

    },

    shim: {
        amplify: ['jquery'],
        bootstrap: ['jquery'],
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        highcharts: ['jquery'],
        underscore: {
            exports: '_'
        }
    }

});

require(['APPLICATION'], function(APP) {

    /* Initiate components. */
    var app = new APP();

    /* Initiate the application. */
    app.init();

});