import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useSettingsContext } from "../../hooks/useSettingsContext";


const Foot = styled.footer`
    min-height: 20vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 15px;
    p{
        display: flex;
        align-items: center;
        border-left: 2px solid ${props => props.$colorSettings.colorBg};
        color: ${props => props.$colorSettings.colorBg};
        padding-left: 4px;
        font-size: 1rem;
        font-weight: 700;
        width: 30vw;
        min-height: 5vh;
    }
    a{
        display: flex;
        justify-content: center;
        width: 20vw;
        padding-right: 1px;
    }
    @media screen and (min-width: 768px) {
        min-height: 10vh;
        p{
            font-size: 2rem;
        }
        a{
            width: 30vw;
        }
    }
    @media screen and (min-width: 1024px){
        flex-direction: row;
        justify-content: space-between;
        padding: 0 30px;
        p{
            font-size: 1rem;
        }
        a{
            justify-content: flex-end;
        }

    }
`

const Footer = () => {

    let iconSize = 0;

    window.innerWidth < 768 || window.innerWidth > 1024  ? iconSize = 50 : iconSize = 80;
    const { globalSettings } = useSettingsContext();

    return (
        
        <Foot $colorSettings={globalSettings}>
            <p>Non-profit project</p>
            <a href="https://github.com/Kagradiel"><FaGithub color={globalSettings.colorBg} size={iconSize} /></a>
        </Foot>

    )

}

export default Footer;