export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('JWT request received:', req.body);

    // Import node-appwrite dynamically for Vercel
    const { Client, Users, Account } = await import('node-appwrite');

    // Your credentials (safe for server-side deployment)
    const client = new Client()
      .setEndpoint('https://fra.cloud.appwrite.io/v1')
      .setProject('68bf2fd1002c89f775d1')
      .setKey('standard_b56f002e2ed6756050f823a9f0a90dfcee285c665b8a1ae1024214494a354dec65d0fc277e47ce06d98c77bf9e6b466958673d32a39d017985c13be32943012afb3f309f15ef6cb35405eaf4cda78b9523ba35b84c617e2b4c7941a6df1f97c62c17b3b750b2f38a546a9444b3c35f4998ee5b88791e82fac46824dbf868512d')

    const users = new Users(client);
    const account = new Account(client);

    const { firebaseUid, email } = req.body;

    if (!firebaseUid || !email) {
      return res.status(400).json({ error: 'firebaseUid and email required' });
    }

    let user;
    try {
      user = await users.get(firebaseUid);
    } catch (error) {
      // Create user if doesn't exist
      user = await users.create(firebaseUid, firebaseUid, 'password123', email);
    }

    // Create and return JWT
    const jwt = await account.createJWT(user.$id);

    res.json({ jwt });
  } catch (error) {
    console.error('Vercel function error:', error);
    res.status(500).json({ error: error.message });
  }
}