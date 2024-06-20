import styled from "styled-components";


const Btn = styled.button`
    background-color: #CA5959;
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
        font-size: 1.8rem;
        border-radius: 12px;
    }
`

const ButtonDefault = ({children}) => {

    return(

        <Btn>{children}</Btn>

    )

}

export default ButtonDefault;