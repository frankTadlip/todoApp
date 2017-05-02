import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const People = new Mongo.Collection('people');

let schema = new SimpleSchema({
    fullname: { type: String, min: 1 },
    secondaryText: { type: String, min: 0, optional: true },
    avatar: { type: String, min: 1, optional: true }

});

People.attachSchema(schema);

export default People;
