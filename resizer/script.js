"use strict";

const leftPane = document.querySelector(".js-left-field");
const rightPane = document.querySelector(".js-right-field");
const gutter = document.querySelector(".js-separator");
const block = document.querySelector('.js-fields');

function resizer(e) {

  block.addEventListener('mousemove', mousemove);
  window.addEventListener('mouseup', mouseup);

  const prevX = e.x;
  const leftPanel = leftPane.offsetWidth;
  const rightPanel = rightPane.offsetWidth;

  //A/B*100 - Формула процентного отношения двух чисел
  function mousemove(e) {
    const _100 = this.offsetWidth;
    const newX = prevX - e.x;
    const sizeLeftPane = ((leftPanel - newX) / _100) * 100;
    const sizeRightPane = ((rightPanel + newX) / _100) * 100;

    leftPane.style.width = sizeLeftPane + "%";
    leftPane.textContent = Math.round(sizeLeftPane) + "%";
    rightPane.style.width = sizeRightPane + "%";
    rightPane.textContent = Math.round(sizeRightPane) + "%";
  }

  function mouseup() {
    block.removeEventListener('mousemove', mousemove);
    window.removeEventListener('mouseup', mouseup);
  }

}


gutter.addEventListener('mousedown', resizer);
