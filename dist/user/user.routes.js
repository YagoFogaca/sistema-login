"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRotes = void 0;
class UserRotes {
    constructor(userController, router) {
        this.userController = userController;
        this.router = router;
    }
    Routes() {
        this.router.post('/create-user', (req, res) => {
            this.userController.create(req, res);
        });
        this.router.get('/find-all', (req, res) => {
            this.userController.findAll(req, res);
        });
        this.router.get('/find/:id', (req, res) => {
            this.userController.findById(req, res);
        });
        this.router.delete('/delete/:id', (req, res) => {
            this.userController.delete(req, res);
        });
        return this.router;
    }
}
exports.UserRotes = UserRotes;
