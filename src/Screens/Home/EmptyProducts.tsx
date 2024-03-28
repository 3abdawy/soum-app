import React from 'react';
import Typography from '@shared/Components/Typography';
import styled from 'styled-components/native';

const EmptyProducts = () => {
  <MainContainer>
    <Typography variant="title" fontWeight="bold">
      ليس لديك شحنات لتوصيلها
    </Typography>
    <Typography variant="caption" fontWeight="semiBold">
      الشحنات المطلوب منك توصليها سوف تظهر هنا
    </Typography>
  </MainContainer>;
};
export default EmptyProducts;

const MainContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
