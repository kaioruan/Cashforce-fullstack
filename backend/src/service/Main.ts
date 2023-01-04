import Order from '../database/models/Orders';
import Provider from '../database/models/Providers';
import Buyer from '../database/models/Buyers';
import Cnpj from '../database/models/Cnpjs';
import NF_INTERFACE from '../interface/Main';

class MainService {
  private order = Order;

  public getAllNF = async (): Promise<NF_INTERFACE[]> => {
    const response = await this.order.findAll({
      include: [{
        model: Buyer, as: 'buyer', attributes: ['name'],
      }, {
        model: Provider,
        as: 'provider',
        attributes: ['name', 'tradingName'],
        include: [{ model: Cnpj, as: 'cnpj', attributes: [['cnpj', 'number']] }],
      }],
      attributes: ['id', 'nNf', 'emissionDate', 'value', 'orderStatusBuyer'],
    }) as unknown as NF_INTERFACE;
    return response as unknown as NF_INTERFACE[];
  };
}

export default MainService;
