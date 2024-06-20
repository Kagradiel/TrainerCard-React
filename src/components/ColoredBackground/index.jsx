import styled from "styled-components";


const Bg = styled.div`
    width: 100%;
    height: auto;
    min-height: 70vh;
    background-color: rgba(202,89,89, 0.83);
    border-radius: 0 0 40px 40px;
    box-shadow: 0px 5px 10px #bfbdbd,
                0px 5px 10px #f2f2f2;
    @media screen and (min-width: 768px) {
        min-height: 90vh;
    }
    @media screen and (min-width: 1024px){
        width: 95%;
        border-radius: 0 0 130px 0;
    }
`

const ColoredBackground = ({children}) =>{
    
    return(
        <Bg>
            {children}
        </Bg>
    )

}

export default ColoredBackground;