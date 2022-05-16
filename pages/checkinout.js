import Nav from "../components/Nav";
import Font from "../components/styles/font";

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextDiv = styled.div`
  border-radius: 6px;
  box-shadow: 7px 12px 4px #2B7A78;
  padding: 10px;
  margin-right: 10px;
`

const List = styled.ul`
  list-style-type: square;
`

export default function CheckIn() {
    return (
      <>
        <Nav/>
        <Font>
            <PageStyle>
              <TextDiv className="excepthere">
                <h3>Check-in</h3>
                <p>Check in is at 3PM unless otherwise stated to or agreed upon. There&apos;s not much to checking in except being prepared to have an epic time. If you need some quick snacks or drinks, Snow Mountain Market is a few minutes south on Route 100, on your right. The closest full-service grocery store would be Shaw&apos;s in Wilmington, located at 97 E Main St, Wilmington, VT.</p>
              </TextDiv>
              <TextDiv className="excepthere">
                <h3>Check-out</h3>
                <p>For check-out,we&apos;ve attached a step by step guide below for preparing the home before you leave. Don&apos;t worry, we won&apos;t make you work too hard.</p>
                <List>
                  <li>Throw used towels in the hamper</li>
                  <li>Load the dishwasher (this will make your parents proud)</li>
                  <li>Remove all trash to the dumpster</li>
                </List>
              </TextDiv>
            </PageStyle>
        </Font>
      </>
        
    )
  }
  