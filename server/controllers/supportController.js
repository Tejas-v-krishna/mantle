import prisma from '../db.js';

/**
 * Get all tickets
 */
export const getTickets = async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: { orgId: req.orgId },
      orderBy: { createdAt: 'desc' }
    });

    res.json({
      success: true,
      data: tickets
    });
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tickets'
    });
  }
};

/**
 * Create a new ticket with AI sentiment analysis
 */
export const createTicket = async (req, res) => {
  try {
    const { subject, description, priority } = req.body;

    // Simulate AI sentiment analysis
    const negativeKeywords = ['bad', 'angry', 'error', 'fail', 'broken', 'worst'];
    let sentiment = 'POSITIVE';
    if (negativeKeywords.some(word => description.toLowerCase().includes(word))) {
      sentiment = 'NEGATIVE';
    } else if (description.length > 100) {
      sentiment = 'NEUTRAL';
    }

    const ticket = await prisma.ticket.create({
      data: {
        subject,
        description,
        priority: priority || 'MEDIUM',
        sentiment,
        orgId: req.orgId
      }
    });

    res.status(201).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create ticket'
    });
  }
};
