'use strict';

const flipTable = {
    "a": "ɐ",
    "b": "q",
    "c": "ɔ",
    "d": "p",
    "e": "ǝ",
    "f": "ɟ",
    "g": "ƃ",
    "h": "ɥ",
    "i": "ı",
    "j": "ɾ",
    "k": "ʞ",
    "l": "ן",
    "m": "ɯ",
    "n": "u",
    "o": "o",
    "p": "d",
    "q": "b",
    "r": "ɹ",
    "s": "s",
    "t": "ʇ",
    "u": "n",
    "v": "ʌ",
    "w": "ʍ",
    "x": "x",
    "y": "ʎ",
    "z": "z",
    ".": "˙",
    "[": "]",
    "(": ")",
    "{": "}",
    "?": "¿",
    "!": "¡",
    "'": ",",
    "<": ">",
    "_": "‾",
    "\"": "„",
    "\\": "/",
    "/": "\\",
    ";": "؛",
    "‿": "⁀",
    "⁅": "⁆",
    "∴": "∵",
    "1": "Ɩ",
    "Ɩ": "1",
    "2": "ᄅ",
    "ᄅ": "2",
    "3": "Ɛ",
    "Ɛ": "3",
    "4": "ㄣ",
    "ㄣ": "4",
    "5": "ϛ",
    "ϛ": "5",
    "6": "9",
    "7": "ㄥ",
    "9": "6",
    "?": "¿",
    "¿": "?",
    "!": "¡",
    "¡": "!",
    "&": "⅋"
};

const flippers = [
  "(╯°□°）╯",
  "(┛◉Д◉)┛",
  "(ﾉ≧∇≦)ﾉ",
  "(ノಠ益ಠ)ノ",
  "(╯ರ ~ ರ）╯",
  "(┛ಸ_ಸ)┛",
  "(ﾉ´･ω･)ﾉ ",
  "(ノಥ,_｣ಥ)ノ"
]

module.exports = class Flip extends BaseModule {
  handle(data) {
    if (data.cmd === "unflip") {
      this.bot.postMessage(
        data.channel, 
        `┬─${data.user_text.toLowerCase()}─┬◡ﾉ(° -°ﾉ)`
      );
      return;
    }


    this.bot.postMessage(
      data.channel, 
      this.getFlippedString(data.user_text.toLowerCase())    
    );  
  }


  getFlippedString(text) {
  	const chars = text.split('').reverse();
  	let output = "";

  	chars.forEach(char => {
      if (flipTable[char]) {
        output += flipTable[char];  
      } else {
        console.error(`Unsupported flip char: ${char}`);
      }
  		
  	});

    const flipper = flippers[Math.floor(Math.random() * flippers.length)]

    return `${flipper}︵ ┻━${output}━┻`  	
  }

  aliases() {
    return ['unflip'];
  }

  help() {
    return "Usage: `?flip <text>` or `?unflip <text>`";
  }
};
