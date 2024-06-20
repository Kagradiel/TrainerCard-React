import styled from "styled-components";


const TheTitle = styled.h1`
    font-family: "Press Start 2P";
    color: #fffbf5;
    width: 60%;
    font-size: 1.5rem;
    text-align: center;
    @media screen and (min-width: 768px) {
        font-size: 3.5rem;
    }
`

const Title = ({ children }) => {

    return (

        <TheTitle>{children}</TheTitle>

    )

}

export default Title;
