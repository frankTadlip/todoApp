import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import People from '../components/people.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  const peoplesub = Meteor.subscribe('people');

  if(peoplesub.ready()) {
    const people = Collections.People.find().fetch();

    onData(null, {people});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(People);
