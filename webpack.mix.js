let mix = require('yh-mix');

mix.options({
    processCssUrls: false
});


mix.setPublicPath('public')
   .js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .version()
   .browserSync({
      server: { baseDir: ['public'] },
      proxy: undefined,
      files: [
         'public/js/**/*.js',
         'public/css/**/*.css',
     ],
   });
;