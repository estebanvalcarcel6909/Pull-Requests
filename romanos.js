function convertToRoman(num = 560) {
  if (num < 1 || num > 3999) {
    return "El número debe estar entre 1 y 3999";
  }

  const romanMapping = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];

  let result = "";

  for (const { value, symbol } of romanMapping) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}


console.log(convertToRoman()); // Imprime: D
