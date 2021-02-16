import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: white;
  font-size: 1.5em;
  text-align: center;
`;

export const TitleHeader = ({ text }) => (<Title>{text}</Title>);

export default TitleHeader;