import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;

  background: #232129;
  color: #666360;

  display: flex;
  align-items: center;

  ${props => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${props => props.isFilled && css`
    color: #ff9000;
    border-color: #232129;
  `}

  input {
    flex: 1;
    background: transparent;
    color: #F4EDE8;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }

  & + div {
    margin-top: 8px;
  }
`;

