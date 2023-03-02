const express = require('express');
const router = express.Router();
const accountController = require('../controller/accountController')


router.post('/api/accounts',accountController.openAccount)
router.put('/api/accounts/:id/kyc',accountController.updateKyc)
router.put('/account/:accountId/deposit',accountController.depositMoney)
router.put('/account/:accountId/withdraw',accountController.withdrawMoney)
router.post('/account/:fromAccountId/transfer/:toAccountId',accountController.transferMoney)
router.post('/account/:toAccountId/receive',accountController.receiveMoney)
router.get('/account/:accountId/print-statement',accountController.printStatement)
router.delete('/account/:accountId',accountController.closeAccount)

module.exports = router