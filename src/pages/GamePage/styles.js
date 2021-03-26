import styled from 'styled-components';
// import background_game from '../../assets/background.svg';
import background_mobile from '../../assets/background.svg';


export const Main = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fcdeb9;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: hidden;

  background-image: url(${background_mobile});
  background-repeat: no-repeat;
  background-size: 200vh auto;
  background-position: center top;
  background-attachment: fixed;

  @media(min-width: 766px) {
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 200vh auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 980px) {
    width: 44%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 170vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 1200px) {
    width: 40%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 160vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 1336px) {
    width: 36%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 145vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 1500px) {
    width: 33%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 130vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 1650px) {
    width: 30%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 130vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 1800px) {
    width: 27%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 110vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 2000px) {
    width: 24%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: center top;
    background-attachment: fixed;
  }

  @media(min-width: 2300px) {
    width: 21%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_mobile});
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: center top;
    background-attachment: fixed;
  }
`;

