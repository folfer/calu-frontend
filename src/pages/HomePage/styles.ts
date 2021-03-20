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
    position: absolute;
  }

  .firstText {
    position: absolute;
    text-align: left;
    padding: 20px;
    top: 21%;
    width: 82%;
    left: 0%;
    font-size: 10px;
  }

  .secondText {
    position: absolute;
    text-align: left;
    padding: 20px;
    top: 25%;
    width: 69%;
    left: 0%;
    font-size: 10px;
  }

  .thirdText {
    position: absolute;
    text-align: left;
    padding: 20px;
    top: 57%;
    width: 62%;
    left: 43%;
    font-size: 10px;
  }

  .fourthText {
    position: absolute;
    text-align: center;
    padding: 20px;
    top: 21%;
    width: 82%;
    left: 10%;
    font-size: 10px;
  }

  .fourImage {
    width: 100%;
    position: absolute;
  }

  > p {
    text-align: center;
  }

  .button {
    width: 90px;
    height: 35px;

    position: relative;

    bottom: -22%;
    left: -31%;
    
    cursor: pointer;
  }

    .rightArrow {
      top: 50%;
      left: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
    }

    .leftArrow {
      top: 50%;
      right: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
    }
  
  @media(min-width: 375px) {
    .firstText {
    font-size: 12px;
  }

  .secondText {
    font-size: 12px;
  }

  .thirdText {
    font-size: 12px;
  }

  .fourthText {
    font-size: 12px;
  }
  }

  @media(min-width: 414px) {
    .firstText {
    top: 21%;
    font-size: 13px;
  }

  .secondText {
    font-size: 13px;
  }

  .thirdText {
    font-size: 13px;
  }

  .fourthText {
    font-size: 13px;
  }
  }

  @media(orientation: landscape) {
    .firstImage {
      width: auto;
      height: 100vh;
    }
    .fourImage {
      width: auto;
      height: 100vh;
    }

    .button {
      width: 100px;
      height: 35px;

      position: relative;

      bottom: -36%;
      left: -12%;
      
      cursor: pointer;
    }

    .firstText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 5%;
      width: 59%;
      left: 21%;
    }

    .secondText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 8%;
      width: 46%;
      left: 23%;
    }

    .thirdText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 61%;
      width: 34%;
      left: 46%;
    }

    .fourthText {
      position: absolute;
      text-align: center;
      padding: 20px;
      top: 2%;
      width: 51%;
      left: 25%;
    }
  }

  @media(min-width: 980px) {

    .firstImage {
      width: auto;
      height: initial;
      position: relative;
    }

    .firstText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 9%;
      width: 45%;
      left: 0%;
    }

    .secondText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 14%;
      width: 30%;
      left: 50%;
    }

    .thirdText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 61%;
      width: 28%;
      left: 72%;
    }

    .fourthText {
      position: absolute;
      text-align: center;
      padding: 20px;
      top: 14%;
      width: 36%;
      left: 7%;
    }

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

    .rightArrow {
      top: 50%;
      left: 93%;
      position: absolute;
      color: white;
      width: 75px;
      height: 75px;
    }

    .leftArrow {
      top: 50%;
      right: 93%;
      position: absolute;
      color: white;
      width: 75px;
      height: 75px;
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