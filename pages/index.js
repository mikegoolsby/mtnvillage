import Nav from '../components/Nav'
import Font from '../components/styles/font'

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
`

export default function Home() {
  return (
    <>
      <Nav/>
      <Font>
        <PageStyle>
          <h2>Welcome to Vermont. Welcome to Mount Snow. Welcome Home.</h2>
        </PageStyle>
      </Font>

    </>
  )
}
