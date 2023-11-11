document.querySelector('.button').addEventListener('click', () => {
  let angle = 0;
  let arrowSpeed = 1;
  let arrowDirection = 1;
  let arrowAcceleration = 0.5;
  const maxAngle = 180;

  let value = 0;
  let progressSpeed = 11;
  let progressDirection = 1;
  let progressAcceleration = 0.5;
  const maxValue = 450;

  const arrowElement = document.querySelector('#arrow');
  const progressEl = document.querySelector('#progress');

  let intervalId;

  const rotateArrow = () => {
    angle += arrowSpeed * arrowDirection;

    if (angle < maxAngle && arrowDirection === 1) {
      arrowSpeed += arrowAcceleration;
    }

    if (angle > maxAngle && arrowDirection === 1) {
      arrowDirection = -1;
      arrowSpeed = 5;
    }

    if (angle <= 0) {
      angle = 0;
    }

    arrowElement.setAttribute('transform', `rotate(${angle}, 205, 205)`);
  };

  const fillProgress = () => {
    value += progressSpeed * progressDirection;

    if (value < maxValue && progressDirection === 1) {
      progressSpeed += progressAcceleration;
    }

    if (value > maxValue && progressDirection === 1) {
      progressDirection = -1;
      progressSpeed = 13;
    }

    if (value <= 0) {
      value = 0;
    }

    progressEl.setAttribute('stroke-dasharray', `${value} 900`);
  }

  const updateAnimations = () => {
    rotateArrow();
    fillProgress();

    if (angle <= 0 && value <= 0) {
      clearInterval(intervalId);
    }
  };

  intervalId = setInterval(updateAnimations, 50);
});
