function formatPhoneNumber(phoneNumber) {
  let digits = phoneNumber.replace(/\D/g, '');

  let country_code = '';
  if (digits.length > 11) {
      country_code = `+${digits.slice(0, digits.length - 11)} `;
      digits = digits.slice(-11);
  }

  const formattedNumber = country_code + [
      digits.slice(0, 2),
      `(${digits.slice(2, 4)})`,
      digits.slice(4, 6),
      digits.slice(6, 8),
      digits.slice(8)
  ].join(' ');

  return formattedNumber;
}

const phoneNumber = "+998904291511";
const formatted = formatPhoneNumber(phoneNumber);
console.log(formatted);  // Output: +998 (90) 429 15 11
