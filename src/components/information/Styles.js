import styled from 'styled-components'
import * as Colors from '../../constants/Colors'

export const InformationContainer = styled.section`
    position: relative;
    background: ${Colors.White};
    display: grid;
    grid-template-columns: 100%;
    width: 100%;
    @media only screen and (min-width: 1024px) {
        grid-template-columns: 60% 40%;
    }
`

export const Block = styled.article`
    padding: 20px;
`

export const Title = styled.h1`
    color: ${Colors.TextImportant};
    margin: 0;
`

export const Text = styled.p`
    margin: 20px 0;
    color: ${Colors.TextDark};
    a {
        color: ${Colors.TextInformation};
        &:hover {
            color: ${Colors.TextDark};
        }
    }
`

export const MapContainer = styled.article`
`