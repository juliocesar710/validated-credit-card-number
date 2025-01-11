function validateCreditCardNumber(cardNumber) {
  cardNumber = cardNumber.replace(/\D/g, "");

  const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    enroute: /^(2014|2149)\d{11}$/,
    jcb: /^(?:2131|1800|35\d{14})$/,
    voyager: /^8699[0-9]{11}$/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
    aura: /^50[0-9]{14,17}$/,
  };

  let matchedCard = null;
  for (let card in cardPatterns) {
    if (cardPatterns[card].test(cardNumber)) {
      matchedCard = card;
      break;
    }
  }

  if (!matchedCard) {
    return { isValid: false, cardType: null };
  }

  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  const isValidLuhn = sum % 10 === 0;
  return { isValid: isValidLuhn, cardType: matchedCard };
}

function printValidationResult(cardNumber) {
  const result = validateCreditCardNumber(cardNumber);
  if (result.isValid) {
    console.log(`\nNúmero do cartão: ${cardNumber}
Bandeira: ${result.cardType.toUpperCase()}
Validade: Válido.\n`);
  } else {
    console.log(`Card Number: ${cardNumber} is invalid.`);
  }
}

printValidationResult("4916492491822544"); // Visa
printValidationResult("5587420296270408"); // MasterCard
printValidationResult("349938261252895"); // American Express
printValidationResult("6011668988982318"); // Discover
printValidationResult("30092561109688"); // Diners Club
printValidationResult("214987790444384"); // EnRoute
printValidationResult("3537104410190835"); // JCB
printValidationResult("869900557349405"); // Voyager
printValidationResult("6062822098998478"); // Hipercard
printValidationResult("5096318215866153"); // Aura
