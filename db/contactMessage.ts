import { Db } from 'mongodb';

import { ContactMessage } from '@/types';

export async function createContactMessage(db: Db, contactMessage: ContactMessage) {
  const contactMessageInput = {
    ...contactMessage,
    createdAt: new Date()
  };
  const createdMessage = await db
    .collection<ContactMessage>('contactFormMessages')
    .insertOne(contactMessageInput);
  const result = { id: createdMessage.insertedId, contactMessage };
  console.log(`New contact message created: ${result.id}`);
  console.log(result);
  return result;
}
