import { BalanceWrapper, Entry } from "../styles"


const Balance = ({ entries }) => {
  return (
    <BalanceWrapper>
        {entries
            ? (<>
                <ul>
                    {entries.map(({ date, title, amount, type}) => (
                        <Entry type={type}>
                            <span>{ date }</span>
                            <span>{ title }</span>
                            <span>{ amount.replace('.', ',') }</span>
                        </Entry>
                    ))}
                </ul>
                <div>
                    <span>SALDO</span>
                    <span>39.90</span>
                </div>
            </>)
            : <h3>Não há registro de entrada e saída</h3>
        }
    </BalanceWrapper>
  )
}

export default Balance