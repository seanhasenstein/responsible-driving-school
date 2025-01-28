import { mongoClientPromise } from './connect';
import * as contactMessage from './contactMessage';

async function connectToDb() {
  const client = await mongoClientPromise;
  return client.db();
}

export { connectToDb, contactMessage };
