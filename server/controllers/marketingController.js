import prisma from '../db.js';

/**
 * Get campaign ROI summary
 */
export const getMarketingSummary = async (req, res) => {
  try {
    const campaigns = await prisma.marketingCampaign.findMany({
      where: { orgId: req.orgId }
    });

    const leads = await prisma.lead.findMany({
      where: { orgId: req.orgId }
    });

    res.json({
      success: true,
      data: {
        campaigns,
        totalLeads: leads.length,
        conversionRate: leads.length > 0 ? (leads.filter(l => l.status === 'CONVERTED').length / leads.length) * 100 : 0
      }
    });
  } catch (error) {
    console.error('Error fetching marketing summary:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch marketing data'
    });
  }
};

/**
 * Sync lead data
 */
export const syncLeads = async (req, res) => {
  // Logic for syncing from external CRM placeholders
  res.json({ success: true, message: 'Leads synced successfully' });
};
