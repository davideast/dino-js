import * as functions from 'firebase-functions';
import * as express from 'express';

const app = express();

app.use(express.static('dist'));

export const helloWorld = functions.https.onRequest(app);

