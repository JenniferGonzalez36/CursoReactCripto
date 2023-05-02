import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { currencies } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 300ms ease;

    &:hover{
        background-color: #7A7DFE;
    }
`

const Formulario = () => {

  const [SelectMonedas] = useSelectMonedas("Elige tu Moneda", currencies);

  return (
    <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario