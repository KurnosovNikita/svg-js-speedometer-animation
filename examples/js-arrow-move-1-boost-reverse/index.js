document.querySelector('.button').addEventListener('click', () => {
  let direction = 1;
  let angle = 0, maxAngle = 180, speed = 1, acceleration = 0.5;
  let rotationIntervalId;
  const arrowElement = document.querySelector('#arrow');

  const rotateArrow = () => {
    angle += speed * direction;

    if (angle < maxAngle && direction === 1) {
      speed += acceleration;
    }

    if (angle > maxAngle && direction === 1) {
      direction = -1;
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
