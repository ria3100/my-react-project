import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  transform: translateY(-105%);
  transition: all 1s;
  &.show {
    transform: translateY(0);
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: this.props.small ? 200 : 300,
      counter: 0,
      className: '',
    }
    this.state = Object.assign(this.state, this.getSVGParam())
  }
  getSVGParam() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    const height = this.state.contentHeight + (width / 2) * Math.tan(7 * (Math.PI / 180))
    const path = `M
      0 0 L
      ${width} 0 L
      ${width} ${this.state.contentHeight} L
      ${width / 2} ${height} L
      0 ${this.state.contentHeight}Z`
    // const transform = `translate(0, -${height})`
    return { width, height, path }
  }
  // animate(self) {
  //   self.state.counter += 0.016666667
  //   const y = self.state.counter * self.state.height - self.state.height
  //   if(y >= 0) {
  //     self.setState({ transform: `translate(0, 0)` })
  //     return
  //   }
  //   self.setState({ transform: `translate(0, ${y})` })
  //   window.requestAnimationFrame(self.animate.bind(null, self))
  // }
  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState(this.getSVGParam())
    })
    setTimeout(() => {
      this.setState({ className: 'show' })
    }, 0);
    // window.requestAnimationFrame(this.animate.bind(null, this))
  }
  render() {
    return (
      <Svg className={this.state.className} width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`} xmlns="http://www.w3.org/2000/svg">
        <path d={this.state.path} fill="#1a1a1a" />
      </Svg>
    )
  }
}
