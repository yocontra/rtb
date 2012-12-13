
define(["app/server", "templates/index"], function(server, indexTempl) {
  return {
    init: function() {
      return this.emit('ready');
    },
    show: function() {
      return server.ready(function() {
        var fn;
        fn = function(cb) {
          var uload;
          uload = require('path').join(__dirname, '../../uploads');
          return require('fs').readdir(uload, cb);
        };
        return server.images(fn.toString(), function(err, imgs) {
          var $container;
          if (err != null) {
            return console.log(err);
          }
          $("#main").html(indexTempl({
            images: imgs
          }));
          $container = $("#images");
          $container.isotope({
            itemSelector: '.item'
          });
          return setInterval(function() {
            return $("#images").isotope('reLayout');
          }, 100);
        });
      });
    }
  };
});
