import styled from "styled-components";
import { useSettingsContext } from "../../hooks/useSettingsContext";


const Bg = styled.div`
    transition: .5s;
    width: 100%;
    height: auto;
    min-height: 70vh;
    background-color: ${props => props.$colorSettings.colorBg};
    border-radius: 0 0 40px 40px;
    box-shadow: ${props => props.$colorSettings.isDark ? "" : 
                    `0px 5px 10px #7c7b7b,
                    0px 5px 10px #786f59`};
    @media screen and (min-width: 768px) {
        min-height: 85vh;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        min-height: 90vh;
        width: 95%;
        border-radius: 0 0 130px 0;
    }
`

const ColoredBackground = ({children}) =>{
    const { globalSettings } = useSettingsContext();

    return(
        <Bg $colorSettings={globalSettings}>
            {children}
        </Bg>
    )

}

export default ColoredBackground;