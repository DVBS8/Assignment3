const { exec } = require('child_process');
const app = require('./server/server'); // import Express app

// Use environment variable PORT or default to 3000
const PORT = process.env.PORT || 3000;
let server;

// Function to start server and run tests
function run() {
 console.log(`Starting server on port ${PORT}...`);

 // Start the server programmatically
 server = app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Running tests...');

  // Run tests via npm
  exec('npm test', (err, stdout, stderr) => {
  if (err) {
   console.error(`Test ERR:\n${stderr}`);
   console.error(`Test OUT:\n${stdout}`);
   } else {
    console.log(stdout);
   }

   // Stop server after tests
   server.close(() => {
    console.log('Server stopped after tests.');
   });
  });

 });
}

// Start the process
run();