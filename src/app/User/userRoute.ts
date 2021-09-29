import user from "./userController"
import * as express from 'express'
const router :express.Router = express.Router();

router.get('/:userId/test', user.selectUser);

module.exports = router;