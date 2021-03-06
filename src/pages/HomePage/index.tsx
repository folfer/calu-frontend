import { useEffect, useState } from "react";

import FlipPage from "react-flip-page";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

import First from "../../assets/firstmobile.png";
import Second from "../../assets/secondmobile.png";
import Third from "../../assets/thirdmobile.png";
import Four from "../../assets/fourmobile.png";
import Start from "../../assets/start.png";
import FirstDesktop from "../../assets/first.png";
import SecondDesktop from "../../assets/second.png";

const HomePage: React.FC = () => {
  const isHistory = false;
  const [isMobile, setIsMobile] = useState(false);

  const history = useHistory();

  const handleCallingGame = () => {
    // setIsHistory(true);
    history.push("/play");
    // console.log(isHistory);
  };

  const windowWidth = window.innerWidth;
  const MIN_WINDOW_WIDTH = 980;

  useEffect(() => {
    if (windowWidth <= MIN_WINDOW_WIDTH) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  window.addEventListener("orientationchange", function () {
    window.location.reload();
  });

  return (
    <Container>
      {!isMobile && !isHistory ? (
        <div className="first-container">
          <div className="second-container">
            <FlipPage
              flipOnTouch={true}
              showSwipeHint={true}
              uncutPages
              width="100%"
              height={window.innerHeight}
              orientation="horizontal"
            >
              <article className="firstArticle">
                <img src={FirstDesktop} alt="first" className="firstImage" />
                <MdChevronRight className="rightArrow" />
                <p className="firstText">
                  Calu gosta muito das brincadeiras antigas, como peteca,
                  amarelinha, jogo das pedrinhas e muitas outras que aprendeu
                  com seus avós. Já seu irmão, Gabriel Akin, preferia, como
                  todos os meninos de 10 anos, jogar videogame.{" "}
                </p>
                <p className="secondText">
                  Calu teve uma ideia para chamar a atenção de Gabriel: mostrar
                  como brincadeiras antigas também podem ser divertidas.
                </p>
                <p className="thirdText">
                  Foi então que ela disse para ele que tinha criado um videogame
                  para jogar peteca! Gabriel, ao ouvir isso, finalmente tirou o
                  olho da TV e logo quis saber como poderia brincar também!
                </p>
              </article>
              <article className="secondArticle">
                <img src={SecondDesktop} alt="first" className="firstImage" />
                <img
                  src={Start}
                  alt="button"
                  onClick={handleCallingGame}
                  className="buttonDesktop"
                />
                <MdChevronLeft className="leftArrow" />
                <p className="fourthText">
                  Calu começou a contar sobre o jogo, suas cores, sons e que
                  poderiam fazer uma competição para descobrir quem conseguiria
                  fazer mais pontos, deixando Gabriel ainda mais animado para
                  jogar.{" "}
                </p>
                <p className="fifthText">
                  Basta não deixar a peteca cair ou fugir de você! Ah! Tome
                  cuidado para não machucar nenhum animalzinho que esteja
                  passando por perto.
                </p>
                <p className="sixthText">
                  Agora, você também pode jogar peteca com Calu e Gabriel!
                </p>
                <p className="seventhText">
                  Você tem 3 petecas e quanto mais tempo conseguir ficar com ela
                  no ar mais pontos você ganhará.
                </p>
              </article>
            </FlipPage>
          </div>
        </div>
      ) : (
        <></>
      )}
      {!isHistory && isMobile ? (
        <div className="first-container">
          <div className="second-container">
            <FlipPage
              flipOnTouch={true}
              disableSwipe={true}
              animationDuration={0}
              uncutPages
              noShadow={true}
              width="100%"
              height={window.innerHeight}
              orientation="horizontal"
            >
              <article className="firstArticle">
                <img src={First} alt="first" className="firstImage" />
                <MdChevronRight className="rightArrow" />
                <p className="firstText">
                  Calu gosta muito das brincadeiras antigas, como peteca,
                  amarelinha, jogo das pedrinhas e muitas outras que aprendeu
                  com seus avós. Já seu irmão, Gabriel Akin, preferia, como
                  todos os meninos de 10 anos, jogar videogame.{" "}
                </p>
              </article>
              <article className="secondArticle">
                <img src={Second} alt="first" className="firstImage" />
                <MdChevronLeft className="leftArrow" />
                <MdChevronRight className="rightArrow" />
                <p className="secondText">
                  Calu teve uma ideia para chamar a atenção de Gabriel: mostrar
                  como brincadeiras antigas também podem ser divertidas.
                </p>
                <p className="thirdText">
                  Foi então que ela disse para ele que tinha criado um videogame
                  para jogar peteca! Gabriel, ao ouvir isso, finalmente tirou o
                  olho da TV e logo quis saber como poderia brincar também!
                </p>
              </article>
              <article className="thirdArticle">
                <img src={Third} alt="first" className="firstImage" />
                <MdChevronLeft className="leftArrow" />
                <MdChevronRight className="rightArrow" />
                <p className="fourthText">
                  Calu começou a contar sobre o jogo, suas cores, sons e que
                  poderiam fazer uma competição para descobrir quem conseguiria
                  fazer mais pontos, deixando Gabriel ainda mais animado para
                  jogar.{" "}
                </p>
              </article>
              <article className="fourArticle">
                <img src={Four} alt="first" className="fourImage" />
                <img
                  src={Start}
                  alt="button"
                  onClick={handleCallingGame}
                  className="button"
                />
                <p className="fifthText">
                  Basta não deixar a peteca cair ou fugir de você! Ah! Tome
                  cuidado para não machucar nenhum animalzinho que esteja
                  passando por perto.
                </p>
                <p className="sixthText">
                  Agora, você também pode jogar peteca com Calu e Gabriel!
                </p>
                <p className="seventhText">
                  Você tem 3 petecas e quanto mais tempo conseguir ficar com ela
                  no ar mais pontos você ganhará.
                </p>
                <MdChevronLeft className="leftArrow" />
              </article>
            </FlipPage>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Container>
  );
};

export default HomePage;
