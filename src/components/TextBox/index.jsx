import styled from "styled-components";


const TextInput = styled.input`
    width: 70vw;
    height: 3.7vh;
    border-radius: 6px;
    border: none;
    background-color: #fffbf5;
    box-shadow: inset 0px  2px 8px #bfbdbd,
                inset 0px -2px 8px #f6f6f6;
    color: #CA5959;
    font-size: 1rem;
    opacity: 1; //firefox
    padding: 7px;
    font-weight: 600;
    &:focus{
        outline:none;
        font-size: 1rem;
        color: #CA5959;
        font-weight: 600;
    }
    &::placeholder{
        color: #CA5959;    
        opacity: 1; //firefox
        padding: 7px;
        font-weight: 600;
    }
`

const TextBox = ({placeholder = "", type = "text", children =""}) =>{
    return(
        <TextInput type={type} placeholder={placeholder}/>
    )
}

export default TextBox;