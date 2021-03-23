import styled from 'styled-components';
import background_game from '../../assets/background.svg';
import background_mobile from '../../assets/background.svg';


export const Main = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
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
    height: 99vh;

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
    width: 30%;
    height: 99vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${background_game});
    background-repeat: no-repeat;
    background-size: 100vw auto;
    background-position: center top;
    background-attachment: fixed;
  }
`;

