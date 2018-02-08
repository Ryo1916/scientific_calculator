$(document).ready(function(){
  var firstnum = 0;
  var secondnum = 0;
  var currentnum = 0;
  var lastnum = 0;
  var operator;
  var status = 0;
  var memory = 0;
  var result = 0;

  var checkFirstnum = 0;
  var checkOpe = 0;
  var checkSecnum = 0;
  var checkMinus = 0;
  var checkFunc = 0;
  var changeToRad = 0;
  var checkTotal = 0;

  var i = 0;
  var temp = 0;

  $('.num, #point').click(function(){
    if (status == 0) {
      currentnum = $(this).val();
      $('#firstnum').append(currentnum);
      firstnum = $('#firstnum').text();
      checkFirstnum = 1;
    } else {
      currentnum = $(this).val();
      $('#secnum').append(currentnum);
      secondnum = $('#secnum').text();
      checkSecnum = 1;
    }
  });

  $('.minus').click(function(){
    if (status == 0 && checkMinus == 0) {
      if (currentnum == 0) {
        alert("Please enter the first number!");
      } else {
        firstnum = firstnum * -1;
        $('#firstnum').text(firstnum);
        checkMinus = 1;
      }
    } else if (status == 0 && checkMinus == 1) {
      firstnum = firstnum * -1;
      $('#firstnum').text(firstnum);
      checkMinus = 0;
    }
    if (status == 1 && checkMinus == 0) {
      if (currentnum == 0) {
        alert("Please enter the second number!");
      } else {
        secondnum = secondnum * -1;
        $('#secnum').text(secondnum);
        checkMinus = 1;
      }
    // currentnum = "-";
    // $('#secnum').prepend(currentnum);
    // checkMinus = 1;
    } else if (status == 1 && checkMinus == 1) {
      if (currentnum == 0) {
        alert("Please enter the second number!");
      } else {
        secondnum = secondnum * -1;
        $('#secnum').text(secondnum);
        checkMinus = 0;
      }
      // currentnum = currentnum.substring(1, currentnum.length);
      // $('#secnum').text(currentnum);
      // checkMinus = 0;
    }
  });

  $('.percent').click(function(){
    if (checkFirstnum == 0) {
      $('#err1').text("★Please enter !");
    }
    if (checkFirstnum == 1 && checkTotal == 0) {
      operator = $(this).val();
      $('#operate').text(operator);
      lastnum = $('#firstnum').text();
      result = lastnum * 0.01;
      $('#total').text(result).toFixed(2);
    } else if (checkTotal == 1) {
      result = result * 0.01;
      $('#total').text(result).toFixed(2);
    }
  });

  $('.operator').click(function(){
    if (checkFirstnum == 0) {
      $('#operate').text("");
      $('#err1').text("★Please enter !");
    }
    if (checkFirstnum == 1) {
      operator = $(this).val();
      $('#operate').text(operator);
      lastnum = $('#firstnum').text();
      currentnum = 0;
      checkOpe = 1;
      status=1;
    }
  });

  $('#mc').click(function(){
    memory = 0;
    $('#mr').css({'border':'1px solid white'});
  });

  $('#mplus').click(function(){
    $('#mr').css({'border':'3px solid black'});
    memory += result;
    if (checkTotal == 1) {
      firstnum = 0;
      secondnum = 0;
      currentnum = 0;
      lastnum = 0;
      status = 0;
      checkFirstnum = 0;
      checkOpe = 0;
      checkSecnum = 0;
      checkTotal = 0;
      $('#firstnum').text("");
      $('#err1').text("");
      $('#operate').text("");
      $('#err2').text("");
      $('#secnum').text("");
      $('#err3').text("");
      $('#total').text("");
    }
  });

  $('#mminus').click(function(){
    $('#mr').css({'border':'3px solid black'});
    memory -= result;
    if (checkTotal == 1) {
      firstnum = 0;
      secondnum = 0;
      currentnum = 0;
      lastnum = 0;
      status = 0;
      checkFirstnum = 0;
      checkOpe = 0;
      checkSecnum = 0;
      checkTotal = 0;
      $('#firstnum').text("");
      $('#err1').text("");
      $('#operate').text("");
      $('#err2').text("");
      $('#secnum').text("");
      $('#err3').text("");
      $('#total').text("");
    }
  });

  $('#mr').click(function(){
    $('#total').text(memory).toFixed(2);
  });

  $('#x2').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = firstnum * firstnum;
    } else if (checkTotal == 1) {
      result = result * result;
    }
    $('#total').text(result);
  });

  $('#x3').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = firstnum * firstnum * firstnum;
    } else if (checkTotal == 1) {
      result = result * result * result;
    }
    $('#total').text(result);
  });

  $('#ex').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.exp(firstnum);
    } else if (checkTotal == 1) {
      result = Math.exp(result);
    }
    $('#total').text(result);
  });

  $('#yx').click(function(){

  });

  $('#10x').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = 1;
      while (firstnum != 0) {
        result = result * 10;
        --firstnum;
      }
    } else if (checkTotal == 1) {
      temp = result;
      result = 1;
      while (temp != 0) {
        result = result * 10;
        --temp;
      }
    }
    $('#total').text(result);
  });

  $('#2x').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = 1;
      while (firstnum != 0) {
        result = result * 2;
        --firstnum;
      }
    } else if (checkTotal == 1) {
      temp = result;
      result = 1;
      while (temp != 0) {
        result = result * 2;
        --temp;
      }
    }
    $('#total').text(result);
  });

  $('#fraction').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = 1 / firstnum;
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = 1 / result;
    }
    $('#total').text(result);
  });

  $('#route2x').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.sqrt(firstnum);
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = Math.sqrt(result);
    }
    $('#total').text(result);
  });

  $('#route3x').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.pow(firstnum, 1/3);
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = Math.pow(result, 1/3);
    }
    $('#total').text(result);
  });

  $('#ln').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.log(firstnum);
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = Math.log(result);
    }
    $('#total').text(result);
  });

  $('#logy').click(function(){
    if (checkFirstnum == 0) {
      $('#operate').text("");
      $('#err1').text("★Please enter !");
    }
    if (checkFirstnum == 1) {
      operator = "logy";
      $('#operate').text(operator);
      lastnum = $('#firstnum').text();
      currentnum = 0;
      checkOpe = 1;
      status=1;
    }
  });

  $('#log10').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.log10(firstnum);
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = Math.log10(result);
    }
    $('#total').text(result);
  });

  $('#log2').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = Math.log2(firstnum);
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      result = Math.log2(result);
    }
    $('#total').text(result);
  });

  $('#factorial').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      result = 1;
      for (i = 1; i <= firstnum; i++) {
        result *= i;
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      temp = result;
      result = 1;
      for (i = 1; i <= temp; i++) {
        result *= i;
      }
    }
    $('#total').text(result);
  });

  // Converts from radians to degrees.
  Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
  };

  // Converts from degrees to radians.
  Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };

  $('#sin').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.sin(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.sin(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.sin(result);
      } else {
        result = Math.radians(result);
        result = Math.sin(result);
      }
    }
    $('#total').text(result);
  });

  $('#asin').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.asin(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.asin(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.asin(result);
      } else {
        result = Math.radians(result);
        result = Math.asin(result);
      }
    }
    $('#total').text(result);
  });

  $('#cos').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.cos(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.cos(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.cos(result);
      } else {
        result = Math.radians(result);
        result = Math.cos(result);
      }
    }
    $('#total').text(result);
  });

  $('#acos').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.acos(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.acos(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.acos(result);
      } else {
        result = Math.radians(result);
        result = Math.acos(result);
      }
    }
    $('#total').text(result);
  });

  $('#tan').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.tan(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.tan(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.tan(result);
      } else {
        result = Math.radians(result);
        result = Math.tan(result);
      }
    }
    $('#total').text(result);
  });

  $('#atan').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.atan(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.atan(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.atan(result);
      } else {
        result = Math.radians(result);
        result = Math.atan(result);
      }
    }
    $('#total').text(result);
  });

  $('#e').click(function(){
    if (status == 0) {
      currentnum = Math.E;
      $('#firstnum').text(currentnum);
      firstnum = $('#firstnum').text();
      checkFirstnum = 1;
    } else {
      currentnum = Math.E;
      $('#secnum').text(currentnum);
      secondnum = $('#secnum').text();
      checkSecnum = 1;
    }
  });

  $('#ee').click(function(){
    // 5 EE 12 = 5 * 10^12
    if (checkFirstnum == 0) {
      $('#operate').text("");
      $('#err1').text("★Please enter !");
    }
    if (checkFirstnum == 1) {
      operator = "EE";
      $('#operate').text(operator);
      lastnum = $('#firstnum').text();
      currentnum = 0;
      checkOpe = 1;
      status=1;
    }
  });

  $('#rad').click(function(){
    $('#rad').hide();
    $('#deg').show();
    changeToRad = 1;
  });

  $('#deg').click(function(){
    $('#deg').hide();
    $('#rad').show();
    changeToRad = 0;
  });

  $('#sinh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.sinh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.sinh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.sinh(result);
      } else {
        result = Math.radians(result);
        result = Math.sinh(result);
      }
    }
    $('#total').text(result);
  });

  $('#asinh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.asinh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.asinh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.asinh(result);
      } else {
        result = Math.radians(result);
        result = Math.asinh(result);
      }
    }
    $('#total').text(result);
  });

  $('#cosh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.cosh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.cosh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.cosh(result);
      } else {
        result = Math.radians(result);
        result = Math.cosh(result);
      }
    }
    $('#total').text(result);
  });

  $('#acosh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.acosh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.acosh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.acosh(result);
      } else {
        result = Math.radians(result);
        result = Math.acosh(result);
      }
    }
    $('#total').text(result);
  });

  $('#tanh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.tanh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.tanh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.tanh(result);
      } else {
        result = Math.radians(result);
        result = Math.tanh(result);
      }
    }
    $('#total').text(result);
  });

  $('#atanh').click(function(){
    if (checkFirstnum == 1 && checkTotal == 0) {
      if (changeToRad == 1) {
        result = Math.atanh(firstnum);
      } else {
        firstnum = Math.radians(firstnum);
        result = Math.atanh(firstnum);
      }
    } else if (checkFirstnum == 1 && checkTotal == 1) {
      if (changeToRad == 1) {
        result = Math.atanh(result);
      } else {
        result = Math.radians(result);
        result = Math.atanh(result);
      }
    }
    $('#total').text(result);
  });

  $('#pi').click(function(){
    if (status == 0) {
      currentnum = Math.PI;
      $('#firstnum').text(currentnum);
      firstnum = $('#firstnum').text();
      checkFirstnum = 1;
    } else {
      currentnum = Math.PI;
      $('#secnum').text(currentnum);
      secondnum = $('#secnum').text();
      checkSecnum = 1;
    }
  });

  $('#rand').click(function(){
    if (status == 0) {
      currentnum = Math.random();
      $('#firstnum').text(currentnum);
      firstnum = $('#firstnum').text();
      checkFirstnum = 1;
    } else {
      currentnum = Math.random();
      $('#secnum').text(currentnum);
      secondnum = $('#secnum').text();
      checkSecnum = 1;
    }
  });

  $('.ac').click(function(){
    status = 0;
    lastnum = 0;
    currentnum = 0;
    checkFirstnum = 0;
    checkOpe = 0;
    checkSecnum = 0;
    checkTotal = 0;
    $('#firstnum').text("");
    $('#err1').text("");
    $('#operate').text("");
    $('#err2').text("");
    $('#secnum').text("");
    $('#err3').text("");
    $('#total').text("");
  });

  $('#2nd').click(function(){
    if (checkFunc == 0) {
      // change function key
      $('#ex').hide();
      $('#yx').show();
      $('#10x').hide();
      $('#2x').show();
      $('#ln').hide();
      $('#logy').show();
      $('#log10').hide();
      $('#log2').show();
      $('#sin').hide();
      $('#asin').show();
      $('#cos').hide();
      $('#acos').show();
      $('#tan').hide();
      $('#atan').show();
      $('#sinh').hide();
      $('#asinh').show();
      $('#cosh').hide();
      $('#acosh').show();
      $('#tanh').hide();
      $('#atanh').show();
      checkFunc = 1;
    } else if (checkFunc == 1) {
      // change function key
      $('#yx').hide();
      $('#ex').show();
      $('#2x').hide();
      $('#10x').show();
      $('#logy').hide();
      $('#ln').show();
      $('#log2').hide();
      $('#log10').show();
      $('#asin').hide();
      $('#sin').show();
      $('#acos').hide();
      $('#cos').show();
      $('#atan').hide();
      $('#tan').show();
      $('#asinh').hide();
      $('#sinh').show();
      $('#acosh').hide();
      $('#cosh').show();
      $('#atanh').hide();
      $('#tanh').show();
      checkFunc = 0;
    }
  });

  $('.result').click(function(){
    if (checkFirstnum == 0) {
      $('#err1').text("★Please enter !");
      $('#err2').text("★Please enter !");
      $('#err3').text("★Please enter !");
    } else if (checkOpe == 0) {
      $('#err1').text("");
      $('#err2').text("★Please enter !");
      $('#err3').text("★Please enter !");
    } else if (checkSecnum == 0) {
      $('#err1').text("");
      $('#err2').text("");
      $('#err3').text("★Please enter !");
    }

    currentnum = $('#secnum').text();
    if (currentnum != 0) {
      checkTotal = 1;
    }

    if (checkSecnum == 1) {
      if (operator == "+") {
        result = parseFloat(lastnum) + parseFloat(currentnum);
      }
      else if (operator == "-") {
        result = lastnum - currentnum;
      }
      else if (operator == "×") {
        result = lastnum * currentnum;
      }
      else if (operator == "÷") {
        result = lastnum / currentnum;
      }
      else if (operator == "x^y") {
        result = lastnum;
        for (i = 1; i < currentnum; i++) {
          result = result * lastnum;
        }
      }
      else if (operator == "y√x") {
        result = Math.pow(lastnum, 1/currentnum);
      }
      else if (operator == "EE") {
        temp = 1;
        for (i = 0; i < currentnum; i++) {
          temp *= 10;
        }
        result = lastnum * temp;
      }
      else if (operator == "logy") {
        result = Math.log(lastnum) / Math.log(currentnum);
      }
      $('#total').text(result).toFixed(2);
    }

    if (checkTotal == 1) {
      $('#err1').text("");
      $('#err2').text("");
      $('#err3').text("");
    }
  });
});
