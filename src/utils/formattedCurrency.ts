const formattedCurrency = (amount: number | string): string => {
  return Number(amount).toLocaleString('pt-BR', { 
    style: 'currency', currency: 'BRL' 
  });
}

export default formattedCurrency;