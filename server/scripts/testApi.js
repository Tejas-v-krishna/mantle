import fetch from 'node-fetch';

const API_BASE = 'http://localhost:5000/api';

async function testApi() {
  console.log('=== Testing Helpr API ===\n');

  try {
    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthRes = await fetch(`${API_BASE}/status`);
    const healthData = await healthRes.json();
    console.log(`   Status: ${healthRes.status} ${healthRes.statusText}`);
    console.log(`   Response: ${JSON.stringify(healthData, null, 2)}\n`);

    // Test 2: Submit demo request
    console.log('2. Testing demo request submission...');
    const demoData = {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      company: 'Test Corp',
      employeeCount: '1-100 employees',
      challenges: 'Testing the API'
    };

    const demoRes = await fetch(`${API_BASE}/demo-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(demoData)
    });
    
    const demoResult = await demoRes.json();
    console.log(`   Status: ${demoRes.status} ${demoRes.statusText}`);
    console.log(`   Response: ${JSON.stringify(demoResult, null, 2)}\n`);

    // Test 3: Newsletter subscription
    console.log('3. Testing newsletter subscription...');
    const newsletterData = {
      email: 'test.subscriber@example.com',
      name: 'Test Subscriber'
    };

    const newsletterRes = await fetch(`${API_BASE}/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newsletterData)
    });
    
    const newsletterResult = await newsletterRes.json();
    console.log(`   Status: ${newsletterRes.status} ${newsletterRes.statusText}`);
    console.log(`   Response: ${JSON.stringify(newsletterResult, null, 2)}\n`);

    // Test 4: Authentication
    console.log('4. Testing authentication...');
    const authData = {
      email: 'admin@helpr.com',
      password: 'Admin123!'
    };

    const authRes = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authData)
    });
    
    const authResult = await authRes.json();
    console.log(`   Status: ${authRes.status} ${authRes.statusText}`);
    
    if (authResult.success && authResult.data.token) {
      console.log('   ✅ Authentication successful - Token received\n');
      
      // Test 5: Protected endpoint with token
      console.log('5. Testing protected endpoint...');
      const protectedRes = await fetch(`${API_BASE}/demo-requests`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${authResult.data.token}`,
          'Content-Type': 'application/json'
        }
      });
      
      const protectedResult = await protectedRes.json();
      console.log(`   Status: ${protectedRes.status} ${protectedRes.statusText}`);
      
      if (protectedRes.status === 200) {
        console.log('   ✅ Protected endpoint accessible\n');
      } else {
        console.log(`   Response: ${JSON.stringify(protectedResult, null, 2)}\n`);
      }
    } else {
      console.log('   ❌ Authentication failed\n');
    }

    console.log('=== API Tests Completed ===');
    console.log('Summary:');
    console.log(`   Health Check: ${healthRes.status === 200 ? '✅' : '❌'}`);
    console.log(`   Demo Request: ${demoRes.status === 201 ? '✅' : '❌'}`);
    console.log(`   Newsletter: ${newsletterRes.status === 201 ? '✅' : '❌'}`);
    console.log(`   Authentication: ${authRes.status === 200 ? '✅' : '❌'}`);

  } catch (error) {
    console.error('Test failed with error:', error.message);
    console.log('\n⚠️  Make sure the server is running on http://localhost:5000');
    console.log('   Start the server with: cd server && npm run dev');
  }
}

// Run tests
testApi();