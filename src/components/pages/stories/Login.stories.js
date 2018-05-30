import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Login } from '../'
import 'antd/dist/antd.css'

storiesOf('5. Pages/Login', module).add('normal', () => <Login />)
