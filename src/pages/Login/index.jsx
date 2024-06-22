import styled from "styled-components";
import Title from "../../components/Title";
import ColoredBackground from "../../components/ColoredBackground";
import ChangesMenu from "../../components/ChangesMenu";
import LoginForm from "../../components/LoginForm";



const LoginOrganizer = styled.section`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    section{
        padding: 15vh 0 20vh 0;
        gap: 5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    @media screen and (min-width: 768px){
        section{
            padding: 25vh 0;
        } 
    }
    @media screen and (min-width: 1024px) and (orientation: landscape){
        section{
            flex-direction: row;
        } 
    }
`

const langs = [
    {
        lang:   'English',
        key:    '1',
    },
    {
        lang:   'Português',
        key:    '2',
    },
];

const Login = () => {

    return (
        <ColoredBackground>
            <LoginOrganizer>
                <ChangesMenu languages={langs}/>
                <section>
                    <Title>Trainer Card</Title>
                    <LoginForm/>
                </section>
            </LoginOrganizer>
        </ColoredBackground>
    )

}

export default Login;