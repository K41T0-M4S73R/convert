// function convert() {
//   var valor = parseInt(document.getElementById('convert').value);
//   console.log(valor);
//   if (!valor) {
//     console.log('entre com um valor');
//   }
// }

function convert() {
  const binary = document.getElementById('convert').value;
  if (binary === '') return alert('Please, enter a binary number');
  binary.split('').map((char) => {
    if (char !== '0' && char !== '1')
      return alert('Please, enter a binary number');
  });
  console.log(binary);
  const decimal = parseInt(binary, 2a);
  console.log(decimal);
  document.getElementById('result').value = decimal;
  return true;
}
