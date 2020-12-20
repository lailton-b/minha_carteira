const formattedDate = (initialDate: string): string => {
  const date = new Date(initialDate);
  const day = date.getDate() < 10 
    ? '0' + date.getDate() 
    : date.getDate();

  const month = (date.getMonth() + 1) < 10 
  ? '0' + (date.getMonth() + 1)
  : (date.getMonth() + 1);

  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export default formattedDate;