import styled from 'styled-components';

export const IconExit = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: black;
  border-radius: 9999px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 400;
  position: absolute;
  top: -5px;
  right: -5px;
  cursor: pointer;
`;

export const ProductDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 8px;
  width: 400px;
  height: 100px;
  position: relative;
`;

export const ProductName = styled.h3`
  font-size: 13px;
  font-weight: 400;
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

export const QuantityHandleContainer = styled.p`
  display: flex;
  flex-direction: column;
`;

export const QuantityHandleDisplay = styled.p`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid #bfbfbf;
  padding: 3px;
  border-radius: 6px;
`;

export const Label = styled.p`
  font-size: 5px;
  font-weight: 400;
`;

export const QuantityHandleButton = styled.button`
  border: none;
  font-size: 12px;
  background-color: white;
  cursor: pointer;
`;

export const Separator = styled.p`
  color: #bfbfbf;
`;

export const Quantity = styled.p`
  font-size: 12px;
`;
