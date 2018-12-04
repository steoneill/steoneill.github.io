import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SkillBlocks from '../components/SkillBlocks'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <SkillBlocks />
    <About />
  </Layout>
)

export default IndexPage
