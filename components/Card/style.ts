import styled from 'styled-components';
import Image from 'next/image';

export const CardContainer = styled.section`
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 34px;
  margin-right: 12px;
  margin-left: 14px;
  min-height: 91px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 16px;
  color: #2c2c2c;
  min-width: 92px;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: #2c2c2c;
  padding-top: 8px;
  margin-left: 14px;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background-color: #373737;
  border-radius: 5px;
  max-height: 26px;
`;

export const Price = styled.div`
  color: white;
  font-size: 15px;
  padding: 2px 6px;
  font-weight: 700;
`;

export const StyledImage = styled(Image)`
  align-self: center;
  padding-top: 18px;
`;

export const BuyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background-color: #0f52ba;
  color: white;
  font-size: 14px;
  margin-top: 12px;
  cursor: pointer;
`;
export const Buy = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 7px 0;
`;
