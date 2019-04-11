import React, { Component } from 'react'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/fontawesome-free-solid'
 
class Marker extends Component {
 
  render() {
	
	const Marker = styled.div`
		
	`
	const Text = styled.a`
		font-size: 20pt;
		color: #EAC044;
		cursor: pointer;
		&:hover {
			color: #bf9d38;
		}
	`
    return (
      <Marker>
		<Text target="_blank" href="https://www.google.com/maps/place/8257+MN-89,+Bemidji,+MN+56601/@47.5331522,-94.9977458,6244m/data=!3m1!1e3!4m5!3m4!1s0x52b83a6da90e8beb:0xfe8279e51c2864e9!8m2!3d47.5529636!4d-95.0189889">
			<FontAwesomeIcon onClick={this.togglePopup} icon={faMapMarker} />
		</Text>
      </Marker>
    )
  }
}
 
export default Marker