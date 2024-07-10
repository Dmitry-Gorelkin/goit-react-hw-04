import styled from 'styled-components';

export const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;

  outline: none;

  color: ${p => p.theme.colors.textSecondary};

  padding: 10px;
  padding-right: 40px;

  border: none;
  border-radius: 8px;
`;

export const FormInputContrainer = styled.div`
  display: block;
  position: relative;

  width: 100%;

  @media screen and (min-width: 425px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const FormButtomIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  padding: 2px;

  border: none;

  background-color: transparent;
  color: ${p => p.theme.colors.text};

  position: absolute;

  top: 50%;
  transform: translate(-50%, -50%);

  right: -5px;

  cursor: pointer;

  &:hover,
  :focus {
    color: ${p => p.theme.colors.btnHover};
  }
`;
