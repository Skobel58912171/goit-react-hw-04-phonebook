import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font: 0.8em 'typewriter', sans-serif;
`;
export const Btn = styled.button`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: inline-block;
  padding: 1px 15px;
  color: black;
  border: 1px solid #0000ff;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 24px;

  &:hover,
  &:focus {
    background-color: #4682b4;
  }
`;
