import styled from "styled-components";
import { useSettingsContext } from "../../hooks/useSettingsContext";


const Btn = styled.button`
    background-color: ${props => props.$colorSettings.color};
    width: 73vw;
    height: 31px;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    color: ${props => props.$colorSettings.whiteHighlight};
    font-weight: 600;
    cursor: pointer;
    box-shadow:  0px  1px 12px #5b5b5977;
    &:hover{
        color: ${props => props.$colorSettings.isDark ? 
            props => props.$colorSettings.whiteHighlight :
            props => props.$colorSettings.color};
        background-color: ${props => props.$colorSettings.isDark ? 
            props => props.$colorSettings.whiteBg :
            props => props.$colorSettings.whiteHighlight};
        transition: .5s;
    }
    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
        border-radius: 5px;
        height: 40px;
        width: 41vw;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        height: 35px;
        width: 23vw;
        border-radius: 5px;
        font-size: 1rem;
    }
`

const ButtonDefault = ({children}) => {

    const { globalSettings } = useSettingsContext();

    return(

        <Btn $colorSettings={globalSettings} >{children}</Btn>

    )

}

export default ButtonDefault;