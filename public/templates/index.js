define(function(){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="row-fluid"><div class="well span12"><form action="/upload" method="post" enctype="multipart/form-data" class="offset3 form-horizontal"><div class="control-group"><div class="controls"><input id="image" type="file" name="image" placeholder="Choose an image" class="input-large"/></div></div><div class="control-group"><div class="controls"><button type="submit" class="btn submitBtn">Upload</button></div></div></form></div></div><div id="images" class="row-fluid isotope">'),function(){if("number"==typeof images.length)for(var e=0,t=images.length;e<t;e++){var n=images[e];buf.push('<div class="well item"><img'),buf.push(attrs({src:"/uploads/"+n+""},{src:!0})),buf.push("/></div>")}else{var t=0;for(var e in images){t++;var n=images[e];buf.push('<div class="well item"><img'),buf.push(attrs({src:"/uploads/"+n+""},{src:!0})),buf.push("/></div>")}}}.call(this),buf.push("</div>")}return buf.join("")}})