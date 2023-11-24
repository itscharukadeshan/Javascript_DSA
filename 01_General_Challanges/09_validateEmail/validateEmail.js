/** @format */

const validateEmail = (emailString) => {
  const emailRegEx =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  const result = emailRegEx.test(emailString);

  return result;
};

console.log(validateEmail("ddasd@aasda.com"));
console.log(validateEmail("NotEmailAddress.com"));
