// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from 'mongodb';

let mongoClientPromise: Promise<MongoClient> | undefined;

function getMongoClientPromise(): Promise<MongoClient> {
  if (mongoClientPromise) return mongoClientPromise;

  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const uri = process.env.MONGODB_URI;
  const options = {};

  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalClientPromise = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalClientPromise._mongoClientPromise) {
      globalClientPromise._mongoClientPromise = new MongoClient(uri, options).connect();
    }
    mongoClientPromise = globalClientPromise._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    mongoClientPromise = new MongoClient(uri, options).connect();
  }

  return mongoClientPromise;
}

export { getMongoClientPromise };
