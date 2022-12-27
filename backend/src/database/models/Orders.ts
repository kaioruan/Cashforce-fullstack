import { DataTypes, Model } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs';
import User from './Users';
import Buyer from './Buyers';
import Provider from './Providers';

class Order extends Model {
  id!: number;
  orderNfId!: string;
  orderNumber!: string;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: string;
  pdfFile!: string;
  emitedTo!: string;
  nNf!: string;
  cte!: string;
  value!: string;
  cnpjId!: number;
  userId!: number;
  buyerId!: number;
  providerId!: number;
  orderStatusBuyer!: string;
  orderStatusProvider!: string;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderFileName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  orderOriginalName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emissionDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pdfFile: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emitedTo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nNf: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cte: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'CTE',
  },
  value: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'cnpjs',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'buyers',
      key: 'id',
    },
  },
  providerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'providers',
      key: 'id',
    },
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryReceipt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cargoPackingList: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryCtrc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'orders',
  underscored: true,
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});
Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'providers' });
Order.belongsTo(User, { foreignKey: 'userId', as: 'users' });
Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyers' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'providers' });
Cnpj.hasMany(Order, { foreignKey: 'id', as: 'users' });
User.hasMany(Order, { foreignKey: 'id', as: 'users' });
Buyer.hasMany(Order, { foreignKey: 'id', as: 'buyers' });
Provider.hasMany(Order, { foreignKey: 'id', as: 'providers' });

export default Order;
