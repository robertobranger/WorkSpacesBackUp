import express from 'express';
import cors from 'cors';
import { v1Router } from './api/v1';
// Import Environment

let isProduction;
const origin = { origin: isProduction ? 'http:areuin.com' : '*' }; //Check This.

const app = express();

// Middlewares
app.use(cors(origin));

app.use('/api/v1', v1Router);
// New api verisions

const port = process.env.PORT || 5000;
console.log(port);
app.listen(port, () => console.log(`[App]: Server listening on ${port}`));
