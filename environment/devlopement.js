const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://tchatter:tchats@cluster0-khmxt.gcp.mongodb.net/tchatter?retryWrites=true&w=majority',
  cert: path.join( __dirname, '../ssl/local.crt'),
  key: path.join( __dirname, '../ssl/local.key'),
}