/** @format */

const validIp4 = (string) => {
  const octets = string.split(".");

  if (octets.length !== 4) {
    return false;
  }

  return octets.every((octet) => {
    const num = parseInt(octet);

    return num >= 0 && num <= 255 && octet === num.toString();
  });
};

console.log(validIp4("1.2.3.4"));

console.log(validIp4("111.222.333.444"));
