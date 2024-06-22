import styled from "styled-components";


const Btn = styled.button`
    background-color: #CA5959;
    width: 73vw;
    height: 31px;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;
    color: #fffbf5;
    font-weight: 600;
    cursor: pointer;
    box-shadow:  0px  2px 10px #d06161,
                 0px  2px 10px #8c5050;
    &:hover{
        color: #CA5959;
        background-color: #fffbf5;
        transition: .5s;
    }
    @media screen and (min-width: 768px) {
        font-size: 1.6rem;
        border-radius: 5px;
        height: 40px;
        width: 41vw;
    }
    @media screen and (min-width: 1024px) and (orientation: landscape) {
        height: 35px;
        width: 23vw;
        border-radius: 5px;
        font-size: 1rem;
    }
`

const ButtonDefault = ({children}) => {

    return(

        <Btn>{children}</Btn>

    )

}

export default ButtonDefault;