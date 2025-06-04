import app, { registerRoutes } from './app';
import http from 'http';
import { connectToDatabase } from './database';
import { log } from './utils/helpers/logger';


const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

async function initApplication() {
  try {
    await connectToDatabase();
    registerRoutes();
    server.listen(PORT, () => {
      log.success(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    log.error(`Application initialization failed: ${error}`);
  }
}

void (async () => {
  try {
    await initApplication();
  } catch (error) {
    log.error(`Error during application startup: ${error}`);
  }
})();
