import styled from 'styled-components'

const Icon = styled.span.attrs(({ icon , color, margin, fontSize}) => ({
  children: icon,
  className: 'material-symbols-outlined',
  style: {
    color,
    fontSize,
    margin
  }
}))`
  font-variation-settings: ${({ fill, wght, grad, opsz }) =>
    `'FILL' ${fill || 0}, 'wght' ${wght || 400}, 'GRAD' ${grad || 0}, 'opsz' ${
      opsz || 48
    }`};
`

export default Icon
