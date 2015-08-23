define(function (require) {

    'use strict';

    require('bootstrap');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var templates = require('text!application/html/templates.hbs');
    var projects = require('text!application/html/projects.hbs');

    return Backbone.View.extend({

        initialize: function(options) {
            this.options = options;
            _.bindAll(this, 'render');
        },

        events: {
            'click #show_projects_button'   :   'show_projects'
        },

        render: function() {

            /* Load main structure. */
            var source = $(projects).filter('#structure').html();
            var template = Handlebars.compile(source);
            var dynamic_data = {
                projects: [
                    {
                        label: 'Downloader',
                        name: 'geobricks_downloader',
                        description: 'Acquire geospatial data from publicly available datasources. The library takes advantage of the plug-in mechanism, one for each data provider, and it is easily extensible.',
                        html_url: 'https://github.com/geobricks/geobricks_downloader',
                        language: 'Py'
                    }
                ]
            };
            var html = template(dynamic_data);
            $('#' + this.options.placeholder).html(html);

            /* Return... */
            return this;

        },

        show_projects: function() {
            Backbone.history.navigate('/projects/', {trigger: true});
        }

    });

});