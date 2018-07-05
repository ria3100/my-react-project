import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button.stories'
import HeaderBgSVG from './HeaderBgSVG.stories'

storiesOf('Atoms', module)
  .add('Button', () => <Button />)
  .add('HeaderBgSVG', () => <HeaderBgSVG />)
