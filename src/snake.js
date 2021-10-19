"use strict";
let y;
let x; // player
let cy;
let cx; // coin
const MY = 20;
const MX = 34; // field size
let score;
let keepMove;
let direction; // 0 1 2 3 상 하 좌 우
let speed;
const snakeQueue = [];
const snakeColor = '#ED5B5B';
const tileColor = '#EEEEEE';
const wallColor = '#2E2E2E';
const coinColor = '#4476C6';
// 키보드 입력 이벤트 처리
function keyDownEventHandler(e) {
    if (e.keyCode === 38 && direction !== 1)
        direction = 0;
    // up
    else if (e.keyCode === 40 && direction !== 0)
        direction = 1;
    // down
    else if (e.keyCode === 37 && direction !== 3)
        direction = 2;
    // left
    else if (e.keyCode === 39 && direction !== 2)
        direction = 3; // right
}
document.onkeydown = keyDownEventHandler;
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
    for (let i = 0; i < MY; i += 1)
        wallCell.push(new Array(i, 0));
    for (let i = 0; i < MY; i += 1)
        wallCell.push(new Array(i, MX - 1));
    for (let i = 0; i < MX; i += 1)
        wallCell.push(new Array(0, i));
    for (let i = 0; i < MX; i += 1)
        wallCell.push(new Array(MY - 1, i));
    for (let i = 0; i < wallCell.length; i += 1) {
        const wy = wallCell[i][0];
        const wx = wallCell[i][1];
        document.getElementById(`${wy} ${wx}`).style.background = wallColor;
        document.getElementById(`${wy} ${wx}`).style.borderRadius = '1.5px';
    }
}
// 뱀 표시
function setSnake(sy, sx) {
    snakeQueue.push(new Array(sy, sx));
    const el = document.getElementById(`${sy} ${sx}`);
    if (el) {
        el.style.background = snakeColor;
    }
}
function removeSnake() {
    const ty = snakeQueue[0][0];
    const tx = snakeQueue[0][1];
    snakeQueue.shift();
    const el = document.getElementById(`${ty} ${tx}`);
    if (el) {
        el.style.background = tileColor;
    }
}
// 뱀 충돌 관련 함수
function isInQueue(fy, fx) {
    const p = new Array(fy, fx);
    for (let i = 0; i < snakeQueue.length; i += 1) {
        if (snakeQueue[i][0] === p[0] && snakeQueue[i][1] === p[1]) {
            return true;
        }
    }
    return false;
}
function isCollapsed(fy, fx) {
    if (isInQueue(fy, fx))
        return true;
    return false;
}
function isInvalidMove(fy, fx) {
    return fy === 0 || fy === MY - 1 || fx === 0 || fx === MX - 1 || isCollapsed(y, x);
}
// 동전 생성 및 충돌
function setCoin() {
    do {
        const rand = Math.random() * ((MY - 2) * (MX - 2));
        cy = Math.round(rand / (MX - 2) + 1);
        cx = Math.round((rand % (MX - 2)) + 1);
    } while (isInQueue(cy, cx));
    document.getElementById(`${cy} ${cx}`).style.background = coinColor;
    document.getElementById(`${cy} ${cx}`).style.borderRadius = '6px';
}
function isCoin() {
    return y === cy && x === cx;
}
function showPlus() {
    const plusedScore = 100 * (snakeQueue.length - 1);
    document.getElementById('plus').innerHTML = `     +${plusedScore}`;
    setTimeout(() => {
        document.getElementById('plus').innerHTML = '';
    }, 500);
}
// 점수 처리 및 표시
function meetCoin() {
    if (isCoin()) {
        score += 100 * (snakeQueue.length - 1);
        setCoin();
        showPlus();
        const el = document.getElementById(`${y} ${x}`);
        if (el) {
            el.style.borderRadius = '3px';
        }
    }
    else {
        removeSnake();
        score += snakeQueue.length;
    }
}
// 초기 설정
function initSnake() {
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
// 점수 반영 및 게임 오버
function scoring() {
    document.getElementById('score').innerHTML = `${score}`;
}
function gameover() {
    alert('[Game Over]\nScore: ' + score);
    initSnake();
    location.reload();
}
// 뱀 조작
function move(snakeDirection) {
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
initSnake();
