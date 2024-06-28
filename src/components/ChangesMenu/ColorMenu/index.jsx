import styled from "styled-components";
import { useSettingsContext } from "../../../hooks/useSettingsContext";

const ColorOptions = styled.div`
    display: flex;  
    background-color: ${props => props.$colorSettings.isDark ? "#2f2f2f" :  props => props.$colorSettings.whiteBg};
    height: 70px;
    width: 90vw;
    border-radius: 10px;
    opacity: 0.9;
    transition: .5s;
    .darkMode{   
            transition: 1.5s;
            align-self: center;
            border: none;
            width: 100px;
            width: 25%;
            height: 100%;
            border-radius: 10px 3px 3px 10px;
            cursor: pointer;
            background-color: ${props => props.$colorSettings.isDark ? props => props.$colorSettings.whiteBg : "#2f2f2f"};            
    }
    .colorList{
        margin: 0;
        list-style: none;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        height: 100%;
        gap: 25px;
        .colorItem{
            width: 30%;
            height: 80%;
            border-radius: 30px;
            cursor: pointer;
        }
        .colorItem:nth-child(1){
            background-color: ${props => props.$colorSettings.isDark === true ? props.$dark.red : props.$light.red};
        }
        .colorItem:nth-child(2){
            background-color: ${props => props.$colorSettings.isDark === true ? props.$dark.blue : props.$light.blue};
        }
        .colorItem:nth-child(3){
            background-color:  ${props => props.$colorSettings.isDark === true ? props.$dark.green : props.$light.green};
        }
    }
    @media screen and (min-width: 768px) {
        height: 50px;
        width: 28vw;
        .colorList{
            padding: 0 10px;
            .colorItem{
                width: 50%;
            }
        }
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        height: 100px;
        width: 13vw;
        .darkMode{
            width: 40%;
        }
        .colorList{
            flex-direction: column;
            justify-content: center;
            align-self: center;
            padding: 0;
            height: 80%;
            gap: 8px;
            margin: 0;
            width: 60%;
            .colorItem{
                width: 70%;
            }
        }
    }
`

const ColorMenu = () => {

    const { globalSettings, toggleDarkMode, colorsDark, colorsLight, selectColor } = useSettingsContext();

    return(        
        <ColorOptions $colorSettings={globalSettings} $dark={colorsDark} $light={colorsLight}>
            <button className="darkMode" onClick={() => {
                toggleDarkMode();
                }}/>
            <ul className="colorList">
                <li className="colorItem" onClick={() => selectColor('red')}></li>
                <li className="colorItem" onClick={() => selectColor('blue')}></li>
                <li className="colorItem" onClick={() => selectColor('green')}></li>
            </ul>
        </ColorOptions>
    )

}

export default ColorMenu;