const formatDate = (timeStamp: Date): string => {
  const date = new Date(timeStamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${`0${day}`.slice(-2)}/${`0${month}`.slice(-2)}/${year}`;
}; // TODO

export default formatDate;
