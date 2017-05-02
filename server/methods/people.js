import { People } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default function () {
  Meteor.methods({

    'person.insert'(person) {
      check(person, String);

      People.insert({
        fullname: person.fullname,
        secondaryText: person.secondaryText,
        avatar: person.avatar
      });

    }
  });


}
