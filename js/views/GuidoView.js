/*global define*/
define(function (require) {

    'use strict';

    require('bootstrap');

    var $,
        Backbone,
        Handlebars,
        guido,
        github_projects,
        i,
        source,
        template,
        dynamic_data,
        html;

    $ = require('jquery');
    Backbone = require('backbone');
    Handlebars = require('handlebars');
    guido = require('text!application/html/guido.hbs');

    return Backbone.View.extend({

        initialize: function (options) {
            this.options = options;
        },

        events: {
            //'click #show_projects_button'   :   'show_projects'
        },

        render: function () {

            /* Load main structure. */
            source = $(guido).filter('#structure').html();
            template = Handlebars.compile(source);
            dynamic_data = {
                //projects: clean
            };
            html = template(dynamic_data);
            $('#' + this.options.placeholder).html(html);

            /* Return... */
            return this;

        },

        show_projects: function () {
            Backbone.history.navigate('/projects/', {trigger: true});
        }

    });

});