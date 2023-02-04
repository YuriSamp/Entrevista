import styled from 'styled-components';
import Image from 'next/image';

export const Footer = styled.footer`
  background: #eeeeee;
`;
export const TextoDoFooter = styled.h1`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #000000;
`;

export const Header = styled.nav`
  background-color: #0f52ba;
  width: 100%;
  min-height: 100px;
  padding-right: 88px;
  padding-left: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
`;

export const SubTtitulo = styled.h2`
  font-size: 20px;
  font-weight: 300;
  position: relative;
  bottom: 3px;
  color: #ffffff;
`;

export const TituloContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
`;

export const DivCart = styled.button`
  display: flex;
  background-color: white;
  width: 90px;
  height: 45px;
  gap: 1rem;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
`;

export const CartItens = styled.div`
  color: #000000;
  font-weight: bold;
  font-size: 16px;
`;
export const StyledImage = styled(Image)`
  width: 19px;
  height: 19px;
`;

export const Body = styled.main`
  min-height: calc(100vh - 115px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.section`
  display: grid;
  column-gap: 31px;
  row-gap: 31px;
  grid-template-columns: repeat(4, 190px);
`;
