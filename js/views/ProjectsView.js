define(function (require) {

    'use strict';

    require('bootstrap');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var templates = require('text!application/html/templates.hbs');
    var projects = require('text!application/html/projects.hbs');
    var github_projects = require('text!github_projects/projects.json');

    return Backbone.View.extend({

        initialize: function(options) {
            this.options = options;
            _.bindAll(this, 'render');
        },

        events: {
            'click #show_projects_button'   :   'show_projects'
        },

        render: function() {

            /* Cast GitHub file to JSON object. */
            github_projects = $.parseJSON(github_projects);

            /* Remove blacklisted projects. */
            var clean = [];
            for (var i = 0 ; i < github_projects.length ; i++)
                if ($.inArray(github_projects[i].name, this.bl) < 0)
                    clean.push(github_projects[i]);

            /* Load main structure. */
            var source = $(projects).filter('#structure').html();
            var template = Handlebars.compile(source);
            var dynamic_data = {
                projects: clean
            };
            var html = template(dynamic_data);
            $('#' + this.options.placeholder).html(html);

            /* Return... */
            return this;

        },

        show_projects: function() {
            Backbone.history.navigate('/projects/', {trigger: true});
        },

        bl: [
            'surveys-webportal', 'surveys-android', 'surveys-engine', 'surveys-simulator',
            'SoccerGeoStats', 'jsgeo', 'Playground', 'pgeorest', 'Playground-js', 'pgeo',
            'geobricks.github.io', 'magic_web', 'magic_modis', 'pgeomodis', 'pgeotrmm',
            'pgeolandsat', 'geobricks', 'ECOCountriesDemo'
        ]

    });

});