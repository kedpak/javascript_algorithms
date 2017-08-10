function palindrome(str) {
  // Good luck!
  

  var new_str = str.replace(/\s+/g, '').toLowerCase();

  console.log(new_str);
  var spec = ['-', '_', ',', '.', ')', '(', '\\', '/'];
  
  /*
  for (var i = 0; i < str.length; i++) {
    if (spec.includes(str[i])) {
      str = str.replace(str[i], "");
    }
  }
  */

  var arr = new_str.split('');
  
  var fil = arr.filter(function(me) {
       return me !== '_';
  });
  

  fil = fil.reverse();
  fil = fil.join('');
  
  
  if (fil === new_str) {
    return true;
  }
  return false;
}



palindrome("eye");

