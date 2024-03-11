import '../css/style.css';
import javascriptLogo from '../assets/images/javascript.svg';
import viteLogo from '../assets/images/vite.svg';
import { setupCounter } from './counter';
import dayjs from 'dayjs';
import { Moon } from "lunarphase-js";

const app = document.querySelector('#app');

app.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <p id="currentDate"></p>
    <p id="daysSinceStart"></p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

document.querySelector('#currentDate').textContent = `Today's date: ${dayjs().format('MMM DD, YYYY')}`;

const startDate = dayjs('2023-09-05');
const currentDate = dayjs();
const daysSinceStart = currentDate.diff(startDate, 'day');
document.querySelector('#daysSinceStart').textContent = `Number of days since Sept 5, 2023: ${daysSinceStart}`;

const phaseEmoji = Moon.lunarPhaseEmoji();

app.innerHTML += `
  <p id="phaseEmoji">Lunar Phase: ${phaseEmoji}</p>
`;