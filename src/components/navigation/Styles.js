import styled from 'styled-components'
import * as Colors from '../../constants/Colors'

export const NavigationContainer = styled.section`
    position: relative;
    justify-content: center;
    display: flex;
    background: white;
`

export const Logo = styled.figure`
    margin: 0 auto;
    padding: 0;
    a {
        display: inline-block;
        height: 60px;
    }
    img {
        height: 60px;
    }
`

export const Donate = styled.a`
    position: absolute;
    right: 0;
    background: ${Colors.TextSuccess};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    color: white;
    text-decoration: none;
    &:hover {
        background: ${Colors.BackgroundSuccessDark};
    }
`