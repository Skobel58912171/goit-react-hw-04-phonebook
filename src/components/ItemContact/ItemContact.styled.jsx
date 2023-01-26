import styled from 'styled-components';

export const DataContact = styled.p`
  font-size: 22px;
  margin: 0;
`;

export const BtnDelete = styled.button`
  display: block;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: inline-block;
  padding: 1px 15px;
  margin-left: auto;
  color: black;
  border: 1px solid #0000ff;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 18px;

  &:hover,
  &:focus {
    background-color: #4682b4;
  }
`;
