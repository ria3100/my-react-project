import React from 'react'
import styled from 'styled-components'

// const Svg = styled.svg`
//   transform: translateY(-105%);
//   transition: all 1s;
//   &.show {
//     transform: translateY(0);
//   }
// `

export default class extends React.Component {
  render() {
    return <svg width="160" height="160" viewBox="0 0 160 160">
        <rect x="50" y="-40" width="50" height="81" transform="translate(0,30) rotate(30) skewX(-30)" fill="#7dbcea" />
        <rect x="50" y="-40" width="50" height="81" transform="translate(0,15) rotate(30) skewX(-30)" fill="#569fe3" />
        <rect x="50" y="-40" width="50" height="81" transform="translate(0,0) rotate(30) skewX(-30)" fill="#3cbee2" />
      </svg>
  }
}
