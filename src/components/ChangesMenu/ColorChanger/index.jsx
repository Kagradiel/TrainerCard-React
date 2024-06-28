import styled from "styled-components"
import { useSettingsContext } from "../../../hooks/useSettingsContext"


const ColorSelector = styled.button`
    width: 20px;
    height: 20px;
    border: 1px solid ${props => props.$colorSettings.whiteBg};
    background-color: ${props => props.$colorSettings.color};
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    transition: .5s;
    @media screen and (min-width: 768px) {
        height: 25px;
        width: 25px;
        font-size: 1.6rem;
        font-weight: 700;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        height: 22px;
        width: 22px;
    }
`


const ColorMenuButton = ({toggleColorPanel, setToggleColorPanel}) => {
    
    const { globalSettings } = useSettingsContext();

    return (
            <ColorSelector $colorSettings={globalSettings} onClick={() => setToggleColorPanel(!toggleColorPanel)}/>
    )

}

export default ColorMenuButton;