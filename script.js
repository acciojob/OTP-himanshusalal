//your JS code here. If required.
code.addEventListener("input", (e) => {
  let value = e.target.value;

  // allow only digits
  value = value.replace(/[^0-9]/g, "");

  // keep only 1 digit
  value = value.slice(0, 1);

  code.value = value;

  if (value && index < codes.length - 1) {
    codes[index + 1].focus();
  }
});[index + 1].focus();
  }
});