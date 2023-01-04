import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import MockReturn from './mock/Main';
import OrderModel from '../database/models/Orders';
import NF_INTERFACE from '../interface/Main';
chai.use(chaiHttp);
const { expect } = chai;

describe('Main', () => {
  it('should return all NF', async () => {
    const stub = sinon.stub(OrderModel, 'findAll').resolves(MockReturn as any);
    const response = await chai.request(app).get('/');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
    expect(response.body).to.have.length(3);
    stub.restore();
  });
});
