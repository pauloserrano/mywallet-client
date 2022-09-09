import styled from "styled-components"

const Balance = () => {
  return (
    <Wrapper>
        <ul>
            <li>
                <span>08/09</span>
                <span>Almoço</span>
                <span>39.90</span>
            </li>
            <li>
                <span>08/09</span>
                <span>Almoço</span>
                <span>39.90</span>
            </li>
        </ul>
        <div>
            <span>SALDO</span>
            <span>39.90</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    position: relative;
    width: min(100%, 500px);
    border-radius: 5px;
    padding: 1em 1em 3em;
    flex: 1;
    background-color: #fff;

    ul{
        width: 100%;
        overflow-y: auto;
    }

    li{
        display: flex;
        width: 100%;
        font-size: 16px;
        line-height: 2em;


        span:first-child{
            color: #C6C6C6;
            margin-right: 1ch;
        }

        span:nth-child(3){
            margin-left: auto;
        }
    }

    div:last-child{
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 1em;
        left: 1em;
        right: 1em;

        span:first-child{
            font-weight: bold;
        }
    }
`

export default Balance