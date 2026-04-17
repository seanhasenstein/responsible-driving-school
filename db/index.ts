import { getMongoClientPromise } from './connect';
import * as contactMessage from './contactMessage';

async function connectToDb() {
  const client = await getMongoClientPromise();
  return client.db();
}

export { connectToDb, contactMessage };
