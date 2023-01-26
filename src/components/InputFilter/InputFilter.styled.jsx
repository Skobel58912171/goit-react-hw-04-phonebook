import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  padding: 10px 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  font: 0.6em 'typewriter', sans-serif;
  color: black;
  outline: none;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 2px solid #4169e1;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font: 0.8em 'typewriter', sans-serif;
`;
