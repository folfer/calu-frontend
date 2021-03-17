import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  .firstArticle {
    width: 100%;
    height: 100%;
  }

  .firstImage {
    width: 100%;
    height: 100%;
    background: #FEEDD9;
  }

  > p {
    text-align: center;
  }

  .button {
    width: 130px;
    height: 50px;

    position: relative;

    bottom: 132px;
    left: calc(50vw - 65px);

    /* z-index: 99; */

    cursor: pointer;
  }
  
  @media(max-width: 550px) {
    .button {
      width: 130px;
      height: 50px;

      position: relative;

      bottom: 132px;
      left: calc(50vw - 65px);

      /* z-index: 99; */

      cursor: pointer;
    }
  }

  @media(min-width: 980px) {

    .first-container {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .second-container {
      width: 480px;
    }

    .button {
      width: 130px;
      height: 50px;

      position: absolute;

      top: 735px;
      bottom: 0;
      right: 0;
      left: 20px;

      z-index: 99;

      cursor: pointer;
    }
  }
`;
