import {Mongo} from 'meteor/mongo';

const Task = new Mongo.Collection('task');

export default Task;
