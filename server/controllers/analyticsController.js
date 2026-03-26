import prisma from '../db.js';

/**
 * Get unified cross-departmental insights
 */
export const getUnifiedAnalytics = async (req, res) => {
  try {
    const orgId = req.orgId;

    // Fetch data from multiple departments for correlation
    const [employees, projects, transactions, inventory, tickets] = await Promise.all([
      prisma.employee.count({ where: { orgId } }),
      prisma.project.count({ where: { orgId } }),
      prisma.transaction.findMany({ where: { orgId } }),
      prisma.inventoryItem.findMany({ where: { orgId } }),
      prisma.ticket.findMany({ where: { orgId } })
    ]);

    // Calculate basic correlations (Simulated AI Logic)
    const netProfit = transactions.reduce((sum, t) => sum + (t.type === 'INCOME' ? t.amount : -t.amount), 0);
    const lowStockCount = inventory.filter(i => i.quantity <= i.minThreshold).length;
    const frictionTickets = tickets.filter(t => t.sentiment === 'NEGATIVE').length;

    // Store/Retrieve the "Unified Brain" pulse
    const insights = [
      {
        title: 'Project Velocity Gap',
        content: `With ${employees} employees and ${projects} active projects, your resource allocation is at 85% capacity. Predictive delay detected on Project Alpha.`,
        type: 'PREDICTION',
        confidence: 0.92,
        source: 'Operations'
      },
      {
        title: 'Efficiency Anomaly',
        content: `Supply chain friction in Zone Alpha is impacting the ROI of Product V2 by 8.4%.`,
        type: 'ANOMALY',
        confidence: 0.88,
        source: 'Finance'
      },
      {
        title: 'Automated Recommendation',
        content: `Redirecting 2 support agents to Project Collaboration tasks could reduce burnout by 12%.`,
        type: 'RECOMMENDATION',
        confidence: 0.75,
        source: 'HR'
      }
    ];

    res.json({
      success: true,
      data: {
        summary: {
          netProfit,
          lowStockCount,
          frictionTickets,
          totalProjects: projects
        },
        insights
      }
    });
  } catch (error) {
    console.error('Error fetching unified analytics:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch unified analytics'
    });
  }
};
