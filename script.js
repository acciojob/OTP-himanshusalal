//your JS code here. If required.
code.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value.length > 1) {
    code.value = value[0];
  }

  if (value && index < codes.length - 1) {
    codes[index + 1].focus();
  }
});