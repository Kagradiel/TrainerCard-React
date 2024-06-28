import styled from "styled-components";
import ButtonDefault from "../ButtonDefault";
import TextBox from "../TextBox";

//i know, that is a bad name but... rsrsrs
const FormIn = styled.div`      
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .formLoginDiv{
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
    .formLoginDiv:nth-child(2){
        margin-top: 15px;
    }
    @media screen and (min-width: 768px) {
        .formLoginDiv{
            align-items: center;
            gap: 10px;
        }
        .formLoginDiv:nth-child(2){
            margin-top: 20px;
        }
        .loginLineDivision{
            width: 38vw;
            margin: 5px 0;
        }
        button:nth-child(2){
            margin-top: 8px;;
        }
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        .formLogin{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .loginLineDivision{
            display: flex;
            width: 22vw;
            margin-top: 1px;
        }
        
        
        .formLoginDiv:nth-child(2){
            flex-direction: column;
            width: 51vw; 
        }
    }
`

const LoginForm = () => {
    
    return(
        <FormIn>
            <form className="formLogin">
                <div className="formLoginDiv">
                    <TextBox placeholder="Username" />
                    <TextBox placeholder="Password" type="password" />
                </div>
                <div className="formLoginDiv">
                    <ButtonDefault className="buttonLogin">Login</ButtonDefault>
                    <hr className="loginLineDivision" />
                </div>
            </form>
            <ButtonDefault className="buttonLogin">Signup</ButtonDefault>

        </FormIn>
    )

}

export default LoginForm;