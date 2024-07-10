import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 10px;

  cursor: pointer;

  text-transform: uppercase;

  border: none;
  border-radius: 8px;

  background-color: ${p => p.theme.colors.btn};

  color: ${p => p.theme.colors.textWhite};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.btnHover};
  }

  @media screen and (min-width: 425px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
