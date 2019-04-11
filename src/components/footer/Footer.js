import React, { Component } from 'react'

import Container from '../container/Container'
import SocialIcon from '../social/SocialIcon'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSortUp } from '@fortawesome/fontawesome-free-solid'
import { Link } from 'react-router-dom'
import Brochure from '../../resources/pdf/2019_bemidji_trap_brochure.pdf'
import Newsletter from '../../resources/pdf/2019_bemidji_trap_newsletter.pdf'
import * as Routes from '../../constants/Routes'

import { FooterContainer, Top, Flex, SocialList, Links, Text } from './Styles'

class Footer extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  scrollTop = e => {
    e.preventDefault()
    window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
  }

	scrollTo = screens => {
		window.scrollTo({
			top: screens * window.innerHeight,
			behavior: 'smooth',
		})
	}

  render() {

    

    return (
      <FooterContainer>
        <Container>
          <Top onClick={this.scrollTop}>
            <FontAwesomeIcon icon={faSortUp} />
          </Top>
          <Flex>
            <SocialList>
              <li>
                <SocialIcon icon='facebook' url="https://www.facebook.com/pages/Bemidji-Trap-Skeet-Club/113459918687416"/>
              </li>
              <li>
                <SocialIcon icon='googleplus' url="https://www.google.com/search?q=bemidji+trap+skeet&rlz=1C1CHBF_enUS767US767&oq=bemidji+trap+skeet&aqs=chrome.0.69i59j69i60j69i57j69i60l2.1903j0j7&sourceid=chrome&ie=UTF-8"/>
              </li>
            </SocialList>
            <Links>
              <Link target="_blank" to={Brochure}>Brochure</Link>
              <Link target="_blank" to={Newsletter}>Newsletter</Link>
            </Links>
            <Text>
              © 2019 all rights reserved <Link to={Routes.INDEX}>Bemidji Trap & Skeet Club</Link>
            </Text>
          </Flex>
        </Container>
      </FooterContainer>
    )
  }
}

export default Footer
