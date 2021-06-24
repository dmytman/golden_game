const joystick = document.querySelector('.joystick');

const upArrows = ['ц', 'w', 'arrowtop'];
const leftArrows = ['a', 'ф', 'arrowleft'];
const downArrows = ['ы', 's', 'і', 'arrowdown'];
const rightArrows = ['в', 'd', 'arrowright'];

document.addEventListener('keypress', (event) => {
  const key = event.key.toLowerCase();

  if (upArrows.includes(key)) {
    return up();
  }

  if (leftArrows.includes(key)) {
    return left();
  }

  if (downArrows.includes(key)) {
    return down();
  }

  if (rightArrows.includes(key)) {
    return right();
  }
});

const up = () => {
  joystick.classList.add('joystick--up');
  console.log('w pressed');
};

const left = () => {
  joystick.classList.add('joystick--left');
  console.log('a pressed');
};

const down = () => {
  joystick.classList.add('joystick--down');
  console.log('s pressed');
};

const right = () => {
  joystick.classList.add('joystick--right');
  console.log('d pressed');
};

const allArrows = [...upArrows, ...leftArrows, ...downArrows, ...rightArrows];

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  const onKeyUp = (upEvent) => {
    document.removeEventListener('keyup', onKeyUp);

    joystick.classList.remove('joystick--up');
    joystick.classList.remove('joystick--left');
    joystick.classList.remove('joystick--down');
    joystick.classList.remove('joystick--right');
  };

  if (allArrows.includes(key)) {
    document.addEventListener('keyup', onKeyUp);
  }

  if (upArrows.includes(key)) {
    return up();
  }

  if (leftArrows.includes(key)) {
    return left();
  }

  if (downArrows.includes(key)) {
    return down();
  }

  if (rightArrows.includes(key)) {
    return right();
  }
});