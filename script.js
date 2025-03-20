function totalamount() {
    const subtotal = parseFloat(document.getElementById("BillAmount").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);
  
    if (isNaN(subtotal) || isNaN(tipPercent)) {
      document.getElementById("TipResult").textContent = "Please enter valid numbers for both fields.";
      return;
    }
  
    const TotalTipAmount = (subtotal * tipPercent) / 100;
    const Total = subtotal + TotalTipAmount;
  
    document.getElementById("TipResult").textContent = `Total Amount: $${Total.toFixed(2)}`;
}

function palidrome(){
    const pali_input = document.getElementById("string").value;
  const pali_reverse_input = pali_input.split("").reverse().join("");

  if (pali_input === pali_reverse_input) {
    document.getElementById("PaliResult").textContent = "Enter string is a palindrome!!!!";
  } else {
    document.getElementById("PaliResult").textContent = "Enter string is not a palindrome.";
  }
}

function StringReverse(){
    const stringinput = document.getElementById("stringreverse").value;
    const reverse = stringinput.split("").reverse().join("");
  document.getElementById("SrtingResult").textContent = `Output String: ${reverse}`;
}