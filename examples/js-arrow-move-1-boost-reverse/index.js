document.querySelector('.button').addEventListener('click', () => {
  let angle = 0;
  let speed = 1;
  let direction = 1;
  let acceleration = 0.5;
  const maxAngle = 180;
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

    arrowElement.setAttribute(
      'transform',
      `rotate(${angle}, 205, 205)`
    );
  }

  rotationIntervalId = setInterval(rotateArrow, 50);
});
