import styled from "styled-components";
import { useSettingsContext } from "../../../hooks/useSettingsContext";

const LangSelection = styled.select`
    width: 30vw;
    height: 20px;
    background-color: ${props => props.$colorSettings.whiteHighlight};
    border-color: ${props => props.$colorSettings.whiteBg};
    outline: ${props => props.$colorSettings.whiteBg};
    color: ${props => props.$colorSettings.color};
    border-radius: 7px;
    box-sizing: border-box;
    font-size: .9em;
    text-align: center;
    transition: .5s;
    @media screen and (min-width: 768px) {
        height: 28px;
        font-size: 1.1rem;
        font-weight: 700;
        width: 20vw;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        width: 10vw;
        font-size: .9rem;
        height: 23px;
    }
`

const SelectLang = () => {

    const { languages, globalSettings } = useSettingsContext();

    return (

        <LangSelection $colorSettings={globalSettings} >
            {languages.map(language =>
                <option key={language.key} value={language.key}>
                    {language.lang}
                </option>
            )}
        </LangSelection>

    )

}

export default SelectLang;