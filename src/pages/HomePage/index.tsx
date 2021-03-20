import { useEffect, useState } from 'react';

import FlipPage from "react-flip-page";

import { Container } from './styles';

import First from '../../assets/firstmobile.png';
import Second from '../../assets/secondmobile.png';
import Third from '../../assets/thirdmobile.png';
import Four from '../../assets/fourmobile.png';
import Start from '../../assets/start.png';
import FirstDesktop from '../../assets/first.png';
import SecondDesktop from '../../assets/second.png';

const HomePage: React.FC = () => {
  const [isHistory, setIsHistory] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleCallingGame = () => {
    setIsHistory(true);
    console.log(isHistory);
  }

  const windowWidth = (window.innerWidth);
  const MIN_WINDOW_WIDTH = 980;

  useEffect(() => {
    if (windowWidth <= MIN_WINDOW_WIDTH) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false);
    }
  }, [windowWidth]);


  return (
    <Container>
      {isHistory ? (<>
      </>) : <>
        {!isMobile ? (
          <div className="first-container">
            <div className="second-container">
              <FlipPage flipOnTouch={true} showSwipeHint={true} uncutPages width="100%" height={window.innerHeight} orientation="horizontal">
                <article className="firstArticle">
                  <img src={FirstDesktop} alt="first" className="firstImage" />
                </article>
                <article className="secondArticle">
                  <img src={SecondDesktop} alt="first" className="firstImage" />
                  <img src={Start} alt="button" onClick={handleCallingGame} className="buttonDesktop" />
                </article>
              </FlipPage>
            </div>
          </div>) :
          (
            <div className="first-container">
              <div className="second-container">
                <FlipPage flipOnTouch={true} disableSwipe={true} animationDuration={0} uncutPages noShadow={true} width="100%" height={window.innerHeight} orientation="horizontal">
                  <article className="firstArticle">
                    <img src={First} alt="first" className="firstImage" />
                  </article>
                  <article className="secondArticle">
                    <img src={Second} alt="first" className="firstImage" />
                  </article>
                  <article className="thirdArticle">
                    <img src={Third} alt="first" className="firstImage" />
                  </article>
                  <article className="fourArticle">
                    <img src={Four} alt="first" className="fourImage" />
                    <img src={Start} alt="button" onClick={handleCallingGame} className="button" />
                  </article>
                </FlipPage>
              </div>
            </div>)}
      </>}

    </Container>
  )
};

export default HomePage;