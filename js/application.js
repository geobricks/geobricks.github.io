define(['jquery',
        'handlebars',
        'backbone',
        'text!application/html/templates.hbs',
        'i18n!application/nls/translate',
        'amplify',
        'domReady!'], function($, Handlebars, Backbone, templates, translate) {

    'use strict';

    function APP() {

        this.CONFIG = {
            lang: 'en',
            user_id: null,
            placeholder_id: 'placeholder',
            bl: [
                'surveys-webportal', 'surveys-android', 'surveys-engine', 'surveys-simulator',
                'SoccerGeoStats', 'jsgeo', 'Playground', 'pgeorest', 'Playground-js', 'pgeo',
                'geobricks.github.io', 'magic_web', 'magic_modis', 'pgeomodis', 'pgeotrmm',
                'pgeolandsat', 'geobricks', 'ECOCountriesDemo'
            ]
        }

    }

    APP.prototype.init = function(config) {

        /* This... */
        var _this = this;

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Load GitHUb projects. */
        //$.ajax({
        //
        //    type: 'GET',
        //    url: 'https://api.github.com/orgs/geobricks/repos?direction=asc&per_page=100&client_secret=acb08fc4667e8d88d5d2798a66a5fa79f724cfd8',
        //
        //    success: function (response) {
        //
        //        /* Cast the response to JSON, if needed. */
        //        var json = response;
        //        if (typeof json == 'string')
        //            json = $.parseJSON(response);
        //
        //        /* Blacklist. */
        //        var projects = [];
                var bl = [
                    'surveys-webportal', 'surveys-android', 'surveys-engine', 'surveys-simulator',
                    'SoccerGeoStats', 'jsgeo', 'Playground', 'pgeorest', 'Playground-js', 'pgeo',
                    'geobricks.github.io', 'magic_web', 'magic_modis', 'pgeomodis', 'pgeotrmm',
                    'pgeolandsat', 'geobricks', 'ECOCountriesDemo'
                ];
        //
        //        /* Add items to be displayed. */
        //        for (var i = 0; i < json.length; i++) {
        //            if ($.inArray(json[i].name, bl) < 0)
        //                projects.push(json[i]);
        //        }
        //
        //        /* Add a Bootstrap row every 4 items. */
        //        Handlebars.registerHelper('if_is_row', function (value, options) {
        //            if ((1 + value) % 3 === 0)
        //                return options.fn(this);
        //            return options.inverse(this);
        //        });
        //
        //        /* Load main structure. */
        //        var source = $(templates).filter('#structure').html();
        //        var template = Handlebars.compile(source);
        //        var dynamic_data = {
        //            projects: projects
        //        };
        //        var html = template(dynamic_data);
        //        $('#' + _this.CONFIG.placeholder_id).html(html);
        //
        //    }
        //
        //});

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
        $('#' + _this.CONFIG.placeholder_id).html(html);

    };

    return APP;

});