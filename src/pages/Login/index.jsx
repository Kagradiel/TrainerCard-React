import styled from "styled-components";
import Title from "../../components/Title";
import ColoredBackground from "../../components/ColoredBackground";
import ChangesMenu from "../../components/ChangesMenu";
import LoginForm from "../../components/LoginForm";


const LoginOrganizer = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .loginBody{
        padding: 15vh 0 20vh 0;
        gap: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    @media screen and (min-width: 768px){
        .loginBody{
            padding: 25vh 0;
        } 
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        .changesPosition{
            align-self: flex-start;
        }
        .loginBody{
            flex-direction: row;
        } 
    }
`



const Login = () => {

    return (
        <ColoredBackground>
            <LoginOrganizer>
                <div className="changesPosition">
                    <ChangesMenu/>
                </div>
                <section className="loginBody">
                    <Title>Trainer Card</Title>
                    <LoginForm/>
                </section>
            </LoginOrganizer>
        </ColoredBackground>
    )

}

export default Login;