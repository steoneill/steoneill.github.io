import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'
import Shape1Image from '../images/skill_shape_1.svg'
import Shape2Image from '../images/skill_shape_2.svg'
import SkillBlock from './SkillBlock'

let SkillBlocksOuter = styled.section`
  width: 100%;
  height: auto;
`

let SkillBlocksInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

let Shape1 = styled(Shape1Image)`
  position: absolute;
  top: -50px;
  left: -150px;
  z-index: -1;
`

let Shape2 = styled(Shape2Image)`
  position: absolute;
  right: -150px;
  top: 50px;
  z-index: -1;
`

export default class SkillBlocks extends Component {
  render() {
    return (
      <SkillBlocksOuter>
        <SkillBlocksInner>
          <StaticQuery
            query={graphql`
              query {
                allContentfulSkillBlock {
                  edges {
                    node {
                      id
                      title
                      bodyCopy
                    }
                  }
                }
              }
            `}
            render={({ allContentfulSkillBlock }) => {
              return (
                <Fragment>
                  {allContentfulSkillBlock.edges.map(block => {
                    let { title, id, bodyCopy } = block.node
                    return (
                      <Fragment>
                        <SkillBlock title={title} key={id} copy={bodyCopy} />
                      </Fragment>
                    )
                  })}
                </Fragment>
              )
            }}
          />
          <Shape1 />
          <Shape2 />
        </SkillBlocksInner>
      </SkillBlocksOuter>
    )
  }
}
