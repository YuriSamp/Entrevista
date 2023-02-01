import React from 'react'
import Product from '../product'
import { useDispatch } from 'react-redux'
import { CloseSidebar } from '@/context/features/navbar'
import {
  SideBarConatiner,
  SideBarHeader,
  IconExit,
  Title,
  ProductContainer,
  SidbarPrice,
  SidebarPriceDisplay,
  SidebarConfirmButton,
  SidebarText
} from './style'

function Sidebar() {
  const dispatch = useDispatch()

  return (
    <SideBarConatiner>
      <SideBarHeader>
        <Title>Carrinho <br /> de Compras</Title>
        <IconExit onClick={() => dispatch(CloseSidebar())} >X</IconExit>
      </SideBarHeader>
      <ProductContainer>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductContainer>
      <SidbarPrice>
        <SidebarPriceDisplay>
          <SidebarText>Total:</SidebarText>
          <SidebarText>R$300</SidebarText>
        </SidebarPriceDisplay>
      </SidbarPrice>
      <SidebarConfirmButton>Finalizar Compra</SidebarConfirmButton>
    </SideBarConatiner>
  )
}

export default Sidebar