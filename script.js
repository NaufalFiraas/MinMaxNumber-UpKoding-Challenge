const input = document.getElementById('input');
const inputScreen = document.querySelector('.input-screen p span');
const outputMax = document.querySelector('.output-max p span');
const outputMin = document.querySelector('.output-min p span');
const button = document.querySelector('.btn-input');

button.addEventListener('click', () => {
  if (input.value == '') {
    return false;
  } else {
    const value = parseInt(input.value);
    inputScreen.innerHTML = value;
    outputMax.innerHTML = value.maxNum();
    outputMin.innerHTML = value.minNum();
  }
});

Number.prototype.maxNum = function () {
  const value = this.valueOf().toString();
  const arrValue = Array.from(value);
  if (arrValue[0] == '-') arrValue.shift();
  arrValue.sort((a, b) => b - a);
  return parseInt(arrValue[0]);
};

Number.prototype.minNum = function () {
  const value = this.valueOf().toString();
  const arrValue = Array.from(value);
  if (arrValue[0] == '-') arrValue.shift();
  arrValue.sort((a, b) => a - b);
  return parseInt(arrValue[0]);
};
