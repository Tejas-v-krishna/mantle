import NewsletterSubscriber from '../models/NewsletterSubscriber.js';

export const subscribeToNewsletter = async (req, res) => {
  try {
    const { email, name, source = 'website' } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Check if already subscribed and active
    const existingSubscriber = await NewsletterSubscriber.findOne({
      email: email.toLowerCase(),
      active: true
    });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to our newsletter'
      });
    }

    // Check if previously unsubscribed
    const previouslyUnsubscribed = await NewsletterSubscriber.findOne({
      email: email.toLowerCase(),
      active: false
    });

    let subscriber;
    
    if (previouslyUnsubscribed) {
      // Reactivate the subscriber
      previouslyUnsubscribed.active = true;
      previouslyUnsubscribed.name = name || previouslyUnsubscribed.name;
      previouslyUnsubscribed.source = source;
      previouslyUnsubscribed.unsubscribedAt = undefined;
      subscriber = await previouslyUnsubscribed.save();
      console.log(`Reactivated newsletter subscriber: ${email}`);
    } else {
      // Create new subscriber
      subscriber = new NewsletterSubscriber({
        email: email.toLowerCase(),
        name: name || '',
        source,
        active: true
      });
      await subscriber.save();
      console.log(`New newsletter subscriber: ${email}`);
    }

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: {
        subscriberId: subscriber._id,
        email: subscriber.email,
        name: subscriber.name
      }
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'This email is already subscribed to our newsletter'
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

export const getSubscribers = async (req, res) => {
  try {
    // In production, add authentication/authorization here
    const { active, limit = 50, page = 1 } = req.query;
    
    const query = {};
    if (active !== undefined) {
      query.active = active === 'true';
    }
    
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const subscribers = await NewsletterSubscriber.find(query)
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v -preferences');
    
    const total = await NewsletterSubscriber.countDocuments(query);
    
    res.status(200).json({
      success: true,
      count: subscribers.length,
      total,
      page: parseInt(page),
      totalPages: Math.ceil(total / parseInt(limit)),
      data: subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};