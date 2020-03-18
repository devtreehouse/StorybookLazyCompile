import React from 'react';

const DemoButton = React.lazy(() =>
  import('./Button.js'),
);

// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <React.Suspense fallback={<div>Loading...</div>}><DemoButton/></React.Suspense>
);


export default {
  title: 'Button',
  component: Emoji,
};
