import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import { storiesOf } from '@storybook/react';


console.log(storiesOf)

const stories = storiesOf('Normal story', module);

const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;


stories.add('Base', () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <ToStorybook />
  </React.Suspense>
));
