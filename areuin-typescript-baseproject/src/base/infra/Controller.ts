import * as express from 'express';

export abstract class Controller {
  protected abstract executeImpl(
    req: express.Request,
    res: express.Response
  ): Promise<void | any>;

  public async execute(req: express.Request, res: express.Response): Promise<void> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      console.log('[Controller]: Uncaught controller error');
      console.log(err);
      this.fail(res, 'An unexpected server error occurred');
    }
  }

  //200
  public ok<T>(res: express.Response, dto?: T): express.Response {
    if (dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }
  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  //400
  public clientError(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 400, message ? message : 'Unknown Client Error');
  }
  public unauthorized(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 401, message ? message : 'Unauthorized');
  }
  public notFound(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 404, message ? message : 'Not found');
  }
  public conflict(res: express.Response, message?: string) {
    return Controller.jsonResponse(res, 409, message ? message : 'Conflict');
  }

  //500
  public fail(res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error.toString()
    });
  }

  public static jsonResponse(res: express.Response, code: number, message: string) {
    return res.status(code).json({ message });
  }
}
