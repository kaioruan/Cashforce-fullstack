import { DataTypes, Model } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs';

class Buyer extends Model {
  id!: number;
  name!: string;
  tradingName!: string;
  cashforceTax!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: string;
  responsiblePhone!: string;
  responsibleMobile!: string;
  website!: string;
  postalCode!: string;
  address!: string;
  number!: string;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: number;
  confirm!: boolean;
  email!: string;
}

Buyer.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tradingName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cashforceTax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibleEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsiblePosition: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsiblePhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  responsibleMobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  complement: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  situation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  situationDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  confirm: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'cnpjs',
      key: 'id',
    },
  },
}, {
  sequelize: db,
  modelName: 'buyers',
  underscored: true,
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});
Buyer.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'buyers' });
Cnpj.hasMany(Buyer, { foreignKey: 'id', as: 'users' });

export default Buyer;