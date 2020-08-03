import React from 'react';

import { Container } from './Footer.styled'
import { Button } from 'shared/styles'

const Footer = () => {
  return (
    <Container>
      <Button>{'<'}</Button>
      <Button>{'>'}</Button>
    </Container>
  )
}

export default Footer
