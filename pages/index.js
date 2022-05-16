/* eslint-disable @next/next/no-img-element */
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
            <div className='img-align'>
              <img alt="drone image depicting the snowy mountainscape of Mount Snow in West Dover, Vermont" src='/images/mountsnow.JPG'></img>
            </div>
          </div>
          <div>
            <h3>We&apos;re happy you&apos;re here. Please feel free to leverage this digital flipbook for the duration of your stay. Most of the information you&apos;ll need will be in here. Except dad jokes. Those aren&apos;t in here.</h3>
            <br/>
            <br/>
            <h3>Oh yeah, the wifi password: </h3>
            <p>eatsleepski</p>
          </div>
        </PageStyle>
      </Font>

    </>
  )
}
