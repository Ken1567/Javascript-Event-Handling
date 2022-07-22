function convertToF() {
    let celsius = document.getElementById("ctof").value;
      let fahrenheit = (celsius * 9/5) + 32;
      document.getElementById("convert").innerHTML = fahrenheit + "°F";
    }