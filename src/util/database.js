const { MongoClient } = require("mongodb");
const url = `mongodb+srv://delnavla:${process.env.DB_PASS}@cluster0.vpk1aqm.mongodb.net/okjamhwa?retryWrites=true&w=majority&appName=Cluster0`
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()    
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export { connectDB }