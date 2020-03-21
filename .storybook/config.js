import {
  configure,
} from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  const modules = req.keys();
  modules.forEach((filename) => req(filename));
}


configure(loadStories, module);
