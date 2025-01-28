const NUM = '0123456789';

export function createIdNumber() {
  // Create an array of 11 random numbers between 0-255
  const rnd = new Uint8Array(11);
  crypto.getRandomValues(rnd);

  const value = new Array(11);
  const charsLength = NUM.length;

  for (let i = 0; i < value.length; i++) {
    if (i === 5) {
      value[5] = '-';
    } else {
      value[i] = NUM[rnd[i] % charsLength];
    }
  }

  return value.join('');
}
