 import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI as string;
const options = {tls:true};
let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

export function getClient(): Promise<MongoClient> {
  if (client) {
    return clientPromise!;
  }

  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  return clientPromise;
}
