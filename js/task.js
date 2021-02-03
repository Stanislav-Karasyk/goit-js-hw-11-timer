const spanDaysRef = document.querySelector('[data-value="days"]');
const spanHoursRef = document.querySelector('[data-value="hours"]');
const spanMinsRef = document.querySelector('[data-value="mins"]');
const spanSecsRef = document.querySelector('[data-value="secs"]');

const countdownTimer = {
  selector: '#timer-1',
  targetDate: new Date('February 25, 2021'),
};

const targetTime = countdownTimer.targetDate.getTime();

const timer = {
  start() {
    setInterval(() => {
      const currentTargetTime = Date.parse(new Date());
      const deltaTime = targetTime - currentTargetTime;

      deltaTime >= 0 ? updateTimerFace(deltaTime) : '';
    }, 1000);
  },
};

timer.start();

function updateTimerFace(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad( Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  spanDaysRef.textContent = `${days}`;
  spanHoursRef.textContent = `${hours}`;
  spanMinsRef.textContent = `${mins}`;
  spanSecsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
