current_num = 0;
first_term = -1;
operation = "";
decimal_place = 0;
length = 0;
DIGIT_NUM = 14;

function calculate() {
  if (operation == "add") {
    return first_term + current_num;
  } else if (operation == "sub") {
    return first_term - current_num;
  } else if (operation == "mul") {
    return first_term * current_num;
  } else if (operation == "div") {
    return first_term / current_num;
  }
}

function input_display(number) {
  if (decimal_place < 0) {
    return number.toFixed(decimal_place * -1);
  } else {
    return number;
  }
}

function display(number) {
  if (
    number > Math.pow(10, DIGIT_NUM) ||
    number < Math.pow(10, DIGIT_NUM) * -1
  ) {
    return Math.round(number).toExponential(DIGIT_NUM - 5);
  } else {
    const total_length = (number + "").replace(".", "").length;
    if (total_length < DIGIT_NUM) {
      return number;
    } else {
      const int_length = number.toFixed(0).length;
      if (Math.sign(number) == -1) {
        return number.toFixed(DIGIT_NUM - (int_length - 1));
      } else {
        return number.toFixed(DIGIT_NUM - int_length);
      }
    }
  }
}

window.onload = function () {
  result = document.getElementById("result");
  document.getElementById("nine").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 9 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 9;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("eight").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 8 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 8;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("seven").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 7 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 7;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("six").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 6 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 6;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("five").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 5 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 5;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("four").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 4 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 4;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("three").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 3 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 3;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("two").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 2 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 2;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("one").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 1 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 1;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("zero").addEventListener("click", function () {
    if (length >= DIGIT_NUM) {
      return;
    }
    if (decimal_place < 0) {
      current_num = current_num + 0 * Math.pow(10, decimal_place);
      decimal_place = decimal_place - 1;
    } else {
      current_num = current_num * 10 + 0;
    }
    length += 1;
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("clear").addEventListener("click", function () {
    decimal_place = 0;
    current_num = 0;
    first_term = 0;
    operation = "";
    result.innerHTML = input_display(current_num);
  });
  document.getElementById("add-equal").addEventListener("click", function () {
    decimal_place = 0;
    length = 0;
    if (operation == "") {
      operation = "add";
      first_term = current_num;
      current_num = 0;
      result.innerHTML = display(current_num);
    } else {
      first_term = calculate();
      result.innerHTML = display(first_term);
      current_num = 0;
      operation = "add";
    }
  });

  document.getElementById("subtract").addEventListener("click", function () {
    decimal_place = 0;
    length = 0;
    if (operation != "") {
      current_num = calculate();
    }
    operation = "sub";
    first_term = current_num;
    current_num = 0;
    result.innerHTML = display(first_term);
  });

  document.getElementById("multiply").addEventListener("click", function () {
    decimal_place = 0;
    length = 0;
    if (operation != "") {
      current_num = calculate();
    }
    operation = "mul";
    first_term = current_num;
    current_num = 0;
    result.innerHTML = display(first_term);
  });

  document.getElementById("divide").addEventListener("click", function () {
    decimal_place = 0;
    length = 0;
    if (operation != "") {
      current_num = calculate();
    }
    operation = "div";
    first_term = current_num;
    current_num = 0;
    result.innerHTML = display(first_term);
  });

  document.getElementById("decimal").addEventListener("click", function () {
    if (decimal_place == 0) {
      decimal_place = -1;
      result.innerHTML = current_num + ".";
    }
  });
};
