import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'

let ErrorOuter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

let ErrorInner = styled.div`
  margin-top: 100px;
`
let ErrorHeader = styled.h1`
  color: ${props => props.theme.primary};
  font-size: 56px;
  text-align: center;
`

let ErrorCopy = styled.p`
  font-size: 30px;
  text-align: center;
`

let CTA = styled(Link)`
  font-family: ${props => props.theme.secondaryFont};
  background: white;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 16px 40px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;
  color: white;
  background-image: linear-gradient(100deg, #ff6480, #f22e63);

  margin-top: 20px;
  &:hover {
    transform: scale(0.9);
  }
`

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <ErrorOuter>
          <ErrorInner>
            <ErrorHeader>404</ErrorHeader>
            <ErrorCopy>
              <strong>Page wasn't found!</strong>
            </ErrorCopy>
            <ErrorCopy>
              Sorry about that.
              <br />
              <br />
              <CTA to={'/'}>Go Back</CTA>
            </ErrorCopy>
          </ErrorInner>
        </ErrorOuter>
      </Layout>
    )
  }
}
