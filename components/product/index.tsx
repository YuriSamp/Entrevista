import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/context/store'
import { decrement, increment } from '@/context/features/counter'
import { CartDeleted } from '@/context/features/cart'
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

interface Props {
  Name: string;
  Price: string;
  Photo: string;
  Id: number;
}

function Product({ Name, Price, Photo, Id }: Props) {

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <ProductDisplay>
      <IconExit onClick={() => dispatch(CartDeleted(Id))} >X</IconExit>
      <Image src={Photo} width={50} height={50} alt='' />
      <ProductName>
        {Name}
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
      <ProductPrice>R${Math.trunc(Number(Price))}</ProductPrice>
    </ProductDisplay>
  )
}

export default Product