import styled from "styled-components";


const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: min(100%, 500px);

    input, button{
        width: 100%;
        padding: 1rem;
        font-size: 1.25em;
        border-radius: 5px;
        border: none;
        font-family: inherit;
        
        :focus{
            outline: none;
        }
    }
    
    input{
        margin-bottom: .75em;
    }

    button{
        font-weight: bold;
        color: white;
        background-color: #A326D6;
        cursor: pointer;
        transition: .1s all ease-in;

        :hover{
            filter: brightness(1.05)
        }
    }
`

export default FormWrapper