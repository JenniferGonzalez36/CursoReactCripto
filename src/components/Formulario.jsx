import React, {useEffect, useState} from 'react'
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
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
    }
`

const Formulario = () => {

  const [cryptos, setCryptos] = useState([]);

  const [currency, SelectMonedas] = useSelectMonedas("Elige tu Moneda", currencies);
  const [crypto, SelectCryptomoneda] = useSelectMonedas("Elige tu Criptomoneda", cryptos);

  useEffect(() => {
    const requestAPI = async() => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();

      const arrayCryptos = result.Data.map(crypto => {
        const object = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }
        return object;
      })

      setCryptos(arrayCryptos);
    }
    requestAPI();
  }, []);

  return (
    <form>
        <SelectMonedas />
        <SelectCryptomoneda />
        <InputSubmit type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario