express = require 'express'
http = require 'http'
Vein = require 'vein'
{join} = require 'path'
{createReadStream, createWriteStream} = require 'fs'
config = require './config'

uloads = join __dirname, '../uploads'

app = express()
app.use express.favicon()
app.use express.bodyParser()
app.use express.methodOverride()
app.use express.static join __dirname, '../public'
app.use '/uploads', express.static uloads

app.post '/upload', (req, res, next) ->
  nu = join uloads, req.files.image.name

  int = createReadStream req.files.image.path
  int.pipe createWriteStream nu
  int.on 'error', next
  int.on 'end', ->
    res.redirect '/'


server = http.createServer(app).listen config.port

# RPC
rpc = Vein.createServer server

rpc.addFolder join __dirname, './services'

console.log "Server running on #{config.port}"