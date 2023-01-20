import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const { spacing, borderRadius } = dimensions

const ButtonStyled = styled.button`
  background-color: ${(rest) => rest.backgroundColor || colors.purple};
  color: white;
  border-radius: ${borderRadius.base};
  border: 0;
  padding: ${spacing.xs} ${spacing.base};
  box-shadow: ${(rest) => rest.boxShadow || colors.shadow.base};
  &:hover {
    cursor: ${(rest) => rest.cursor};
  }
`

function Button({ children, type = 'button', ...rest }) {

  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
}

export default styled(Button)``
