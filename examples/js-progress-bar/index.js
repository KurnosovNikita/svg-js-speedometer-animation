document.querySelector('.button').addEventListener('click', () => {
  let value = 0;
  let speed = 11;
  let direction = 1;
  let acceleration = 0.5;
  const maxValue = 450;
  let progressIntervalId;

  const progressEl = document.querySelector('#progress');

  const fillProgress = () => {
    value += speed * direction;

    if (value < maxValue && direction === 1) {
      speed += acceleration;
    }

    if (value > maxValue && direction === 1) {
      direction = -1;
      speed = 13;
    }

    if (value <= 0) {
      clearInterval(progressIntervalId);
      value = 0;
    }

    progressEl.setAttribute(
      'stroke-dasharray',
      `${value} 900`
    );
  }

  progressIntervalId = setInterval(fillProgress, 50);
});
