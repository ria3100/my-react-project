import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Profile } from '../'
import 'antd/dist/antd.css'

storiesOf('5. Pages/Profile', module).add('normal', () => <Profile />)
