import React, { Component } from 'react'
import { NavigationContainer, Logo, Donate } from "./Styles"
import LogoImage from "../../resources/images/btsc_logo_header.png"
import { Link } from 'react-router-dom'
import * as Routes from "../../constants/Routes"

class Navigation extends Component {

  render() {

    return (
        <NavigationContainer>
            <Logo>
                <Link to={Routes.INDEX}>
                    <img alt="Large Logo" src={LogoImage} />
                </Link>
            </Logo>
            <Donate 
            target="_blank" 
            href="https://secure.qgiv.com/for/nwmfoundation/restriction/NorthlandRegionalShootingSportsFund/">
                Donate
            </Donate>
        </NavigationContainer>
		
    )
  }
}

export default Navigation
