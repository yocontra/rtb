module.exports = (code, cb) ->
  fn = eval code
  fn? cb