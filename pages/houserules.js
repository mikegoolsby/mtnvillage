import Nav from "../components/Nav";
import Font from "../components/styles/font";

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
`

export default function Rules() {
    return (
      <>
      <Nav/>
      <Font>
          <PageStyle>
            <h3>House Rules</h3>
            </PageStyle>
      </Font>
      </>
    )
  }
  