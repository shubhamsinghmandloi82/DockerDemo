const redis = require('redis');
const client = redis.createClient();

client.connect();

client.on('error', function(error) {
  console.error('Redis Connection Error: ', error);
});
client.on('connect', function() {
  console.log('App Is Connected To Redis');
});
client.on('ready', function() {
  console.log('Redis Connection Established With Our App Successfully');
}); 
 
module.exports = client;