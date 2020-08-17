"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    async execute(req, res) {
        try {
            await this.executeImpl(req, res);
        }
        catch (err) {
            console.log('[Controller]: Uncaught controller error');
            console.log(err);
            this.fail(res, 'An unexpected server error occurred');
        }
    }
    //200
    ok(res, dto) {
        if (dto) {
            res.type('application/json');
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    }
    created(res) {
        return res.sendStatus(201);
    }
    //400
    clientError(res, message) {
        return Controller.jsonResponse(res, 400, message ? message : 'Unknown Client Error');
    }
    unauthorized(res, message) {
        return Controller.jsonResponse(res, 401, message ? message : 'Unauthorized');
    }
    notFound(res, message) {
        return Controller.jsonResponse(res, 404, message ? message : 'Not found');
    }
    conflict(res, message) {
        return Controller.jsonResponse(res, 409, message ? message : 'Conflict');
    }
    //500
    fail(res, error) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        });
    }
    static jsonResponse(res, code, message) {
        return res.status(code).json({ message });
    }
}
exports.Controller = Controller;
