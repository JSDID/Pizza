document.querySelector('.button').onclick = () => {
  const rightBlock = document.querySelector('.right');
  const statusRB = rightBlock.getAttribute('data-status');
  const button = document.querySelector('.button');
  const leftBlock = document.querySelector('.left-block');
  if (statusRB === '1') {
    rightBlock.style.width = '0px';
    rightBlock.setAttribute('data-status','0');
    button.classList.remove('button-open');
    leftBlock.classList.remove('left-open');
  } else {
    rightBlock.style.width = '400px';
    rightBlock.setAttribute('data-status','1');
    button.classList.add('button-open');
    leftBlock.classList.add('left-open');
  }
}