import styled from 'styled-components'
import * as Colors from '../../constants/Colors'

export const PartnersContainer = styled.section`
    background: ${Colors.LightGray};
    padding: 40px 0;
    width: 100%;
`

export const Heading = styled.h1`
    margin: 0 0 40px 0;
    padding: 0;
    text-align: center;
    font-size: 30pt;
    font-weight: 100;
`
export const PartnerList = styled.article`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 100%;
    @media only screen and (min-width: 1024px) {
        grid-template-columns: calc(33.33% - 13.33px) calc(33.33% - 13.33px) calc(33.33% - 13.33px);
    }
`

export const Partner = styled.a`
    padding: 20px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        box-shadow: 0px 0px 10px 0px black;
    }
`

export const Name = styled.h2`
    font-size: 14pt;
    text-align: center;
    font-weight: 100;
    color: ${Colors.TextDark};
`

export const Image = styled.figure`
    padding: 20px;
    margin: 0;
    text-align: center;
    img {
        height: 50px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
    }
`
