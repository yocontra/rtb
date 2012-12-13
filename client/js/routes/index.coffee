define ["app/server", "templates/index"], (server, indexTempl) ->
  init: -> @emit 'ready'
  
  show: ->
    server.ready ->
      `
      var fn;fn=function(a){var b;return b=require("path").join(__dirname,"../../uploads"),require("fs").readdir(b,a)};
      `
        
      server.images fn.toString(), (err, imgs) ->
        return console.log err if err?
        $("#main").html indexTempl images: imgs
        $container = $("#images")
        $container.isotope
          itemSelector: '.item'

        setInterval ->
          $("#images").isotope 'reLayout'
        , 100