import * as React from 'react';
import styled from "styled-components";

const LabelNew = styled('div')`
  display: flex;
  margin-left: 4px;
  max-height: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  background: #EAFDF5;
  border-radius: 8px;
  color: #0C965A;
`;

const Label = () => {
  return <LabelNew>New</LabelNew>
};

export default Label;
