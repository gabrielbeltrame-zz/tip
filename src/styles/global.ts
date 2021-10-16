import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
      --red: #b47b6d;
      --blue: #c5e4e7;
      
      --text-title: #363F5F;
      --text-body: #133c3e;
      --subtitle: #659b9d;
      
      --background: #c5e4e7;
      --shape: #fff;

      --active: #9fe8df;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    html {
      @media(max-width: 1080px) {
        font-size: 93.75%; // 15px
      }

      @media(max-width: 728px) {
        font-size: 87.5%; // 14px
      }
    }
  
    body {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }
  
    body, input, textarea, button {
      font-family: "Poppins", sans-serif;
      
      font-weight: bold;
    }
  
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
  
    button {
      cursor: pointer;
    }
  
    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

`;

export const Container = styled.div`
  background: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
