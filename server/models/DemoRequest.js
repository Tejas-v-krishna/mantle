import mongoose from 'mongoose';

const demoRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please provide a valid email address']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  date: {
    type: Date,
    required: [true, 'Demo date is required']
  },
  time: {
    type: String,
    required: [true, 'Demo time is required']
  },
  timezone: {
    type: String,
    required: [true, 'Timezone is required'],
    default: 'IST'
  },
  services: [{
    type: String,
    required: [true, 'At least one service must be selected']
  }],
  additionalInfo: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['pending', 'scheduled', 'completed', 'cancelled'],
    default: 'pending'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create index for efficient queries
demoRequestSchema.index({ email: 1, submittedAt: -1 });
demoRequestSchema.index({ status: 1, submittedAt: -1 });

const DemoRequest = mongoose.model('DemoRequest', demoRequestSchema);

export default DemoRequest;