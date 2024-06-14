import TextBox   from "../../components/TextBox";
import ButtonDefault from "../../components/ButtonDefault";
import styled from "styled-components";
import Title from "../../components/Title";

const Bg = styled.div`
    width: 100%;
    height: auto;
    min-height: 70vh;
    background-color: rgba(202,89,89, 0.83);
    border-radius: 0 0 40px 40px;
    box-shadow: 0px 5px 10px #bfbdbd,
                0px 5px 10px #f2f2f2;
`

const LoginOrganizer = styled.section`
    width: 100vw;
    height: 40vh;
    padding: 15vh 0 22vh 0;
    gap: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form{      
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vh;
        section{
            display: flex;
            flex-direction: column;
            gap: 7px;
            button{
                width: 73vw;
            }
            hr{
                width: 70vw;
                border: solid 1px #fff;
                align-self: center;
            }
        }
    }
`

const Login = () =>{

    return (
        <Bg>
        <LoginOrganizer>
            <Title>Trainer Card</Title>
            <form>  
                <section>
                    <TextBox placeholder="Username"/>
                    <TextBox placeholder="Password" type="password"/>
                </section>
                <section>
                    <ButtonDefault>SignIn</ButtonDefault>
                    <hr/>
                    <ButtonDefault>SignUp</ButtonDefault>
                </section>
            </form>
        </LoginOrganizer>
        </Bg>
    )

}

export default Login;