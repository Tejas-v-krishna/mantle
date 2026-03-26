import prisma from '../db.js';

/**
 * Get all inventory items
 */
export const getInventory = async (req, res) => {
  try {
    const items = await prisma.inventoryItem.findMany({
      where: { orgId: req.orgId },
      include: {
        supplier: {
          select: { id: true, name: true }
        }
      },
      orderBy: { name: 'asc' }
    });

    res.json({
      success: true,
      data: items
    });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch inventory'
    });
  }
};

/**
 * Update stock level
 */
export const updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const item = await prisma.inventoryItem.update({
      where: { 
        id,
        orgId: req.orgId 
      },
      data: { quantity: parseInt(quantity) }
    });

    res.json({
      success: true,
      data: item
    });
  } catch (error) {
    console.error('Error updating stock:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update stock'
    });
  }
};
