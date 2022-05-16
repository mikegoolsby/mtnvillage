import Nav from "../components/Nav";
import Font from "../components/styles/font";

import styled from 'styled-components';

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextDiv = styled.div`
  border-radius: 6px;
  box-shadow: 7px 12px 4px #2B7A78;
  padding: 10px;
  margin-right: 10px;
`

export default function Amenities() {
    return (
      <>
        <Nav/>
        <Font>
            <PageStyle>
              <TextDiv className="excepthere">
                <p>
                  You&apos;re likely already here to ski or snowboard at Mount Snow, hit the trails on a snowmobile, or ride your mountain bike in the warmer months. Maybe you&apos;re just here to work from &quot;home&quot; in the serene Green Mountains away from the honking horns and swooping sirens of the city. We get it.
                  <br/>
                  <br/>
                  <br/>
                  Feel free to enjoy the pool & hot-tub, located within the amenity center at the Mountain Village. The Bluebird Express at Mount Snow is a half mile down N Access Road, with most of that trek being through the resort&apos;s parking lots.
                  <br/>
                </p>
              </TextDiv>
            </PageStyle>
        </Font>
      </>
        
    )
  }