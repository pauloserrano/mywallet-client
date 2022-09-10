import styled from "styled-components"
import Wrapper from "./Wrapper"


const HomeWrapper = styled(Wrapper)`
  header{
    display: flex;
    justify-content: space-between;
    width: min(100%, 500px);
    margin-bottom: 1.5em;

    h2{
      font-size: 2em;
      font-weight: bold;
      color: white;
    }

    .btn{
      cursor: pointer;
    }
  }

  .actions{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    width: min(100%, 500px);

    button{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: min(20vh, 150px);
      padding: 1rem;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      color: white;
      background-color: #A326D6;
      cursor: pointer;
      transition: .1s all ease-in;

      :hover{
          filter: brightness(1.05)
      }

      span{
        text-align: left;
        margin-right: auto;
        margin-top: 5px;
        width: 50%;
      }
    }
  }
`

export default HomeWrapper