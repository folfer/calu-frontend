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

  .fifthText {
    position: absolute;
    text-align: center;
    padding: 20px;
    top: 21%;
    width: 82%;
    left: 10%;
    font-size: 10px;
  }

  .sixthText {
    position: absolute;
    text-align: center;
    padding: 20px;
    top: 21%;
    width: 82%;
    left: 10%;
    font-size: 10px;
  }

  .seventhText {
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
      top: 45%;
      left: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
      cursor: pointer;
    }

    .leftArrow {
      top: 45%;
      right: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
      cursor: pointer;
    }

    .game-container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  @media(min-width: 320px) and (min-height: 568px) {
    .firstText {
    top: 21%;
    font-size: 10px;
  }

  .secondText {
    top: 25%;
    font-size: 10px;
  }

  .thirdText {
    font-size: 10px;
    top: 57%;
    left: 41%;
  }

  .fourthText {
    top: 22%;
    font-size: 10px;
  }
  
  .fifthText {
    top: 22%;
    left: 0%;
    font-size: 10px;
    width: 50%;
  }

  .sixthText {
    top: 22%;
    left: 55%;
    font-size: 10px;
    width: 44%;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 10px;
    width: 43%;
  }
  }

  @media(min-width: 350px) and (min-height: 640px) {
    .firstText {
    top: 21%;
    font-size: 12px;
  }

  .secondText {
    top: 25%;
    font-size: 12px;
  }

  .thirdText {
    font-size: 12px;
    top: 57%;
    left: 41%;
  }

  .fourthText {
    top: 22%;
    font-size: 12px;
  }
  
  .fifthText {
    top: 22%;
    left: 0%;
    font-size: 12px;
    width: 50%;
  }

  .sixthText {
    top: 22%;
    left: 55%;
    font-size: 12px;
    width: 44%;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 12px;
    width: 43%;
  }
  }

  @media(min-width: 350px) and (min-height: 640px) {
    .firstText {
    top: 24%;
    font-size: 12px;
  }

  .secondText {
    top: 27%;
    font-size: 12px;
  }

  .thirdText {
    font-size: 12px;
    top: 56%;
    left: 41%;
  }

  .fourthText {
    top: 25%;
    font-size: 12px;
  }
  
  .fifthText {
    top: 26%;
    left: 0%;
    font-size: 12px;
    width: 50%;
  }

  .sixthText {
    top: 26%;
    left: 55%;
    font-size: 12px;
    width: 44%;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 12px;
    width: 43%;
  }

  .button {
    bottom: -19%;
  }
  }
  
  @media(min-width: 375px) and (min-height: 667px) {
    .firstText {
      top: 23%;
      font-size: 12px;
    }

    .secondText {
      top: 25%;
      font-size: 12px;
    }

    .thirdText {
      top: 57%;
      font-size: 12px;
    }

    .fourthText {
      top: 23%;
      font-size: 12px;
    }

    .fifthText {
      top: 22%;
      left: 1%;
      font-size: 12px;
    }

    .sixthText {
      top: 22%;
      left: 55%;
      font-size: 12px;
    }

    .seventhText {
      top: 50%;
      left: 1%;
      font-size: 12px;
    }

    .button {
      bottom: -22%;
    }
  }
  

  @media(min-width: 414px) and (min-height: 846px) {
    .firstText {
      top: 24%;
      font-size: 13px;
    }

    .secondText {
      top: 27%;
      font-size: 13px;
    }

    .thirdText {
      top: 57%;
      font-size: 13px;
    }

    .fourthText {
      top: 26%;
      font-size: 13px;
    }

    .fifthText {
    top: 26%;
    left: 0%;
    font-size: 13px;
  }

  .sixthText {
    top: 26%;
    left: 55%;
    font-size: 13px;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 13px;
  }

  .button {
    bottom: -19%;
  }
  }

  @media(min-width: 414px) and (min-height: 736px) {
    .firstText {
      top: 18%;
      font-size: 13px;
    }

    .secondText {
      top: 25%;
      font-size: 13px;
    }

    .thirdText {
      top: 58%;
      font-size: 13px;
    }

    .fourthText {
      top: 24%;
      font-size: 13px;
    }

    .fifthText {
    top: 23%;
    left: 0%;
    font-size: 13px;
  }

  .sixthText {
    top: 23%;
    left: 55%;
    font-size: 13px;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 13px;
  }

  .button {
    bottom: -19%;
  }
  }

  @media(min-width: 375px) and (min-height: 812px) {
    .firstText {
      top: 25%;
      font-size: 12px;
    }

    .secondText {
      top: 29%;
      font-size: 12px;
    }

    .thirdText {
      top: 56%;
      font-size: 12px;
    }

    .fourthText {
      top: 27%;
      font-size: 12px;
    }

    .fifthText {
    top: 27%;
    left: 0%;
    font-size: 12px;
  }

  .sixthText {
    top: 27%;
    left: 55%;
    font-size: 12px;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 12px;
  }

  .button {
    bottom: -19%;
  }
  }

  @media(min-width: 360px) and (min-height: 640px) {
    .firstText {
      top: 20%;
      font-size: 12px;
    }

    .secondText {
      top: 24%;
      font-size: 12px;
    }

    .thirdText {
      top: 57%;
      font-size: 12px;
    }

    .fourthText {
      top: 22%;
      font-size: 12px;
    }

    .fifthText {
    top: 22%;
    left: 0%;
    font-size: 12px;
  }

  .sixthText {
    top: 22%;
    left: 55%;
    font-size: 12px;
  }

  .seventhText {
    top: 48%;
    left: 0%;
    font-size: 12px;
  }

  .button {
    bottom: -21%;
  }
  }

  @media(min-width: 800px) and (min-height: 1280px) {
    .firstText {
      top: 12%;
      font-size: 23px;
    }

    .secondText {
      top: 22%;
      font-size: 23px;
    }

    .thirdText {
      font-size: 23px;
      top: 61%;
      left: 43%;
      width: 56%;
    }

    .fourthText {
      font-size: 22px;
      top: 23%;
    }

    .fifthText {
      top: 21%;
      left: 4%;
      font-size: 22px;
  }

  .sixthText {
    top: 21%;
    left: 54%;
    font-size: 22px;
  }

  .seventhText {
    top: 58%;
    left: 3%;
    font-size: 22px;
  }

    .button {
      width: 130px;
      height: 45px;
      bottom: -31%;
    }
  }

  @media(min-width: 768px) {
    .firstText {
      top: 12%;
      font-size: 23px;
    }

    .secondText {
      top: 17%;
      font-size: 23px;
    }

    .thirdText {
      font-size: 23px;
      top: 63%;
      left: 43%;
    }

    .fourthText {
      font-size: 22px;
      top: 16%;
    }

    .fifthText {
      top: 15%;
      left: 4%;
      font-size: 22px;
  }

  .sixthText {
    top: 15%;
    left: 54%;
    font-size: 22px;
  }

  .seventhText {
    top: 58%;
    left: 3%;
    font-size: 22px;
  }

    .button {
      width: 130px;
      height: 45px;
      bottom: -31%;
    }
  }

  @media(min-width: 1024px) and (min-height: 1366px) {
    .firstText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 21%;
      width: 52%;
      left: 0%;
      font-size: 22px;
    }

    .secondText {
      top: 17%;
      font-size: 23px;
    }

    .thirdText {
      font-size: 23px;
      top: 63%;
      left: 43%;
    }

    .fourthText {
      font-size: 22px;
      top: 16%;
    }

    .fifthText {
      top: 15%;
      left: 4%;
      font-size: 22px;
  }

  .sixthText {
    top: 15%;
    left: 54%;
    font-size: 22px;
  }

  .seventhText {
    top: 58%;
    left: 3%;
    font-size: 22px;
  }

    .button {
      width: 130px;
      height: 45px;
      bottom: -31%;
    }
  }

  @media(orientation: landscape) {
    .firstImage {
      width: auto;
      height: 85vh;
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
      width: 48%;
      left: 25%;
      font-size: 11px;
    }

    .secondText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 10%;
      width: 46%;
      left: 25%;
      font-size: 11px;
    }

    .thirdText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 59%;
      width: 31%;
      left: 45%;
      font-size: 11px;
    }

    .fourthText {
      position: absolute;
      text-align: center;
      padding: 20px;
      top: 9%;
      width: 51%;
      left: 25%;
      font-size: 11px;
    }

    .fifthText {
    top: 21%;
    left: 10%;
    font-size: 11px;
  }

  .sixthText {
    top: 21%;
    left: 10%;
    font-size: 11px;
  }

  .seventhText {
    top: 21%;
    left: 10%;
    font-size: 11px;
  }

    .rightArrow {
      top: 45%;
      left: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
      cursor: pointer;
    }

    .leftArrow {
      top: 45%;
      right: 90%;
      position: absolute;
      color: white;
      width: 45px;
      height: 45px;
      cursor: pointer;
    }
  }

  @media(min-width: 980px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .firstImage {
      width: 100%;
      height: initial;
      position: relative;
    }

    .firstText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 22%;
      width: 45%;
      left: 0%;
      font-size: 14px;
    }

    .secondText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 26%;
      width: 34%;
      left: 50%;
      font-size: 14px;
    }

    .thirdText {
      position: absolute;
      text-align: left;
      padding: 20px;
      top: 60%;
      width: 28%;
      left: 72%;
      font-size: 14px;
    }

    .fourthText {
      position: absolute;
      text-align: center;
      padding: 20px;
      top: 25%;
      width: 36%;
      left: 7%;
      font-size: 14px;
    }

    .fifthText {
      top: 23%;
      left: 51%;
      font-size: 14px;
      width: 23%;
    }

  .sixthText {
      top: 23%;
      left: 78%;
      font-size: 14px;
      width: 21%;
    }

  .seventhText {
    top: 53%;
    left: 51%;
    font-size: 14px;
    width: 22%;
  } 

    .first-container {
      width: 100%;
      height: auto;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #fcdeb9;
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
      
      bottom: 26%;
      right: 20%;

      cursor: pointer;
    }

    .rightArrow {
      top: 45%;
      left: 93%;
      position: absolute;
      color: white;
      width: 75px;
      height: 75px;
      cursor: pointer;
    }

    .leftArrow {
      top: 45%;
      right: 93%;
      position: absolute;
      color: white;
      width: 75px;
      height: 75px;
      cursor: pointer;
    }

    .game-container {
      width: 400px;
      height: 100vh;
      background: black;
    }
  }

  @media(min-width: 1200px) {

.first-container {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.secondArticle {
  background: #fcdeb9;
}

.firstImage {
  width: 100%;
  height: initial;
  position: relative;
}

.second-container {
  width: 100%;
}

.firstText {
  top: 13%;
  font-size: 20px;
}

.secondText {
  top: 17%;
  font-size: 20px;
}

.thirdText {
  top: 61%;
  width: 28%;
  font-size: 20px;
}

.fourthText {
  top: 18%;
  font-size: 20px;
}

.fifthText {
  top: 15%;
  left: 52%;
  font-size: 20px;
}

.sixthText {
  top: 15%;
  left: 78%;
  font-size: 20px;
}

.seventhText {
  top: 55%;
  left: 51%;
  font-size: 20px;
  width: 18%;
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

  @media(min-width: 1366px) {

  .first-container {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .firstImage {
    width: auto;
    height: initial;
    position: relative;
  }

  .second-container {
    width: 100%;
  }

  .firstText {
    top: 7%;
    font-size: 20px;
  }

  .secondText {
    top: 13%;
    font-size: 20px;
  }

  .thirdText {
    top: 64%;
    width: 24%;
    font-size: 20px;
    left: 75%;
  }

  .fourthText {
    top: 14%;
    font-size: 20px;
    left: 5%;
  }

  .fifthText {
    top: 10%;
    left: 51%;
    font-size: 20px;
  }

  .sixthText {
    top: 10%;
    left: 80%;
    font-size: 20px;
  }

  .seventhText {
    top: 55%;
    left: 52%;
    font-size: 20px;
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

  .firstImage {
    width: 100%;
    height: initial;
    position: relative;
  }

  .second-container {
    width: 100%;
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

  .firstText {
    top: 9%;
    font-size: 24px;
  }

  .secondText {
    top: 14%;
    font-size: 24px;
  }

  .thirdText {
    top: 62%;
    width: 28%;
    font-size: 24px;
    left: 72%;
  }

  .fourthText {
    top: 14%;
    font-size: 24px;
    left: 6%;
  }

  .fifthText {
    top: 12%;
    left: 52%;
    font-size: 24px;
    width: 21%;
  }

  .sixthText {
    top: 12%;
    left: 78%;
    font-size: 24px;
    width: 20%;
  }

  .seventhText {
    top: 57%;
    left: 53%;
    font-size: 24px;
    width: 17%;
  }
}

@media(min-width: 1800px) {

.first-container {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.firstImage {
  width: 100%;
  height: initial;
  position: relative;
}

.second-container {
  width: 1800px;
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

.firstText {
  top: 1%;
  font-size: 24px;
}

.secondText {
  top: 7%;
  font-size: 24px;
}

.thirdText {
  top: 68%;
  width: 28%;
  font-size: 24px;
}

.fourthText {
  top: 7%;
  font-size: 24px;
}

.fifthText {
  top: 12%;
  left: 52%;
  font-size: 24px;
  width: 21%;
}

.sixthText {
  top: 12%;
  left: 78%;
  font-size: 24px;
  width: 20%;
}

.seventhText {
  top: 57%;
  left: 53%;
  font-size: 24px;
  width: 17%;
}
}
`;