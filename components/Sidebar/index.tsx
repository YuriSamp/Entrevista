import React from 'react'
import Product from '../product'
import { useDispatch, useSelector } from 'react-redux'
import { CloseSidebar } from '@/context/features/navbar'
import {
  SideBarHeader,
  IconExit,
  Title,
  ProductContainer,
  SidbarPrice,
  SidebarPriceDisplay,
  SidebarConfirmButton,
  SidebarText,
  SideBarConatiner
}
  from './style'
import { RootState } from '@/context/store';
import { IProduct } from '@/interface/product'

function Sidebar() {

  const CartItensArr = useSelector((state: RootState) => state.cart)
  const open = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch()

  const arrPrice = CartItensArr.map((item: IProduct) => Number(item.price))
  const TotalPrice = arrPrice.length > 0 && arrPrice.reduce((a, b) => a + b)

  return (
    <SideBarConatiner open={open}>
      <SideBarHeader>
        <Title>Carrinho <br /> de Compras</Title>
        <IconExit onClick={() => dispatch(CloseSidebar())} >X</IconExit>
      </SideBarHeader>
      <ProductContainer>
        {CartItensArr.map((item: IProduct, index) => (
          <Product key={index} Name={item.name} Price={item.price} Photo={item.photo} Id={item.id} />
        ))}
      </ProductContainer>
      <SidbarPrice>
        <SidebarPriceDisplay>
          <SidebarText>Total:</SidebarText>
          <SidebarText>R${TotalPrice}</SidebarText>
        </SidebarPriceDisplay>
      </SidbarPrice>
      <SidebarConfirmButton>Finalizar Compra</SidebarConfirmButton>
    </SideBarConatiner>
  )
}

export default Sidebar