import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import taskModule from './modules/task';
import usersModule from './modules/users';
import peopleModule from './modules/people';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(taskModule);
app.loadModule(usersModule);
app.loadModule(peopleModule);
app.init();
