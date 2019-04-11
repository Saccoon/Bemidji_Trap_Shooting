// React \\
import React, { Component } from 'react'

// Styled Components \\
import styled from 'styled-components'

// Components \\
import Hero from '../../components/hero/Hero'
import Information from '../../components/information/Information'
import Partners from '../../components/partners/Partners'

// Assets \\
import Image1 from '../../resources/images/home_1.jpg'

class HomePage extends Component {

  render() {

    const HomePage = styled.section`
		`
		const Hero1Images = [Image1]
    return (
      <HomePage>
				<Hero
					color="36,31,32,"
					images={Hero1Images}
					title="Bemidji Trap & Skeet Club">
					<p>New Address & Information! See Below!</p>
				</Hero>
				<Information />
				<Partners />
      </HomePage>
    )
  }
}

export default HomePage
