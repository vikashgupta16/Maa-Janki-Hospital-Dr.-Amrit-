// Admin Configuration
// This file handles admin credentials from environment variables

export const getAdminCredentials = () => {
  return {
    dramrit: {
      username: import.meta.env.VITE_ADMIN_DRAMRIT_USERNAME ,
      password: import.meta.env.VITE_ADMIN_DRAMRIT_PASSWORD ,
      displayName: 'Dr. Amrit Kumar'
    },
    anmol: {
      username: import.meta.env.VITE_ADMIN_ANMOL_USERNAME,
      password: import.meta.env.VITE_ADMIN_ANMOL_PASSWORD,
      displayName: 'Anmol'
    },
    developer: {
      username: import.meta.env.VITE_ADMIN_DEVELOPER_USERNAME,
      password: import.meta.env.VITE_ADMIN_DEVELOPER_PASSWORD,
      displayName: 'Developer (Vikash)'
    }
  };
};

export const validateAdmin = (username, password) => {
  const credentials = getAdminCredentials();
  return Object.values(credentials).find(
    admin => admin.username === username && admin.password === password
  );
};

export const getAdminDisplayName = (username) => {
  const credentials = getAdminCredentials();
  const admin = Object.values(credentials).find(admin => admin.username === username);
  return admin ? admin.displayName : username;
};

export default {
  getAdminCredentials,
  validateAdmin,
  getAdminDisplayName
};
