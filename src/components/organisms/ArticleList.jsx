import React from 'react'

import { Row, Col } from 'antd'
import { ArticleCard } from '@/components/molecules'

import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'

// const items = [
//   {
//     title:
//       'aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa aaa ',
//     body: 'aaa',
//   },
//   {
//     title:
//       'bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb bbb ',
//     body: 'bbb',
//   },
//   {
//     title:
//       'ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ccc ',
//     body: 'ccc',
//   },
//   {
//     title:
//       'ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ddd ',
//     body: 'ddd',
//   },
//   {
//     title:
//       'eee eee eee eee eee eee eee eee eee eee eee eee eee eee eee eee eee ',
//     body: 'eee',
//   },
//   {
//     title:
//       'fff fff fff fff fff fff fff fff fff fff fff fff fff fff fff fff fff ',
//     body: 'fff',
//   },
// ]

@inject('ArticlesStore')
@observer
export default class extends React.Component {
  static propTypes = {
    ArticlesStore: PropTypes.object.isRequired,
  }
  render() {
    const { ArticlesStore } = this.props
    return <div>a</div>
  }
}

// @inject('ArticlesStore')
// @observer
// export default class extends React.Component {
//   static propTypes = {
//     ArticlesStore: PropTypes.object.isRequired,
//   }
//   render() {
//     const { ArticlesStore } = this.props
//     console.log(ArticlesStore)
//     return (
//       <Row gutter={24}>
//         {/* {items.map(item => {
//           return (
//             <Col sm={24} md={12} style={{ marginBottom: 24 }}>
//               <ArticleCard item={item} />
//             </Col>
//           )
//         })} */}
//       </Row>
//     )
//   }
// }
