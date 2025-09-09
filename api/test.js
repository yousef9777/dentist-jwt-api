export default async function handler(req, res) {
  // Simple test endpoint to verify deployment
  res.status(200).json({
    message: 'JWT server is running!',
    timestamp: new Date().toISOString(),
    status: 'Deployed'
  });
}