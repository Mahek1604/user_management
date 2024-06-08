const { MongoClient } = require("mongodb");
const config = require("../config");
const mongodb = () => {};

// varibale to hold mongodb database and collection name.
let database, collection;

/**
 * Function To establish connect with mongodb.
 */
mongodb.connection = () => {
  const client = new MongoClient(config.get("mongodb.connectionUrl"));
  client
    .connect()
    .then(() => {
      console.log("MongoDb Connection Establish successfully");
      database = client.db(config.get("mongodb.database"));
      collection = database.collection(config.get("mongodb.collection.user"));
    })
    .catch(error => {
      console.log("Error occur while connecting to mongoDb", error);
    });
};

/**
 * Function to add single document in collection.
 * @param {*} data 
 * @returns id of insert document
 */
mongodb.addDocument = data => {
  return new Promise((resolve, reject) => {
    collection
      .insertOne(data)
      .then(result => {
        console.log(`${result} documents inserted successfully.`);
        resolve(result.insertedId);
      })
      .catch(error => {
        console.log(`Error while inserting documents, Error: ${error}`);
        reject(error);
      });
  });
};

module.exports = mongodb;
