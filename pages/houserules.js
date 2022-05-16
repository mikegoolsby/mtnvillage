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
                <li>Please contact Peak Property Management at xxx-xxx-xxxx for any rental-related emergency. Broken heaters, leaking faucet, that sort of thing.</li>
                <li>We love pets, but for everyone&apos;s enjoyment, <b>this is a pet-friendly rental</b>.</li>
                <li>Please ensure the door is locked each time you leave the unit.</li>
                <li><b>Do not turn the heat on higher than 72 degrees.</b> See the instructions on the fireplace if you are looking to create extra-wintry vibes.</li>
                <li>Quiet hours are 11:00PM - 8:00AM. Please respect our neighbors, and let us know if they don&apos;t return the favor.</li>
                <li>rule 5</li>
                <li>rule 6</li>
                <li>Rule # 76: No excuses. Play like a champion.</li>
              </List>
            </div>
            </PageStyle>
      </Font>
      </>
    )
  }
  