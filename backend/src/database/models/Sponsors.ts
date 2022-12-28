import { DataTypes, Model } from 'sequelize';
import db from '.';
import Cnpj from './Cnpjs';

class Sponsor extends Model {
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
  bank!: string;
  bankAgency!: string;
  account!: string;
  phoneNumber!: string;
  situation!: string;
  situationDate!: string;
  cnpjId!: number;
  email!: string;
}

Sponsor.init({
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
  bank: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankAgency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  account: {
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
  modelName: 'sponsors',
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});
Sponsor.belongsTo(Cnpj);

export default Sponsor;
