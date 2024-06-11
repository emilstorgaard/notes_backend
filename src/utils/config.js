try {
    require('dotenv').config();
  } catch (err) {
    console.error('Error loading .env file:', err);
    process.exit(1); // Exit the process with an error code
}

const requiredEnvVars = ['DB_HOST', 'DB_USERNAME', 'DB_PASSWORD', 'DB_NAME', 'DB_PORT']; // APP_PORT is not required, it defaults to port 8080

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing or empty value for required environment variable: ${envVar}`);
    process.exit(1); // Exit the process with an error code
  }
}

const config = {
  APP_PORT: process.env.APP_PORT,
  DB_HOST: process.env.DB_HOST,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
};

module.exports = { config };