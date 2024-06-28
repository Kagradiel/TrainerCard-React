import styled from "styled-components";
import { useSettingsContext } from "../../hooks/useSettingsContext";


const TheTitle = styled.h1`
    font-family: "Press Start 2P";
    color: ${props => props.$colorSettings.whiteHighlight};
    width: 60%;
    font-size: 1.8rem;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        font-size: 1.5rem;
    }
`

const Title = ({ children }) => {

    const { globalSettings } = useSettingsContext();

    return (

        <TheTitle $colorSettings={globalSettings}>{children}</TheTitle>

    )

}

export default Title;
