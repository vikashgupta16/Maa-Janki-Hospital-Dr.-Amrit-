import fetch from 'node-fetch';

const API_BASE = 'http://localhost:5000';

// Test data
const testContact = {
  name: 'Test Patient',
  phone: '9876543210',
  email: 'test@example.com',
  childAge: '2 years',
  message: 'This is a test message to verify the contact form is working properly.',
  urgency: 'normal'
};

const testEmergencyContact = {
  name: 'Emergency Test',
  phone: '9123456789',
  email: 'emergency@example.com',
  childAge: '6 months',
  message: 'This is an emergency test to verify urgent notifications are working.',
  urgency: 'emergency'
};

async function testAPI() {
  console.log('🧪 Testing Maa Janki Hospital API...\n');

  try {
    // Test 1: Health Check
    console.log('1. Testing Health Check...');
    const healthResponse = await fetch(`${API_BASE}/health`);
    const healthData = await healthResponse.json();
    console.log(`✅ Health Check: ${healthData.message}\n`);

    // Test 2: Submit Normal Contact
    console.log('2. Testing Normal Contact Submission...');
    const contactResponse = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testContact),
    });
    const contactData = await contactResponse.json();
    console.log(`✅ Normal Contact: ${contactData.message}`);
    console.log(`   Email Status: ${contactData.emailStatus}\n`);

    // Test 3: Submit Emergency Contact
    console.log('3. Testing Emergency Contact Submission...');
    const emergencyResponse = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testEmergencyContact),
    });
    const emergencyData = await emergencyResponse.json();
    console.log(`✅ Emergency Contact: ${emergencyData.message}`);
    console.log(`   Email Status: ${emergencyData.emailStatus}\n`);

    // Test 4: Get Dashboard Stats
    console.log('4. Testing Dashboard Stats...');
    const statsResponse = await fetch(`${API_BASE}/api/contact/dashboard`);
    const statsData = await statsResponse.json();
    console.log(`✅ Dashboard Stats:`);
    console.log(`   Total Contacts: ${statsData.data.total}`);
    console.log(`   Today's Contacts: ${statsData.data.today}`);
    console.log(`   Emergency Contacts: ${statsData.data.byUrgency?.find(u => u._id === 'emergency')?.count || 0}\n`);

    // Test 5: Get Emergency Contacts
    console.log('5. Testing Emergency Contacts Endpoint...');
    const emergencyListResponse = await fetch(`${API_BASE}/api/contact/emergency`);
    const emergencyListData = await emergencyListResponse.json();
    console.log(`✅ Emergency Contacts Found: ${emergencyListData.data.length}\n`);

    // Test 6: Get All Contacts
    console.log('6. Testing Get All Contacts...');
    const allContactsResponse = await fetch(`${API_BASE}/api/contact?limit=5`);
    const allContactsData = await allContactsResponse.json();
    console.log(`✅ Recent Contacts: ${allContactsData.data.contacts.length} contacts retrieved\n`);

    console.log('🎉 All tests completed successfully!');
    console.log('\n📧 Check your email for test notifications.');
    console.log('🌐 Visit http://localhost:5173/admin to see the admin dashboard.');
    console.log('📝 Visit http://localhost:5173/contact to test the contact form.');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run tests
testAPI();
