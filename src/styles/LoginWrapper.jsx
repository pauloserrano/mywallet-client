import styled from "styled-components";
import Wrapper from "./Wrapper";

const LoginWrapper = styled(Wrapper)`
  justify-content: center;
  
  h1{
    font: 2.5em 'Saira Stencil One', monospace;
    color: white;
  }

  form{
    margin: 1.5rem 0 2rem;
  }

  a{
    font: bold 1em 'Raleway', sans-serif;
    color: #fff;

    :visited{
      color: #fff;
    }
  }
`

export default LoginWrapper