import { IProduct } from '@/interface/product'
import { FiShoppingBag } from 'react-icons/fi'
import {
  CardContainer,
  DivTitle,
  Title,
  Description,
  PriceBox,
  Price,
  StyledImage,
  BuyContainer,
  Buy
} from './style'
import { useDispatch } from 'react-redux'
import { CartAdd } from '@/context/features/cart'

export default function Card(props: IProduct) {

  const dispatch = useDispatch()

  return (
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
      <BuyContainer onClick={() => dispatch(CartAdd(props))}>
        <FiShoppingBag />
        <Buy>COMPRAR</Buy>
      </BuyContainer>
    </CardContainer>
  )
}