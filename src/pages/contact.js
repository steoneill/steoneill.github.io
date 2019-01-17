import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContactHeader from '../components/ContactHeader'

let ContactOuter = styled.section`
  width: 100%;
`

let ContactInner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 50px 15px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`

let ContactTitle = styled.h2``

const Contact = () => (
  <Layout>
    <ContactHeader location="contact" />
    <ContactOuter>
      <ContactInner>
        <ContactTitle>Contact</ContactTitle>
      </ContactInner>
    </ContactOuter>
  </Layout>
)

export default Contact
