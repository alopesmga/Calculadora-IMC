function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  var imc = weight / (height * height);

  if (imc < 15.5) {
    console.log('Inválido');
    document.getElementById('imc-text').innerHTML = 'Inválido';
  } else if (imc >= 16 && imc < 16.9) {
    console.log('Muito abaixo do peso');
    document.getElementById('imc-text').innerHTML = 'Muito abaixo do peso';
  } else if (imc > 17 && imc < 18.4) {
    console.log('Abaixo do peso');
    document.getElementById('imc-text').innerHTML = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log('Peso normal');
    document.getElementById('imc-text').innerHTML = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    console.log('Acima do peso');
    document.getElementById('imc-text').innerHTML = 'Acima do peso';
  } else if (imc >= 30 && imc < 34.9) {
    document.getElementById('imc-text').innerHTML = 'Obesidade grau I';
    console.log('Obesidade grau I');
    document.getElementById('imc-text').innerHTML = 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    console.log('Obesidade grau II');
    document.getElementById('imc-text').innerHTML = 'Obesidade grau II';
  } else {
    console.log('Obesidade grau III');
    document.getElementById('imc-text').innerHTML = 'Obesidade grau III';
  }
  return imc;
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcText = document.querySelector('#imc-text');

  console.log(imcResult);
  console.log(imcText);

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  imcResult.textContent = imc;
}

start();
