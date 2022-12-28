import { Request, Response } from 'express';
import MainService from '../service/Main';

class MainController {
  constructor(private mainService = new MainService()) {}

  public getAllNF = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.mainService.getAllNF();
    if (!result) {
      return res.status(404).json({ message: 'No NF found' });
    }
    return res.status(200).json(result);
  };
}

export default MainController;
