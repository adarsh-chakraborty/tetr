const express = require('express');
const _tetrCtrl = require("../controllers/tetrCtrl");
const router = express.Router();

const {validateInput, handleValidationErrors} = require("../middlewares/extraEdgeValidator");
router.post('/tetr', _tetrCtrl.postTetr);
router.post('/extraedge', validateInput, handleValidationErrors, _tetrCtrl.postExtraEdge);

module.exports = router;


