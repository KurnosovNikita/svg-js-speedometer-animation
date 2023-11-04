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
      step = 15;
    }

    if (value <= 0) {
      clearInterval(fillIntervalId);
      value = 0;
    }

    progressBarElement.setAttribute('stroke-dasharray', `${value}, 20000`);
  }

  fillIntervalId = setInterval(fillProgressBar, 50);
});
