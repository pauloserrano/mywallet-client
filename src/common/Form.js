import { Form as Wrapper } from '../styles'

const Form = ({ children, ...otherProps }) => {
  return (
    <Wrapper {...otherProps}>
      {children}
    </Wrapper>
  )
}

Form.Fields = ({ children }) => {
  return (<>
    {children}
  </>)
}

Form.Submit = ({ children }) => {
  return (<>
    {children}
  </>)
}

export default Form