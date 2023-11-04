document.querySelector('.button').addEventListener('click', () => {
  const arrowElement = document.querySelector('#arrow');
  const progressBarElement = document.querySelector('#progress-bar');

  let direction = 1;
  let value = 0, maxValue = 450, step = 11, acceleration = 0.5;
  let angle = 0, maxAngle = 180, speed = 1;

  const updateAnimations = () => {
    value += step * direction;

    if (value > maxValue) {
      direction = -1;
      step = 1;
    }
    if (value <= 0) {
      value = 0;
    } else {
      step += acceleration;
    }

    angle += speed * direction;

    if (angle > maxAngle) {
      direction = -1;
      speed = 8;
    } else {
      speed += acceleration;
    }

    if (angle <= 0) {
      angle = 0;
      clearInterval(animationIntervalId);
    }

    progressBarElement.setAttribute('stroke-dasharray', `${value}, 20000`);
    arrowElement.setAttribute('transform', `rotate(${angle}, 205, 205)`);
  };

  const animationIntervalId = setInterval(updateAnimations, 50);
});
