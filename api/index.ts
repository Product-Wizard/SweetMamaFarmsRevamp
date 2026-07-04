// Vercel serverless function entry point — wraps the Express app.
// PORT is not needed here; Vercel handles the HTTP lifecycle itself.
import app from "../artifacts/api-server/src/app";

export default app;

