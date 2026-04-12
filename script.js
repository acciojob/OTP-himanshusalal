//your JS code here. If required.
code.addEventListener("input", (e) => {
  let value = e.target.value;

  // allow only 1 digit
  if (value.length > 1) {
    value = value[0];
    code.value = value;
  }

  // move to next input
  if (value !== "" && index < codes.length - 1) {
    codes[index + 1].focus();
  }
});