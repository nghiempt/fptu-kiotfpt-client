// convert string to money
export const convertStringToMoney = (money: any) => {
  const number = parseInt(money, 10);
  if (isNaN(number)) {
    return 0
  }
  return number.toLocaleString('vi-VN').replace(/,/g, '.');
};

// limit string
export const limitString = (str: string, limit: any) => {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
};
