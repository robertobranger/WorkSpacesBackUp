import express from 'express';
import cors from 'cors';
import { v1Router } from './api/v1';
// Import Environment

const app = express();

const origin = { origin: 'http:areuin.com' }; //Check This.

// Middlewares
app.use(cors(origin));

app.use('/api/v1', v1Router);
// New api verisions

const port = process.env.PORT;
app.listen(port, () => console.log(`[App]: Server listening on ${port}`));
