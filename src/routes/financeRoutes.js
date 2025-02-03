const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getFinances,
  createFinance,
  updateFinance,
  deleteFinance,
  filterFinance,
  getFinanceSummary,
  getCategoryStats
} = require('../controllers/financeController');

router.get('/', protect, getFinances);

router.get("/filter", protect, filterFinance);

router.get("/summary", protect, getFinanceSummary);

router.get("/category-stats", protect, getCategoryStats);

router.post('/', protect, createFinance);

router.put('/:id', protect, updateFinance);

router.delete('/:id', protect, deleteFinance);

module.exports = router;