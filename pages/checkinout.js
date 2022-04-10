import Nav from "../components/Nav";
import Font from "../components/styles/font";

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
`

const TextDiv = styled.div`
  border-radius: 6px;
  box-shadow: 7px 12px 4px #2B7A78;
  padding: 10px;
  margin-right: 10px;
`

export default function CheckIn() {
    return (
      <>
        <Nav/>
        <Font>
            <PageStyle>
              <TextDiv className="excepthere">
                <h3>Check-in and Check-out</h3>
                <p>Check in is at 3PM unless otherwise stated to or agreed upon. For check-out,we've attached a step by step guide below for preparing the home before you leave. Don't worry, we won't make you work too hard.</p>
              </TextDiv>
            </PageStyle>
        </Font>
      </>
        
    )
  }
  