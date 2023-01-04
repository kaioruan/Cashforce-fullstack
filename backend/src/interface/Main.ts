export default interface Order {
  id: number;
  nNF: string;
  emissionDate: string;
  value: string;
  orderStatusBuyer: string;
  buyer: {
    name: string;
  };

  provider: {
    name: string;
    tradingName: string;
    cnpj: {
      number: string;
    };
  };
}
