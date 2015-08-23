define(function (require) {

    'use strict';

    require('bootstrap');
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Handlebars = require('handlebars');
    var templates = require('text!application/html/templates.hbs');

    return Backbone.View.extend({

        initialize: function(options) {
            this.options = options;
        },

        render: function() {

            /* Load main structure. */
            var source = $(templates).filter('#structure').html();
            var template = Handlebars.compile(source);
            var dynamic_data = {
                projects: [
                    {
                        label: 'Downloader',
                        name: 'geobricks_downloader',
                        description: 'Acquire geospatial data from publicly available datasources. The library takes advantage of the plug-in mechanism, one for each data provider, and it is easily extensible.',
                        html_url: 'https://github.com/geobricks/geobricks_downloader',
                        language: 'Py'
                    },
                    {
                        label: 'Leaflet GeoJSON Encoded',
                        name: 'Leaflet.GeoJSON.Encoded',
                        description: 'This Leaflet plugin extends the L.GeoJSON layer using Google polyline encoding algorithm, allowing an optimized data transfer. The algorithm is documented in Google Maps API Docs.',
                        html_url: 'https://github.com/geobricks/Leaflet.GeoJSON.Encoded',
                        language: 'JS'
                    },
                    {
                        label: 'Raster Correlation',
                        name: 'geobricks_raster_correlation',
                        description: 'This library allows users to correlate two rasters, compute correlation statistics and the data to generate scatter series plots.<br><br>',
                        html_url: 'https://github.com/geobricks/geobricks_raster_correlation',
                        language: 'Py'
                    },
                    {
                        label: 'Processing',
                        name: 'geobricks_processing',
                        description: 'Programmable processing of raster layers: re-projection, mask-based cut, raster maths and much more.<br><br><br>',
                        html_url: 'https://github.com/geobricks/geobricks_processing',
                        language: 'Py'
                    },
                    {
                        label: 'Map Classify',
                        name: 'geobricks_mapclassify',
                        description: 'Utilities library capable of generating SLD objects for GeoServer to style thematic maps.<br><br><br><br>',
                        html_url: 'https://github.com/geobricks/geobricks_mapclassify',
                        language: 'Py'
                    },
                    {
                        label: 'GDALCalc Wrapper',
                        name: 'geobricks_gdal_calc',
                        description: 'Python wrapper for the popular GDALCalc library.<br><br><br><br><br>',
                        html_url: 'https://github.com/geobricks/geobricks_gdal_calc',
                        language: 'Py'
                    }
                ],
                containers: [
                    {
                        name: 'MODIS',
                        description: 'Acquire MODIS Data.',
                        html_url: 'https://hub.docker.com/'
                    },
                    {
                        name: 'Rasters Correlation',
                        description: 'Acquire MODIS Data.',
                        html_url: 'https://hub.docker.com/'
                    }
                ],
                developers: [
                    {
                        name: 'Simone Murzilli',
                        image: 'images/simone.png',
                        description: 'Maps lover.',
                        html_url: 'https://hub.docker.com/',
                        url_linkedin: 'https://it.linkedin.com/pub/simone-murzilli/13/a96/130',
                        url_google: 'https://plus.google.com/103669236874687788343/',
                        url_twitter: 'https://twitter.com/s_murzilli'
                    },
                    {
                        name: 'Guido Barbaglia',
                        image: 'images/guido.jpg',
                        description: 'Software engineer and traveler.',
                        html_url: 'https://hub.docker.com/',
                        url_linkedin: 'https://it.linkedin.com/in/guidobarbaglia',
                        url_google: 'https://plus.google.com/+GuidoBarbaglia/',
                        url_twitter: 'https://twitter.com/Kalimaha'
                    },
                    {
                        name: 'Stefano Cudini',
                        image: 'images/stefano.png',
                        description: 'Climber and paraglider.',
                        html_url: 'https://hub.docker.com/',
                        url_twitter: 'https://twitter.com/zakis',
                        url_google: 'https://plus.google.com/+StefanoCudini/about'
                    }
                ]
            };
            var html = template(dynamic_data);
            $('#' + this.options.placeholder).html(html);

            /* Bind button. */
            $('#show_projects_button').click(function() {
                Backbone.history.navigate('/projects/', {trigger: true});
            });

            /* Return... */
            return this;

        }

    });

});