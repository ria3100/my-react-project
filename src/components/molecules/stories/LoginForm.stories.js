import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { LoginForm } from '../'
import 'antd/dist/antd.css'

storiesOf('2. Molecules/LoginForm', module).add('normal', () => <LoginForm />)
