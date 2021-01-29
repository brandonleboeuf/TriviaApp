import { style } from 'typestyle';
import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/conner-bowe.jpg';

// export const GlobalStyle = style({
//   height: '100%',
// });
export const GlobalStyle = createGlobalStyle`
  html {
    height: '100%',
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center
  }

  * {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
    /* color: black; */
  }

  button, span {
    color: black;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .score {
    margin: 0;
    font-size: 2rem;
  }

  h1 {
    /* font-family: 'Fascinate Inline', Impact, Haettenschweiler,
      'Arial Narrow Bold', sans-serif; */
    --webkit-background-clip: text;
    --webkit-text-fill-color: transparent;
    --moz-background-clip: text;
    --moz--webkit-text-fill-color: transparent;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    max-width: 700px;
  }

  .start,
  .next {
    cursor: pointer;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
