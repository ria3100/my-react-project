import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button.stories'
import HeaderBgSVG from './HeaderBgSVG.stories'
import Tags from './Tags.stories'
import LogoSVG from './LogoSVG.stories'

storiesOf('Atoms', module)
  .add('Button', () => <Button />)
  .add('HeaderBgSVG', () => <HeaderBgSVG />)
  .add('Tags', () => <Tags />)
  .add('LogoSVG', () => <LogoSVG />)
