import styled from "styled-components"


const ColorSelector = styled.button`
    width: 20px;
    height: 20px;
    border: 1px solid #fff;
    background-color: #CA5959;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
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

const ColorChanger = () => {

    return(
        <ColorSelector/>
    )

}

export default ColorChanger