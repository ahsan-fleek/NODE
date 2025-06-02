import app, { setupRoutes } from './app';
import http from 'http';
import { connectToDatabase } from './database';


const PORT = process.env.PORT || 3000;
const server = http.createServer(app);



async function initApplication() {
    try {
      await connectToDatabase();     // ✅ Wait for DB connection first
      setupRoutes();    
      server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
        console.error('Application initialization failed:', error);
    }
}


void (async () => {
    try {
       await initApplication();
    } catch (error) {
        console.error('Error during application startup:', error);
    }
})();
