import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  .firstArticle {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #fcdeb9;
  }

  .secondArticle {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #717c81;
  }

  .thirdArticle {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #efaeb4;
  }

  .fourArticle {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: #584f71;
  }

  .firstImage {
    width: 100%;
  }

  .fourImage {
    width: 100%;
  }

  > p {
    text-align: center;
  }

  .button {
      width: 130px;
      height: 50px;

      position: relative;

      bottom: 65px;
      left: calc(50vw - 195px);
      
      cursor: pointer;
    }
  
  /* @media(max-width: 550px) {
    .button {
      width: 130px;
      height: 50px;

      position: relative;

      bottom: 65px;
      left: calc(50vw - 195px);
      
      cursor: pointer;
    }
  } */

  @media(min-width: 980px) {

    .first-container {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .second-container {
      width: 100%;
    }
    

    .buttonDesktop {
      width: 130px;
      height: 50px;

      position: absolute;

      /* bottom: calc(50vh - 222px);
      right: calc(50vw - 340px); */
      
      bottom: 20%;
      right: 20%;

      cursor: pointer;
    }
  }

  @media(min-width: 1366px) {

  .first-container {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .second-container {
    width: 1600px;
  }


  .buttonDesktop {
    width: 130px;
    height: 50px;

    position: absolute;

    /* bottom: calc(50vh - 250px);
    right: calc(50vw - 435px); */
    bottom: 20%;
    right: 20%;

    cursor: pointer;
  }
}

@media(min-width: 1500px) {

  .first-container {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .second-container {
    width: 1600px;
  }


  .buttonDesktop {
    width: 130px;
    height: 50px;

    position: absolute;

    /* bottom: calc(50vh - 280px);
    right: calc(50vw - 475px); */
    bottom: 20%;
    right: 20%;

    cursor: pointer;
  }
}
`;