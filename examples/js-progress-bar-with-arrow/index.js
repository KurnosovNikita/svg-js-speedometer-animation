document.querySelector('.button').addEventListener('click', () => {
  let direction = 1;
  let value = 0, maxValue = 450, step = 11, acceleration = 0.5;
  let fillIntervalId;
  const progressBarElement = document.querySelector('#progress-bar');

  const fillProgressBar = () => {
    value += step * direction;

    if (value < maxValue && direction === 1) {
      step += acceleration;
    }

    if (value > maxValue && direction === 1) {
      direction = -1;
      step = 13;
    }

    if (value <= 0) {
      clearInterval(fillIntervalId);
      value = 0;
    }

    progressBarElement.setAttribute('stroke-dasharray', `${value}, 20000`);
  }

  fillIntervalId = setInterval(fillProgressBar, 50);

  let direction2 = 1;
  let angle = 0, maxAngle = 180, speed = 1, acceleration2 = 0.5;
  let rotationIntervalId;
  const arrowElement = document.querySelector('#arrow');

  const rotateArrow = () => {
    angle += speed * direction2;

    if (angle < maxAngle && direction2 === 1) {
      speed += acceleration2;
    }

    if (angle > maxAngle && direction2 === 1) {
      direction2 = -1;
      speed = 5;
    }

    if (angle <= 0) {
      clearInterval(rotationIntervalId);
      angle = 0;
    }

    arrowElement.setAttribute('transform', `rotate(${angle}, 205, 205)`);
  }

  rotationIntervalId = setInterval(rotateArrow, 50);
});
