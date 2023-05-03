// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Image, Product, User } = initSchema(schema);

export {
  Image,
  Product,
  User
};