import React, { Component } from 'react'
import Layout from '../components/layout'
import GenericHeader from '../components/GenericHeader'
import styled from 'styled-components'

let ContactInner = styled.section`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  margin-top: -50px;
`

let ContactFormWrapper = styled.div`
  box-shadow: ${props => props.theme.bs};
  width: 100%;
  background: ${props => props.theme.gradient};
  height: auto;
  padding: 15px;
`

let ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
let Input = styled.input`
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 30px;
  box-shadow: ${props => props.theme.bs};
  margin: 10px 0;
`

let Label = styled.label`
  padding: 20px;
  color: white;
`

let TextArea = styled.textarea`
  width: 100%;
`

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <GenericHeader
          title={'Contact'}
          subTitle={'Have an awesome project you need help with? Get in touch!'}
        />
        <ContactInner>
          <ContactFormWrapper>
            <ContactForm>
              <Label for="name">
                Name:
                <Input name="name" type="text" required />
              </Label>
              <Label for="email">
                Email:
                <Input name="email" type="email" required />
              </Label>
              <Label for="number">
                Phone
                <Input name="number" type="phonenumber" required />
              </Label>
              <Label for="project">
                Project Type:
                <TextArea required />
              </Label>
            </ContactForm>
          </ContactFormWrapper>
        </ContactInner>
      </Layout>
    )
  }
}
