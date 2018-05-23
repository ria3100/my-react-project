import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './'

import 'antd/dist/antd.css'

storiesOf('Header', module).add('normal', () => <Header/>);
