import styled from 'styled-components';

export const SideBarConatiner = styled.section`
  min-height: 100vh;
  background-color: #0f52ba;
  position: absolute;
  right: 0;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

// ${(Sidebar) => Sidebar ? `
//     display: block
//   ` : `
//   display: none
//   `}

export const SideBarHeader = styled.div`
  display: flex;
  gap: 210px;
  padding-top: 2rem;
  padding-left: 47px;
  padding-right: 22px;
`;

export const Title = styled.p`
  width: 200px;
  font-weight: 700;
  font-size: 27px;
  color: white;
`;

export const IconExit = styled.div`
  height: 2.8rem;
  width: 2.8rem;
  background-color: black;
  border-radius: 9999px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 400;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3.5rem;
  gap: 2rem;
`;

export const SidbarPrice = styled.div`
  padding: 0 47px;
  position: absolute;
  bottom: 130px;
  width: 100%;
`;

export const SidebarPriceDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SidebarText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 28px;
`;

export const SidebarConfirmButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-weight: 700;
  font-size: 28px;
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
`;
