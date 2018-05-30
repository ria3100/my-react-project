import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Home } from '../'
import 'antd/dist/antd.css'

storiesOf('5. Pages/Home', module).add('normal', () => <Home />)
