const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const URL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'chatapp';

// Use connect method to connect to the server
MongoClient.connect(URL, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});