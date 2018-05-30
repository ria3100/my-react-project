import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { About } from '../'
import 'antd/dist/antd.css'

storiesOf('5. Pages/About', module).add('normal', () => <About />)
