const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Generic API request function
 */
async function apiRequest(endpoint, method = 'GET', data = null) {
  const url = `${API_BASE_URL}${endpoint}`;
  const token = localStorage.getItem('mantle_token');
  
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    },
  };

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
    }

    return responseData;
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Auth API
 */
export const authApi = {
  login: (credentials) => apiRequest('/auth/login', 'POST', credentials),
  register: (userData) => apiRequest('/auth/register', 'POST', userData),
  getProfile: () => apiRequest('/auth/profile'),
  updateProfile: (data) => apiRequest('/auth/profile', 'PUT', data)
};

/**
 * HR Service API
 */
export const hrApi = {
  getEmployees: () => apiRequest('/v1/hr'),
  getEmployeeStats: () => apiRequest('/v1/hr/stats'),
  addEmployee: (data) => apiRequest('/v1/hr', 'POST', data)
};

/**
 * Finance Service API
 */
export const financeApi = {
  getFiscalData: () => apiRequest('/v1/finance'),
  getBudgets: () => apiRequest('/v1/finance/budgets'),
  updateBudget: (id, data) => apiRequest(`/v1/finance/budgets/${id}`, 'PATCH', data)
};

/**
 * Inventory Service API
 */
export const inventoryApi = {
  getInventory: () => apiRequest('/v1/inventory'),
  updateStock: (id, stock) => apiRequest(`/v1/inventory/${id}/stock`, 'PATCH', { stock })
};

/**
 * Support Service API
 */
export const supportApi = {
  getTickets: (filter = {}) => {
     const queryParams = new URLSearchParams(filter).toString();
     return apiRequest(`/v1/support${queryParams ? `?${queryParams}` : ''}`);
  },
  updateTicket: (id, data) => apiRequest(`/v1/support/${id}`, 'PATCH', data)
};

/**
 * Marketing Service API
 */
export const marketingApi = {
  getCampaigns: () => apiRequest('/v1/marketing'),
  launchCampaign: (data) => apiRequest('/v1/marketing', 'POST', data)
};

/**
 * AI Analytics Service API
 */
export const analyticsApi = {
  getRealtimeStats: () => apiRequest('/v1/analytics/realtime'),
  getHistoricalData: (range) => apiRequest(`/v1/analytics/history?range=${range}`),
  getPerformanceMetrics: () => apiRequest('/v1/analytics/performance')
};

/**
 * Project Service API
 */
export const projectApi = {
  getProjects: () => apiRequest('/v1/projects'),
  getTasks: (projectId) => apiRequest(`/v1/projects/${projectId}/tasks`),
  createProject: (data) => apiRequest('/v1/projects', 'POST', data)
};

/**
 * Demo request API
 */
export const demoApi = {
  submitDemoRequest: (data) => apiRequest('/demo-request', 'POST', data),
  getDemoRequests: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return apiRequest(`/demo-requests${queryParams ? `?${queryParams}` : ''}`);
  }
};

/**
 * Newsletter API functions
 */
export const newsletterApi = {
  subscribe: (data) => apiRequest('/subscribe', 'POST', data),
  getSubscribers: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return apiRequest(`/subscribers${queryParams ? `?${queryParams}` : ''}`);
  }
};

/**
 * Status check
 */
export const statusApi = {
  checkStatus: () => apiRequest('/status')
};

/**
 * Utility to check if backend is available
 */
export const checkBackendAvailability = async () => {
  try {
    const response = await statusApi.checkStatus();
    return { available: true, data: response };
  } catch (error) {
    return { available: false, error: error.message };
  }
};