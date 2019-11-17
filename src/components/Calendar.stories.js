import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

import Calendar from './Calendar';

addDecorator(withA11y)

storiesOf('Calendar', module)
  .add('default', () => <Calendar />)
