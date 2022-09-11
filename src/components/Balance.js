import { BalanceWrapper, Entry } from "../styles"


const Balance = ({ entries }) => {
    const total = entries.reduce((acc, { value, type }) => (
        type === 'income' ? acc + +value : acc - +value
     ) , 0)
  return (
    <BalanceWrapper positive={total >= 0}>
        {entries.length > 0
            ? (<>
                <ul>
                    {entries.map(({ date, description, value, type}, id) => {
                        const amount = +value.replace(',', '.')
                        
                        return (
                            <Entry type={type} key={id}>
                                <span>{ date }</span>
                                <span>{ description }</span>
                                <span>{ amount.toFixed(2) }</span>
                            </Entry>
                        )
                    })}
                </ul>
                <div>
                    <span>SALDO</span>
                    <span>{total.toFixed(2)}</span>
                </div>
            </>)
            : <h3>Não há registro de entrada e saída</h3>
        }
    </BalanceWrapper>
  )
}

export default Balance