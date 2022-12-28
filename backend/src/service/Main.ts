import Order from '../database/models/Orders';
import Provider from '../database/models/Providers';
import Buyer from '../database/models/Buyers';
import Cnpj from '../database/models/Cnpjs';
import User from '../database/models/Users';

class MainService {
  private buyer = Buyer;
  private order = Order;
  private provider = Provider;
  private cnpj = Cnpj;
  private user = User;

  public getAllNF = async (): Promise<unknown> => {
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
    }) as unknown;
    return response;
  };
}

export default MainService;
