import styled from "styled-components";
import ColorMenuButton from "./ColorChanger";
import SelectLang from "./SelectLang";
import ColorMenu from "./ColorMenu";
import { useState } from "react";


const Changes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .menuButtons{
        display: flex;
        gap: 15px;
        align-self: center;
        align-items: center;
        margin-top: 15px;
    }
    .colorsMenu{
        position: absolute;
        display: ${ props => props.$togglePanel ? "flex" : "none"};
        align-items: center;
        justify-content: center;
        margin-top: 43px; 
    }   
    @media screen and (min-width: 768px) {
        .colorsMenu{
            margin-top: 60px; 
        }
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        align-items: flex-start;
        .menuButtons{
            margin: 15px 0 0 15px;  
            flex-direction: row-reverse ;
        } 
        .colorsMenu{
            margin: 45px 0 0 15px;  
        }
    }
    
`

const ChangesMenu = () => {

    const [toggleColorPanel, setToggleColorPanel] = useState(false);


    return (
        <Changes $togglePanel={toggleColorPanel}>
            <div className="menuButtons">
                <SelectLang />
                <ColorMenuButton
                    toggleColorPanel={toggleColorPanel} 
                    setToggleColorPanel={setToggleColorPanel} 
                />
            </div>
            <div className="colorsMenu">
                <ColorMenu/>
            </div>
        </Changes>
    )
}

export default ChangesMenu;