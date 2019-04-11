import React, { Component } from 'react'
import { PartnersContainer, Heading, PartnerList, Partner, Name, Image } from "./Styles"
import * as PartnersList from "../../constants/Partners"
import Container from "../container/Container"

class Partners extends Component {

  render() {
    const NewPartnersList = Object.values(PartnersList)
    return (
        <PartnersContainer>
            <Container>
                <Heading>Partners</Heading>
                <PartnerList>
                {NewPartnersList.length > 0 && NewPartnersList.map((data, key) => 
                    <Partner key={key} target="_blank" href={data.url}>
                        <Name>{data.name}</Name>
                        <Image>
                            <img alt={`Partner-${data.name}`} src={data.image} />
                        </Image>
                    </Partner>
                )}
                </PartnerList>
            </Container>
        </PartnersContainer>
    )
  }
}

export default Partners
