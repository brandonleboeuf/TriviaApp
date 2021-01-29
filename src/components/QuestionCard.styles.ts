// import { style } from 'typestyle';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  background-color: #fff;
  border-radius: 10px;
  color: black;
  padding: 20px;
  padding-bottom: 40px;
  text-align: center;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  button {
    margin: 5px 0;
    min-width: 200px;
    height: 40px;
    transition: all 0.3s ease;
    font-size: 0.8rem;
    cursor: pointer;
    user-select: none;
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    :hover {
      opacity: 0.8;
    }

    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #ff5665, #c16868)'
        : 'linear-gradient(90deg, #56ccaff, #6eafb4)'};
  }
`;
