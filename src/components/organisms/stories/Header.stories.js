import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Header } from '../'
import 'antd/dist/antd.css'

storiesOf('3. Organisms/Header', module).add('normal', () => <Header />)
