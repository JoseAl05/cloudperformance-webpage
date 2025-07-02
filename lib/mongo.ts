 import { MongoClient } from 'mongodb' 

const uri = process.env.MONGODB_URI as string
const options = {}
let client: MongoClient

export async function getClient() {
  if (!client) client = new MongoClient(uri, options)
  if (!client.topology?.isConnected()) await client.connect()
  return client
}
