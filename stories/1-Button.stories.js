import * as React from 'react';
import { storiesOf } from '@storybook/react';

const DemoButton = React.lazy(() =>
  import('./Button'),
);

const stories = storiesOf('Lazy loaded story', module);

stories.add('Base', () => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <DemoButton />
  </React.Suspense>
));
