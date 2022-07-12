import styled from 'styled-components';

export const Label = styled.label`
  color: #f8e3e0;
  margin-right: 24px;
`;
export const Input = styled.input`
  margin-left: 24px;
  padding: 3px;
  border: 2px solid transparent;
  border-radius: 12px;
  :hover,
  :focus {
    border: 2px solid #91b291;
    outline: 1px solid green;
  }
`;
export const Submit = styled.button`
  padding: 4px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #000;
  font-size: 14px;
  color: #fff;
  :hover,
  :focus {
    outline: 2px solid #fff;
  }
`;
