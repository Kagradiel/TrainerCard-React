import styled from "styled-components";
import ColorChanger from "./ColorChanger";
import SelectLang from "./SelectLang";


const Changes = styled.div`
    display: flex;
    gap: 15px;
    align-self: center;
    align-items: center;
    margin-top: 15px;
    @media screen and (min-width: 768px) {
            margin: 50px 0 -50px 0;
        }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        align-self: flex-start;
        margin: 15px 0 0 15px;    
        
`

const ChangesMenu = ({languages}) => { 
    return(
        <Changes>
            <SelectLang languages={languages}/>
            <ColorChanger/>
        </Changes>
    )
}

export default ChangesMenu;