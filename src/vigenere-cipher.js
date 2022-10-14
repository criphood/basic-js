const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'ALPHABETonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'ALPHABETonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'ALPHABETonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'ALPHABETonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }

  encrypt(str, argument) {
    if (!str || !argument) throw new Error("Incorrect arguments!");

    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    str = str.toUpperCase();
    argument = argument.toUpperCase();

    while (argument.length < str.length) {
      argument += argument;
    }

    let encoded = '', counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (ALPHABET.includes(str[i])) {
        let newLetter = str.charCodeAt(i) + argument.charCodeAt(counter) - 65;
        if (newLetter > 90) {
          newLetter -= 26;
        }
        encoded += String.fromCharCode(newLetter);
        counter++;
      }

      else {
        encoded += str[i];
      }
    }

    if (this.isDirect === true || this.isDirect === undefined) {
      return encoded;
    }
    return encoded.split('').reverse().join('');
  }

  decrypt(str, argument) {
    if (!str || !argument) throw new Error("Incorrect arguments!");

    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    str = str.toUpperCase();
    argument = argument.toUpperCase();

    while (argument.length < str.length) {
      argument += argument;
    }

    let encoded = '', counter = 0;

    for (let i = 0; i < str.length; i++) {
      if (ALPHABET.includes(str[i])) {
        let newLetter = str.charCodeAt(i) - argument.charCodeAt(counter) + 65;
        if (newLetter < 65) {
          newLetter += 26;
        }
        encoded += String.fromCharCode(newLetter);
        counter++;
      }

      else {
        encoded += str[i];
      }
    }

    if (this.isDirect === true || this.isDirect === undefined) {
      return encoded;
    }
    return encoded.split('').reverse().join('');
  }
}

const cipher = new VigenereCipheringMachine();
cipher.decrypt('HSVD AJAL ^^', 'behappy');

module.exports = {
  VigenereCipheringMachine
};
