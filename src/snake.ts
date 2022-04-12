import '../style/snake.css';

let y: number;
let x: number; // player
let cy: number;
let cx: number; // coin
const MY = 20;
const MX = 34; // field size
let score: number;
let keepMove: ReturnType<typeof setTimeout>;
let direction: number; // 0 1 2 3 상 하 좌 우
let speed;
const snakeQueue: number[][] = [];
const snakeColor = '#ED5B5B';
const tileColor = '#EEEEEE';
const wallColor = '#2E2E2E';
const coinColor = '#4476C6';

// 키보드 입력 이벤트 처리
function keyDownEventHandler(e: KeyboardEvent) {
  // up
  if (e.code === 'ArrowUp' && direction !== 1) direction = 0;
  // down
  else if (e.code === 'ArrowDown' && direction !== 0) direction = 1;
  // left
  else if (e.code === 'ArrowLeft' && direction !== 3) direction = 2;
  // right
  else if (e.code === 'ArrowRight' && direction !== 2) direction = 3;
}

// 보드판 표시
function drawBoard() {
  let boardTag = '<table border=0>';
  for (let i = 0; i < MY; i += 1) {
    boardTag += '<tr>';
    for (let j = 0; j < MX; j += 1) {
      boardTag += `<td id="${i} ${j}"></td>`;
    }
    boardTag += '</tr>';
  }
  boardTag += '</table>';
  document.write(boardTag);
}

// 벽 표시
function drawWall() {
  const wallCell = [];
  for (let i = 0; i < MY; i += 1) wallCell.push([i, 0]);
  for (let i = 0; i < MY; i += 1) wallCell.push([i, MX - 1]);
  for (let i = 0; i < MX; i += 1) wallCell.push([0, i]);
  for (let i = 0; i < MX; i += 1) wallCell.push([MY - 1, i]);
  for (let i = 0; i < wallCell.length; i += 1) {
    const wy = wallCell[i][0];
    const wx = wallCell[i][1];
    const wallElement = document.getElementById(`${wy} ${wx}`);
    if (wallElement instanceof HTMLElement) {
      wallElement.style.background = wallColor;
      wallElement.style.borderRadius = '1.5px';
    }
  }
}

// 뱀 표시
function setSnake(sy: number, sx: number) {
  snakeQueue.push([sy, sx]);
  const el = document.getElementById(`${sy} ${sx}`);
  if (el instanceof HTMLElement) {
    el.style.background = snakeColor;
  }
}

function removeSnake() {
  const ty = snakeQueue[0][0];
  const tx = snakeQueue[0][1];
  snakeQueue.shift();
  const el = document.getElementById(`${ty} ${tx}`);
  if (el instanceof HTMLElement) {
    el.style.background = tileColor;
  }
}

// 뱀 충돌 관련 함수
function isInQueue(fy: number, fx: number) {
  const p = [fy, fx];
  for (let i = 0; i < snakeQueue.length; i += 1) {
    if (snakeQueue[i][0] === p[0] && snakeQueue[i][1] === p[1]) {
      return true;
    }
  }
  return false;
}

function isCollapsed(fy: number, fx: number) {
  if (isInQueue(fy, fx)) return true;
  return false;
}

function isInvalidMove(fy: number, fx: number) {
  return fy === 0 || fy === MY - 1 || fx === 0 || fx === MX - 1 || isCollapsed(y, x);
}

// 동전 생성 및 충돌
function setCoin() {
  do {
    const rand = Math.random() * ((MY - 3) * (MX - 3));
    cy = Math.round(rand / (MX - 3) + 1);
    cx = Math.round((rand % (MX - 3)) + 1);
  } while (isInQueue(cy, cx));
  const coinElement = document.getElementById(`${cy} ${cx}`);
  if (coinElement instanceof HTMLElement) {
    coinElement.style.background = coinColor;
    coinElement.style.borderRadius = '6px';
  }
}

function isCoin() {
  return y === cy && x === cx;
}

function showPlus() {
  const plusedScore = 100 * (snakeQueue.length - 1);
  const plusElement = document.getElementById('plus');
  if (plusElement instanceof HTMLElement) {
    plusElement.innerHTML = `     +${plusedScore}`;
    setTimeout(() => {
      plusElement.innerHTML = '';
    }, 500);
  }
}

// 점수 처리 및 표시
function meetCoin() {
  if (isCoin()) {
    score += 100 * (snakeQueue.length - 1);
    setCoin();
    showPlus();
    const el = document.getElementById(`${y} ${x}`);
    if (el instanceof HTMLElement) {
      el.style.borderRadius = '3px';
    }
  } else {
    removeSnake();
    score += snakeQueue.length;
  }
}

// 점수 반영
function scoring() {
  const scoreElement = document.getElementById('score');
  if (scoreElement instanceof HTMLElement) {
    scoreElement.innerHTML = `${score}`;
  }
}

// 게임 오버
function gameover() {
  alert(`[Game Over]\nScore: ${score}`);
  clearInterval(keepMove);
  window.location.reload();
}

// 뱀 조작
function move(snakeDirection: number) {
  switch (snakeDirection) {
    case 0:
      y -= 1;
      break;
    case 1:
      y += 1;
      break;
    case 2:
      x -= 1;
      break;
    case 3:
      x += 1;
      break;
    default:
      return;
  }
  if (isInvalidMove(y, x)) {
    gameover();
  }
  setSnake(y, x);
  meetCoin();
  scoring();
}

// 초기 설정
function initSnake() {
  window.addEventListener('keydown', keyDownEventHandler);
  drawBoard();
  drawWall();
  y = MY / 2;
  x = MX / 2;
  setSnake(y, x);
  setCoin();
  score = 0;
  direction = -1;
  speed = 75;
  keepMove = setInterval(() => move(direction), speed);
}

initSnake();
