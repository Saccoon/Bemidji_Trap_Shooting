import styled from 'styled-components'
import * as Colors from '../../constants/Colors'

export const FooterContainer = styled.section`
    background-color: #241f20;
    padding: 10px 0;
    position: relative;
`

export const Flex = styled.div`
    display: grid;
    justify-content: space-evenly;
    align-items: center;
    @media only screen and (min-width: 1024px) {
        display: flex;
    }
`

export const SocialList = styled.ul`
    display: flex;
    list-style: none;
    li {
        padding: 0 5px;
    }
`

export const Links = styled.div`
    display: flex;
    a {
        padding: 0 7px;
        font-size: 10pt;
        text-decoration: none;
        color: ${Colors.TextInformation};
        cursor: pointer;
        &:hover {
            color: ${Colors.TextLight};
        }
    }
`

export const Text = styled.p`
    color: #F7F6F6;
    font-size: 10pt;
    margin: 0;
    a {
        text-decoration: none;
        font-size: 12pt;
        color: ${Colors.TextInformation};
        cursor: pointer;
        &:hover {
            color: ${Colors.TextLight};
        }
    }
`

export const Top = styled.div`
    text-align: center;
    color: #F7F6F6;
    background: #231f20;
    font-size: 30pt;
    position: fixed;
    padding: 20px 23px 0px;
    border-radius: 5px;
    left: 10px;
    bottom: 10px;
    cursor: pointer;
    &:hover {
        background: white;
        color: #231f20;
    }
    display: none;
    @media only screen and (min-width: 1024px) {
        display: block;
    }
`
