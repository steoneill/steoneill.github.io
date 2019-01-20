import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'

let MenuBar = styled.div`
  height: 130px;
  background: white;
`

let HeaderOuter = styled.header`
  height: 40vh;
  width: 100%;
  background: ${props => props.theme.gradient};
`

let HeaderInner = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;
`

let Title = styled.h1`
  color: white;
  font-size: 52px;
  padding: 0;
  margin: 0;
`

let SubTitle = styled.p`
  color: white;
  font-size: 20px;
`

export default function GenericHeader(props) {
  return (
    <Fragment>
      <MenuBar>
        <Navbar />
      </MenuBar>
      <HeaderOuter>
        <HeaderInner>
          <Title>{props.title}</Title>
          <SubTitle>{props.subTitle}</SubTitle>
        </HeaderInner>
      </HeaderOuter>
    </Fragment>
  )
}

GenericHeader.defaultProps = {
  title: 'Page Title',
  subTitle: 'This is a sub title',
}

GenericHeader.PropTypes = {
  title: PropTypes.String,
  subTitle: PropTypes.String,
}
