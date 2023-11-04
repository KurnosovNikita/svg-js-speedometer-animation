document.querySelector('.button').addEventListener('click', () => {
  let angle = 0;
  const maxAngle = 180;
  const forwardSpeed = 5;
  let rotationIntervalId;
  const arrowElement = document.querySelector('#arrow');

  const rotateArrow = () => {
    if (angle >= maxAngle) {
      clearInterval(rotationIntervalId);
    }

    angle += forwardSpeed;

    arrowElement.setAttribute('transform', `rotate(${angle}, 205, 205)`);
  }

  rotationIntervalId = setInterval(rotateArrow, 50);
});
