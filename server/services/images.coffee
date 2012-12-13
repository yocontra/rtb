module.exports = (res, code) ->
  fn = eval "(#{code})"
  fn? res.reply