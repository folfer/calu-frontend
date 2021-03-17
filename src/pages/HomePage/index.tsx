import { useState } from 'react';

import FlipPage from "react-flip-page";

import { Container } from './styles';

import First from '../../assets/first.svg';
import Second from '../../assets/second.svg';
import Third from '../../assets/third.svg';
import Four from '../../assets/four.svg';
import Start from '../../assets/start.png';

const HomePage: React.FC = () => {
  const [isHistory, setIsHistory] = useState(false);

  const handleCallingGame = () => {
    setIsHistory(true);
    console.log(isHistory);
  }

  return (
    <Container>
      {isHistory ? (<></>) : 
        (
        <div className="first-container">
          <div className="second-container">
            <FlipPage noShadow={true} width="100%" height={window.innerHeight} orientation="horizontal">
              <article className="firstArticle">
                <img src={First} alt="first" className="firstImage" />
              </article>
              <article className="firstArticle">
                <img src={Second} alt="first" className="firstImage" />
              </article>
              <article className="firstArticle">
                <img src={Third} alt="first" className="firstImage" />
              </article>
              <article className="firstArticle">
                <img src={Four} alt="first" className="firstImage" />
                <img src={Start} alt="button" onClick={handleCallingGame} className="button" />
              </article>
            </FlipPage>
          </div>
        </div>)}
    </Container>
  )
};

export default HomePage;