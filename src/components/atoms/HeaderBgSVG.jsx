import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: this.props.small ? 200 : 300
    }
    this.state = Object.assign(this.state, this.getSVGParam())
  }
  getSVGParam() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    const height = this.state.contentHeight + (width / 2) * Math.tan(7 * (Math.PI / 180))
    const path = `M 0 0 L ${width} 0 L ${width} ${this.state.contentHeight} L ${width / 2} ${height} L 0 ${this.state.contentHeight} Z`
    return {width, height, path};
  }
  componentWillMount() {
    window.addEventListener('resize', () => {
      this.setState(Object.assign(this.state, this.getSVGParam()))
    })
  }
  render() {
    return <svg width={this.state.width} height={this.state.height} viewBox={`0 0 ${this.state.width} ${this.state.height}`} xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width={this.state.width} height={this.state.height} fill="none" />
        <path d={this.state.path} fill="#1a1a1a" />
      </svg>
  }
}
