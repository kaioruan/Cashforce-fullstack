import { DataTypes, Model } from 'sequelize';
import db from '.';
import Order from './Orders';
import Sponsor from './Sponsors';

class Offer extends Model {
  id!: number;
  tax!: string;
  tariff!: string;
  adValorem!: string;
  float!: string;
  iof!: string;
  expiresIn!: string;
  paymentStatusSponsor!: boolean;
  paymentStatusProvider!: boolean;
  orderId!: number;
  sponsorId!: number;
}

Offer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  paymentStatusProvider: {
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
  sponsorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'sponsors',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'offers',
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});

Offer.belongsTo(Order);
Offer.belongsTo(Sponsor);
export default Offer;
