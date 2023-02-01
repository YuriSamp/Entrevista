export function convertCurrency(value: string) {
  const OutputValue = Number(value);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(OutputValue);
}
