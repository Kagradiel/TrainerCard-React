import TextBox from "../../components/TextBox";
import ButtonDefault from "../../components/ButtonDefault";
import styled from "styled-components";
import Title from "../../components/Title";
import ColoredBackground from "../../components/ColoredBackground";



const LoginOrganizer = styled.section`
    width: 100%;
    height: 90vh;
    box-sizing: border-box;
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
                height: 29px;
            }
            hr{
                width: 70vw;
                border: solid 1px #fff;
                align-self: center;
            }
        }
    }
    @media screen and (min-width: 768px) {
        form{
            section{
                width: 50vw;
                align-items: center;
                gap: 15px;
                input{
                    width: 50vw;
                }
                button{
                    height: 70px;
                }
                hr{
                    display: none;
                }
            }
            section:nth-child(2){
                flex-direction: row;
                width: 51vw;
                
            }
        }
    }  
    @media screen and (min-width: 1024px){
        flex-direction: row;
        
        form{
            section{
                width: 30vw;
                input{
                    width: 20vw;
                }
                button{
                    width: 20vw;
                    height: 55px;
                }
                hr{
                    display: flex;
                    width: 19vw;
                }
            }
            section:nth-child(2){
                flex-direction: column;
                width: 51vw; 
            }
        }
    } 
`

const Login = () => {

    return (
        <ColoredBackground>
            <LoginOrganizer>
                <Title>Trainer Card</Title>
                <form>
                    <section>
                        <TextBox placeholder="Username" />
                        <TextBox placeholder="Password" type="password" />
                    </section>
                    <section>
                        <ButtonDefault>Signin</ButtonDefault>
                        <hr />
                        <ButtonDefault>Signup</ButtonDefault>
                    </section>
                </form>
            </LoginOrganizer>
        </ColoredBackground>
    )

}

export default Login;