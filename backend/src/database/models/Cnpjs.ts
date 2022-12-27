import { DataTypes, Model } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  id!: number;
  cnpj!: string;
  companyType!: string;
}

Cnpj.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'cnpjs',
  underscored: true,
  timestamps: false,
  createdAt: true,
  updatedAt: true,
});

export default Cnpj;
