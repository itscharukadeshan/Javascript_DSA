/** @format */

// * Using regEx

const validateEmail = (emailString) => {
  const emailRegEx =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const result = emailRegEx.test(emailString);

  return result;
};

console.log(validateEmail("ddasd@aasda.com"));
console.log(validateEmail("NotEmailAddress.com"));

// * Using if checks

const validateEmailWithChecks = (email) => {
  if (email.indexOf("@") === -1) {
    return false;
  }

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) {
    return false;
  }

  const domainExtension = domain.split(".");
  if (domainExtension.length < 2 || domainExtension[1].length < 2) {
    return false;
  }

  return true;
};

console.log(validateEmailWithChecks("ddasd@aasda.com"));
console.log(validateEmailWithChecks("NotEmailAddress.com"));
