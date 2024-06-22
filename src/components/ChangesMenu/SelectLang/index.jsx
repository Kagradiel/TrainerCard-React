import styled from "styled-components";


const LangSelection = styled.select`
    width: 30vw;
    height: 20px;
    border-color: #fff;
    outline: #FFF;
    color: #CA5959;
    border-radius: 7px;
    box-sizing: border-box;
    font-size: .9em;
    text-align: center;
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

const SelectLang = ({languages}) => {

    return (

        <LangSelection >
            {languages.map(language =>
                <option key={language.key} value={language.key}>
                    {language.lang}
                </option>
            )}
        </LangSelection>

    )

}

export default SelectLang;