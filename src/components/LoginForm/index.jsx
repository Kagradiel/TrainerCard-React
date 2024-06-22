import styled from "styled-components";
import ButtonDefault from "../ButtonDefault";
import TextBox from "../TextBox";

//i know, that is a bad name but... rsrsrs
const FormIn = styled.div`      
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div{
        display: flex;
        flex-direction: column;
        gap: 7px;
    }
    hr{
        width: 70vw;
        border: solid 1px rgba(255, 255, 255, 0.5);
        align-self: center;
        margin-top: 1px;
    }
    div:nth-child(2){
        margin-top: 15px;
    }
    @media screen and (min-width: 768px) {
        div{
            align-items: center;
            gap: 10px;
        }
        div:nth-child(2){
            margin-top: 20px;
        }
        hr{
            width: 38vw;
            margin: 5px 0;
        }
        button:nth-child(2){
            margin-top: 8px;;
        }
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        hr{
            display: flex;
            width: 22vw;
            margin-top: 1px;
        }
        
        
        div:nth-child(2){
            flex-direction: column;
            width: 51vw; 
        }
    }
`

const LoginForm = () => {
    
    return(
        <FormIn>
            <form>
                <div>
                    <TextBox placeholder="Username" />
                    <TextBox placeholder="Password" type="password" />
                </div>
                <div>
                    <ButtonDefault>Login</ButtonDefault>
                    <hr />
                </div>
            </form>
            <ButtonDefault>Signup</ButtonDefault>

        </FormIn>
    )

}

export default LoginForm;