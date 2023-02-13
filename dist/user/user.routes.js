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
        return this.router;
    }
}
exports.UserRotes = UserRotes;
