"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
class Routes {
    constructor(router, controller) {
        this.router = router;
        this.controller = controller;
    }
    Routes() {
        this.router.post('/create', (req, res) => {
            this.controller.createUser(req, res);
        });
        this.router.get('/find/:id', (req, res) => {
            this.controller.findByIdUser(req, res);
        });
        this.router.delete('/delete/:id', (req, res) => {
            this.controller.deleteUser(req, res);
        });
        this.router.post('/authentication/:id', (req, res) => {
            this.controller.authentication(req, res);
        });
        return this.router;
    }
}
exports.Routes = Routes;
