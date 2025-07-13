// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT || 'development';

export const apiConfig = {
  baseURL: API_BASE_URL,
  environment: ENVIRONMENT,
  endpoints: {
    contact: `${API_BASE_URL}/api/contact`,
    dashboard: `${API_BASE_URL}/api/contact/dashboard`,
    emergency: `${API_BASE_URL}/api/contact/emergency`,
    health: `${API_BASE_URL}/health`
  }
};

// API request helper
export const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export default apiConfig;
