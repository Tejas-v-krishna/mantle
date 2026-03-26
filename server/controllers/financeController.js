import prisma from '../db.js';

/**
 * Get ROI and financial summary
 */
export const getFinancialSummary = async (req, res) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { orgId: req.orgId }
    });

    const budgets = await prisma.budget.findMany({
      where: { orgId: req.orgId }
    });

    const totalIncome = transactions
      .filter(t => t.type === 'INCOME')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = transactions
      .filter(t => t.type === 'EXPENSE')
      .reduce((sum, t) => sum + t.amount, 0);

    const netProfit = totalIncome - totalExpense;
    const roi = totalIncome > 0 ? (netProfit / totalIncome) * 100 : 0;

    res.json({
      success: true,
      data: {
        totalIncome,
        totalExpense,
        netProfit,
        roi: parseFloat(roi.toFixed(2)),
        budgets
      }
    });
  } catch (error) {
    console.error('Error fetching financial summary:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch financial data'
    });
  }
};

/**
 * Add a transaction
 */
export const addTransaction = async (req, res) => {
  try {
    const { amount, type, category, description } = req.body;

    const transaction = await prisma.transaction.create({
      data: {
        amount: parseFloat(amount),
        type,
        category,
        description,
        orgId: req.orgId
      }
    });

    res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (error) {
    console.error('Error adding transaction:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add transaction'
    });
  }
};
