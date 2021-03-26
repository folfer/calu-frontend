import React, { useEffect } from "react";
import "./globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";

import Shuttle from "./shuttle";
import Obstacle from "./obstacle";
import Life from "./lifes";
import soundBird from "../assets/birdCollision.mp3";
import soundGameover from "../assets/gameover.mp3";
import soundgame from "../assets/gamesound.mp3";

const P5Sketch = () => {
  const sketch = (p5) => {
    let stl;
    // let o;
    // let bg;
    let end = true;
    let intro = true;
    let score = 1;
    let obstacles = [];
    let birdCollision;
    let gameover;
    let gamesound;
    let lifes = [];
    let loop = false;
    const MAX_OBSTACLES = 7;

    p5.preload = () => {
      birdCollision = p5.loadSound(soundBird);
      gameover = p5.loadSound(soundGameover);
      gamesound = p5.loadSound(soundgame);
    };

    p5.setup = () => {
      let canvasDiv = document.querySelector("#foo");
      let width = canvasDiv.offsetWidth;
      let height = canvasDiv.offsetHeight;
      let gameCanvas = p5.createCanvas(width, height);
      gameCanvas.parent(canvasDiv);

      p5.frameRate(30);
      p5.textSize(32);

      lifes = [new Life(p5, 1), new Life(p5, 2), new Life(p5, 3)];

      setInterval(() => {
        if (
          obstacles.length < Math.ceil(score * 0.003) &&
          obstacles.length <= MAX_OBSTACLES
        ) {
          obstacles.push(new Obstacle(p5, score + 1));
        }
      }, 1500);
    };

    p5.draw = () => {
      p5.clear();
      p5.background(0, 0, 0, 0);
      p5.fill(0);
      p5.stroke(255);
      if (p5.width > p5.height) {
        p5.translate(p5.width * 0.5, p5.height * 0.5);
        p5.rotate(90);
        p5.translate(-p5.width * 0.5, -p5.height * 0.5);
      }
      if (!end) {
        stl.move(p5);
        // o.move(p5, score);
        stl.drag(p5);

        if (!loop) {
          gamesound.loop();
          loop = true;
        }

        if (!stl.isAlive(p5)) {
          gamesound.stop();
          gameover.play();
          end = true;
          setTimeout(() => {
            loop = false;
          }, 2000);
          lifes = [new Life(p5, 1), new Life(p5, 2), new Life(p5, 3)];
        }

        lifes.forEach((life) => {
          life.render(p5);
        });

        obstacles.forEach((obstacle) => {
          obstacle.render(p5);
          obstacle.move(p5);
          obstacle.offscreen(p5, score);
          if (stl.detectCollision(p5, obstacle.pos, obstacle.size)) {
            birdCollision.play();

            obstacles.splice(obstacles.indexOf(obstacle), 1);
            lifes.pop();
            stl.resetPosition(p5);
            if (lifes.length <= 0) {
              gamesound.stop();
              gameover.play();
              end = true;
              setTimeout(() => {
                loop = false;
              }, 2000);
              lifes = [new Life(p5, 1), new Life(p5, 2), new Life(p5, 3)];
            }
          }
        });

        // if (!o.isAlive(p5)) {
        //   o = new Obstacle(p5);
        // }

        stl.render(p5);
        // o.render(p5);

        score += 0.5;

        p5.fill(255);
        p5.textAlign(p5.RIGHT);
        p5.text(p5.int(score), p5.width - 30, 58);
      } else {
        p5.fill(255);
        p5.textAlign(p5.CENTER);
        if (intro) {
          p5.text("Clique para Jogar", p5.width * 0.5, 140);
        } else {
          p5.text("Clique para Jogar", p5.width * 0.5, 140);
          p5.text("score", p5.width * 0.5, 240);
          p5.text(p5.int(score), p5.width * 0.5, 280);
          obstacles = [];
        }
      }
    };

    p5.reset = () => {
      end = false;
      score = 0;
      stl = new Shuttle(p5);
      // o = new Obstacle(p5);
    };

    p5.mouseClicked = () => {
      intro = false;
      if (end) {
        p5.reset(p5);
      }
      stl.jump(p5, p5.mouseX, score);
    };

    p5.windowResized = () => {
      let canvasDiv = document.querySelector("#foo");
      let width = canvasDiv.offsetWidth;
      let height = canvasDiv.offsetHeight;
      p5.resizeCanvas(width, height);
    };
  };

  useEffect(() => {
    new p5(sketch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export default P5Sketch;
