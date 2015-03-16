'use strict';

module.exports = function (grunt) {

    var Handlebars = require('handlebars');

    /* Initiate configuration. */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    /* Load Handlebars template for tiles. */
    var source = grunt.file.read('html/templates.html', [, {
        encoding: 'utf8'
    }]);
    var template = Handlebars.compile(source);
    var html = '<div class="row">';
    var counter = 1;

    /* Iterate over modules directory. */
    grunt.file.recurse('js/modules/', function callback(abspath, rootdir, subdir, filename) {

        /* Read package.json excluding plugins. */
        if (subdir.indexOf('node_modules') < 0 && filename === 'package.json') {

            var json = grunt.file.readJSON(abspath, [, {
                encoding: 'utf8'
            }]);

            /* Populate template. */
            var dynamic_data = {
                label: json.label['en'],
                description: json.description,
                github_url: json.repository.url,
                language: json.language,
                page_link: '/geobricks/projects/' + json.name + '.html'
            };
            html += template(dynamic_data);

            if (counter++ % 3 == 0)
                html += '</div><div class="row">';

        }

        /* Copy README.md files. */
        if (subdir.indexOf('node_modules') < 0 && filename === 'README.html') {

            /* Copy files in the projects folder. */
            grunt.file.copy(abspath, rootdir + '../../projects/' + subdir + '.html', [, {
                encoding: 'utf8'
            }]);

        }

    });

    html += '</div>';

    /* Load home page. */
    source = grunt.file.read('html/index.html', [, {encoding: 'utf8'}]);
    template = Handlebars.compile(source);
    var dynamic_data = {portfolio_content: html};
    var index = template(dynamic_data);

    /* Write index.html. */
    grunt.file.write('index.html', index, [, {encoding: 'utf8'}]);

    /* Register tasks. */
    grunt.registerTask('default', []);

};