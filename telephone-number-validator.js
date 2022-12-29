"use strict";

function telephoneCheck(str) {
  const phoneRegex = /^(1\s|1|)?((\([0-9]{3}\))|[0-9]{3})(\-|\s)?([0-9]{3})(\-|\s)?([0-9]{4})$/;
  
  if(phoneRegex.test(str)==true) {
    return true;
  }
  else {
    return false;
  }
}

console.log(telephoneCheck("1 555-555-5555"));