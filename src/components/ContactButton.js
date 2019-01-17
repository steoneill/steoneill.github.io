import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

let CTA = styled(Link)`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 12px;
  color: #ffffff;
  letter-spacing: 2px;
  text-align: center;
  color: white;
  padding: 10px 20px;
  border-radius: 40px;
  text-decoration: none;
  transition: all 0.2s;
  background-image: linear-gradient(-90deg, #ff9a8b 0%, #ff6a88 100%);
  box-shadow: 0 7px 14px -7px #ff6d88;
  align-self: self-start;

  margin-top: 20px;
  &:hover {
    transform: scale(1.2);
  }
`

const ContactButton = ({ children }) => {
  return <CTA to={'/contact'}>{children.copy}</CTA>
}

export default ContactButton
