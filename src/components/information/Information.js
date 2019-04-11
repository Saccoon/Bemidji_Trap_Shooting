import React, { Component } from 'react'
import { InformationContainer, Block, Title, Text } from "./Styles"
import { Link } from 'react-router-dom'
import Map from "../map/Map"

class Information extends Component {

  render() {

    return (
        <InformationContainer>
            <Map />
            <Block>
                <Title>Address:</Title>
                <Text>8257 HWY 89 N, Bemidji MN, 56619-1052</Text>
                <Text>3.1 miles north of US 2</Text>
                <Title>Hours:</Title>
                <Text>May - August</Text>
                <Text>Tuesdays & Wednesdays</Text>
                <Text>05:00 PM - Close</Text>
                <Title>Phone:</Title>
                <Text>
                    <Link to="tel:+12184444111">(218) 444-4111</Link>
                </Text>
                <Title>Email:</Title>
                <Text>
                    <Link to="mailto:btsc@paulbunyan.net">btsc@paulbunyan.net</Link>
                </Text>
                <Title>Please Like us on facebook!</Title>
                <div className="fb-like"
                    data-href="https://www.facebook.com/pages/Bemidji-Trap-Skeet-Club/113459918687416/"
                    data-layout="standard"
                    data-width="280px"
                    data-action="like"
                    data-size="small"
                    data-show-faces="true"
                    data-share="true">
                </div>
            </Block>
        </InformationContainer>
		
    )
  }
}

export default Information
