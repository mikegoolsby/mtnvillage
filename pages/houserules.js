import Nav from "../components/Nav";
import Font from "../components/styles/font";

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const List = styled.ul`
  list-style-type: square;
  border-radius: 6px;
  box-shadow: 7px 12px 4px #2B7A78;
  padding: 10px;
  margin-right: 10px;
`

export default function Rules() {
    return (
      <>
      <Nav/>
      <Font>
          <PageStyle className="excepthere">
            <div>
              <h3>Thanks for following the rules.</h3>
            </div>
            <div>
              <List>
                <li>Have fun. This is non-negotiable.</li>
                <li>Please ensure the door is locked each time you leave the unit.</li>
                <li>Do not turn the heat on higher than 72 degrees. See the instructions on the fireplace if you are looking to create extra-wintry vibes.</li>
                <li>rule 4</li>
                <li>rule 5</li>
                <li>rule 6</li>
                <li>rule 7</li>
              </List>
            </div>
            </PageStyle>
      </Font>
      </>
    )
  }
  