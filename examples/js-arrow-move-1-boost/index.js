document.querySelector('.button').addEventListener('click', () => {
  let angle = 0;
  let acceleration = 0.5;
  let maxAngle = 180;
  let speed = 1;
  let rotationIntervalId;
  const arrowElement = document.querySelector('#arrow');

  const rotateArrow = () => {
    angle += speed;
    speed += acceleration;

    if (angle > maxAngle) {
      clearInterval(rotationIntervalId);
    }

    arrowElement.setAttribute('transform', `rotate(${angle}, 205, 205)`);
  }

  rotationIntervalId = setInterval(rotateArrow, 50);
});
