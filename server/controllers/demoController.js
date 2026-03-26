import DemoRequest from '../models/DemoRequest.js';

export const submitDemoRequest = async (req, res) => {
  try {
    const { name, email, company, date, time, timezone, services, additionalInfo } = req.body;

    // Basic validation
    if (!name || !email || !company || !date || !time || !services || services.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Create combined datetime
    const demoDateTime = new Date(`${date}T${time}:00`);

    // Check for existing pending request from same email in last 7 days
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const existingRequest = await DemoRequest.findOne({
      email,
      status: 'pending',
      submittedAt: { $gte: sevenDaysAgo }
    });

    if (existingRequest) {
      return res.status(409).json({
        success: false,
        message: 'You already have a pending demo request. Our team will contact you shortly.'
      });
    }

    const demoRequest = new DemoRequest({
      name,
      email,
      company,
      date: demoDateTime,
      time,
      timezone,
      services,
      additionalInfo: additionalInfo || '',
      status: 'pending'
    });

    await demoRequest.save();

    console.log(`Demo request submitted: ${name} from ${company}`);

    res.status(201).json({
      success: true,
      message: 'Demo request submitted successfully!',
      data: {
        requestId: demoRequest._id,
        estimatedResponseTime: '24 hours',
        submittedAt: demoRequest.submittedAt
      }
    });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    
    // Handle duplicate key errors (if any)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'A request with this email already exists'
      });
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const getDemoRequests = async (req, res) => {
  try {
    // In production, add authentication/authorization here
    const { status, limit = 50, page = 1 } = req.query;
    
    const query = {};
    if (status) {
      query.status = status;
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const demoRequests = await DemoRequest.find(query)
      .sort({ submittedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');
    
    const total = await DemoRequest.countDocuments(query);
    
    res.status(200).json({
      success: true,
      count: demoRequests.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: demoRequests
    });
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};