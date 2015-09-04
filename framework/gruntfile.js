module.exports = function(grunt) {
	var mozjpeg = require('imagemin-mozjpeg');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			my_target: {
				files: {
					'js/mainBuilder.min.js': ['js/mainBuilder.js'],
					'js/helper.min.js' : ['js/helper.js'],
					'js/jQuery.min.js': ['js/jQuery.js']
				}
			}
		},

		jshint: {
			files: ['js/mainBuilder.js', 'js/helper.js']
		},

		imagemin: {
			static: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{removeViewBox: false}],
					use: [mozjpeg()]
				},
				files: {
					'images_redux/header3.jpg' : 'images/header3.jpg'
				}
			},
			dynamic: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{removeViewBox: false}],
					use: [mozjpeg()]
				},
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images_redux/'
				}]
			}
		},

		htmlmin: {
			main: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index_min.html' : 'index_pre_min.html'
				}
			}
		}

		});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['cssmin', 'uglify', 'jshint', 'imagemin', 'htmlmin']);
};
