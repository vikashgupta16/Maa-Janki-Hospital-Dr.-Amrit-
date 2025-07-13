import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaExclamationTriangle, 
  FaClock, 
  FaCheckCircle,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaCalendarDay,
  FaFilter,
  FaSync,
  FaSignOutAlt
} from 'react-icons/fa';
import { apiConfig, apiRequest } from '../config/api';
import { getAdminDisplayName } from '../config/admin';

const AdminDashboard = ({ onLogout }) => {
  const [contacts, setContacts] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    // Get current logged in user
    const adminUser = localStorage.getItem('adminUser') || 'Admin';
    const displayName = getAdminDisplayName(adminUser);
    setCurrentUser(displayName);
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch dashboard stats
      const statsData = await apiRequest(apiConfig.endpoints.dashboard);
      
      // Fetch contacts
      const contactsData = await apiRequest(
        `${apiConfig.endpoints.contact}?page=${currentPage}&limit=10&urgency=${filter === 'all' ? '' : filter}`
      );
      
      if (statsData.success) setStats(statsData.data);
      if (contactsData.success) setContacts(contactsData.data.contacts);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [currentPage, filter]);

  const updateContactStatus = async (contactId, newStatus) => {
    try {
      await apiRequest(`${apiConfig.endpoints.contact}/${contactId}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status: newStatus }),
      });

      fetchDashboardData(); // Refresh data
    } catch (error) {
      console.error('Error updating contact status:', error);
    }
  };

  const getUrgencyBadge = (urgency) => {
    const classes = {
      emergency: 'bg-red-100 text-red-800 border-red-200',
      urgent: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      normal: 'bg-green-100 text-green-800 border-green-200'
    };

    const icons = {
      emergency: '🚨',
      urgent: '⚡',
      normal: '📝'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${classes[urgency]}`}>
        {icons[urgency]} {urgency.toUpperCase()}
      </span>
    );
  };

  const getStatusBadge = (status) => {
    const classes = {
      new: 'bg-blue-100 text-blue-800 border-blue-200',
      contacted: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      resolved: 'bg-green-100 text-green-800 border-green-200',
      closed: 'bg-gray-100 text-gray-800 border-gray-200'
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${classes[status]}`}>
        {status.toUpperCase()}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-xl mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">🏥 Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">माँ जानकी हॉस्पिटल एंड चाइल्ड केयर</p>
              <p className="text-sm text-orange-600 mt-1">Welcome, {currentUser}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={fetchDashboardData}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
              >
                <FaSync className="w-4 h-4" />
                <span>Refresh</span>
              </button>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FaUsers className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FaCalendarDay className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Today's Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.today || 0}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <FaExclamationTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Emergency Contacts</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.byUrgency?.find(u => u._id === 'emergency')?.count || 0}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FaClock className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.byStatus?.find(s => s._id === 'new')?.count || 0}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="flex items-center space-x-4">
            <FaFilter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-semibold">Filter by urgency:</span>
            <div className="flex space-x-2">
              {['all', 'emergency', 'urgent', 'normal'].map((urgencyLevel) => (
                <button
                  key={urgencyLevel}
                  onClick={() => setFilter(urgencyLevel)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === urgencyLevel
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {urgencyLevel === 'all' ? 'All' : urgencyLevel.charAt(0).toUpperCase() + urgencyLevel.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contacts Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent Contacts</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Urgency
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contacts.map((contact, index) => (
                  <motion.tr
                    key={contact._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="font-semibold text-gray-900">{contact.name}</p>
                        {contact.childAge && (
                          <p className="text-sm text-gray-600">Child: {contact.childAge}</p>
                        )}
                        <p className="text-xs text-gray-500">
                          {new Date(contact.createdAt).toLocaleString('en-IN')}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <a
                          href={`tel:${contact.phone}`}
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                        >
                          <FaPhone className="w-3 h-3" />
                          <span className="text-sm">{contact.phone}</span>
                        </a>
                        {contact.email && (
                          <a
                            href={`mailto:${contact.email}`}
                            className="flex items-center space-x-2 text-green-600 hover:text-green-800"
                          >
                            <FaEnvelope className="w-3 h-3" />
                            <span className="text-sm">{contact.email}</span>
                          </a>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 max-w-xs truncate" title={contact.message}>
                        {contact.message}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getUrgencyBadge(contact.urgency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(contact.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <a
                          href={`tel:${contact.phone}`}
                          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                          title="Call"
                        >
                          <FaPhone className="w-4 h-4" />
                        </a>
                        <a
                          href={`https://wa.me/91${contact.phone}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                          title="WhatsApp"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                        </a>
                        {contact.status === 'new' && (
                          <button
                            onClick={() => updateContactStatus(contact._id, 'contacted')}
                            className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition-colors"
                            title="Mark as Contacted"
                          >
                            <FaCheckCircle className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {contacts.length === 0 && (
            <div className="text-center py-12">
              <FaUsers className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No contacts found</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
