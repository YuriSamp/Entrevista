import { IProduct } from '@/interface/poroduct'
import Image from 'next/image'
import styled from 'styled-components'
import { FiShoppingBag } from 'react-icons/fi'

export default function Card(props: IProduct) {

  const CardContainer = styled.section`
  width: 200px;
  background-color:  #FFFFFF;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  `

  const DivTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 34px;
  margin-right: 12px;
  margin-left: 14px;
  min-height: 91px;
  `

  const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #2C2C2C;
  min-width: 92px;
  `

  const Description = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: #2C2C2C ;
  padding-top: 8px;
  margin-left: 14px;
  `

  const PriceBox = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background-color: #373737;
  border-radius: 5px;
  max-height: 26px;
  `

  const Price = styled.div`
    color: white;
    font-size: 15px;
    padding: 2px 6px;
    font-weight: 700;
  `

  const StyledImage = styled(Image)`
  align-self: center;
  padding-top: 18px;
  `

  const BuyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: #0F52BA;
  color: white;
  font-size: 14px;
  margin-top: 12px;
  `
  const Buy = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 7px 0;
  `

  return (
    <>
      <CardContainer>
        <StyledImage src={props.photo} alt='Foto de um produto' width={150} height={138} />
        <DivTitle>
          <Title>{props.name}</Title>
          <PriceBox>
            <Price>
              R${Math.trunc(Number(props.price))}
            </Price>
          </PriceBox>
        </DivTitle>
        <Description>Redesigned from scratch and completely revised.</Description>
        <BuyContainer>
          <FiShoppingBag />
          <Buy>COMPRAR</Buy>
        </BuyContainer>
      </CardContainer>
    </>
  )
}