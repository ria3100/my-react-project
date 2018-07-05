import React from 'react'
import styled from 'styled-components'

const background = {
  dark: '#1a1a1a',
  gray: '#f2f2f2',
  light: '#fff',
}

const Section = styled.section`
  width: 100vw;
  height: 500px;
  background: ${props => background[props.theme]};
  color: ${props =>
    props.theme == 'dark'
      ? 'rgba(255, 255, 255, 1);'
      : 'rgba(0, 0, 0, 0.65098);'};
  float: left;
  & > .title {
    width: 50vw;
    float: ${props => (props.position == 'left' ? 'left' : 'right')};
  }
  & > image {
    width: 50vw;
    float: ${props => (props.position == 'left' ? 'right' : 'left')};
  }
`

//TODO 個別をやめて Section の中に書く
// const Title = styled.div`
//   width: 50vw;
//   float: ${props => props.position == 'left' ? 'left' : 'right'};
// `

// const Image = styled.div`
//   width: 50vw;
//   float: ${props => (props.position == 'left' ? 'right' : 'left')};
// `

export default class extends React.Component {
  render() {
    return <Section theme={this.props.theme} position={this.props.position}>
        <div className="title" position={this.props.position}>
          {this.props.title}
        </div>
        <div className="image" position={this.props.position} />
        <div {...this.props} />
      </Section>
  }
}
