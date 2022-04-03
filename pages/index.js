import Nav from '../components/Nav'
import Font from '../components/styles/font'

import styled from 'styled-components';

const PageStyle = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <>
      <Nav/>
      <Font>
        <PageStyle>
          <div>
            <h1 className='title'>Welcome to Vermont. Welcome to Mount Snow. Welcome Home.</h1>
            <div className='img-align' id='tv'>
              <img src='/images/mountsnow.JPG'></img>
            </div>
          </div>
          <div>
            <p>We're happy you're here.</p>
          </div>
        </PageStyle>
      </Font>

    </>
  )
}
