import { DataTypes, Model } from 'sequelize';
import db from '.';
import Order from './Orders';

class OrderPoint extends Model {
  id!: number;
  nDup!: string;
  dVenc!: string;
  vDup!: string;
  availableToMarket!: boolean;
  orderId!: number;
}

OrderPoint.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dVenc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableToMarket: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'orders',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'orderpoints',
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});

OrderPoint.belongsTo(Order);
export default OrderPoint;
