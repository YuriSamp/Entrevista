import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/store'
import { decrement, increment } from '@/context/features/counter'
import {
  IconExit,
  ProductDisplay,
  ProductName,
  ProductPrice,
  QuantityHandleButton,
  QuantityHandleContainer,
  Quantity,
  QuantityHandleDisplay,
  Separator,
  Label,
} from './style'

function Product() {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <ProductDisplay>
      <IconExit>X</IconExit>
      {/* <Image/> */}
      <ProductName>
        Apple
        Homepod
      </ProductName>
      <QuantityHandleContainer>
        <Label>Qtd:</Label>
        <QuantityHandleDisplay>
          <QuantityHandleButton onClick={() => dispatch(decrement())}> - </QuantityHandleButton>
          <Separator> | </Separator>
          <Quantity> {count}</Quantity>
          <Separator> | </Separator>
          <QuantityHandleButton onClick={() => dispatch(increment())} > + </QuantityHandleButton>
        </QuantityHandleDisplay>
      </QuantityHandleContainer>
      <ProductPrice>R$300</ProductPrice>
    </ProductDisplay>
  )
}

export default Product