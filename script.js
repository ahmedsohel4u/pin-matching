const pinNumber = document.getElementById('pin-number');
const userInput = document.getElementById('user-input');
const calContainer = document.getElementById('cal-container');
const submitBtn = document.getElementById('submit-btn');
const tryLeft = document.getElementById('try-left');

function generatePin() {
  const pin = String(Math.round(Math.random() * '10000'));
  if (pin.length === 4) {
    pinNumber.value = pin;
    return;
  } else {
    generatePin();
  }
};

calContainer.addEventListener('click', function (e) {
  if (isNaN(e.target.innerHTML)) {
    if (e.target.innerHTML === 'C') {
      userInput.value = '';
    } else if (e.target.innerHTML = '<') {
      const getValue = userInput.value.slice(0, -1);
      userInput.value = getValue;
    }
    return;
  }
  userInput.value += e.target.innerHTML;
});

submitBtn.addEventListener('click', function () {
  if (!(pinNumber.value && userInput.value)) {
    return;
  }
  document.getElementById('loading').style.display = 'flex';
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
  }, 2000);
  const success = document.getElementById('success');
  const fail = document.getElementById('fail');
  if (pinNumber.value === userInput.value) {
    setTimeout(() => {
      fail.style.display = 'none';
      success.style.display = 'inline-block';
    }, 3000);
  } else {
    setTimeout(() => {
      success.style.display = 'none';
      fail.style.display = 'inline-block';
      if (tryLeft.innerText > 0 && tryLeft.innerText <= 3) {
        tryLeft.innerText--;
      } else {
        alert('Too may attemp!. Please try sometime late');
        document.write('Please try sometime later!');
      }
    }, 3000);
  }
});