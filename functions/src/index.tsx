import * as functions from 'firebase-functions';
import * as express from 'express';
import * as React from 'react';
import * as ReactDOM from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import { Post } from './pages';

const app = express();

const baseHTML = fs.readFileSync(path.join(__dirname, '../..', 'index.html'), 'utf8');

app.get('**', (request, response) => {
  const postHTML = ReactDOM.renderToString(<Post />);
  const fullHTML = baseHTML.replace('<!-- ::HTML:: -->', postHTML);
  response.set('Cache-Control', 'public; max-age=300, s-maxage=600');
  response.send(fullHTML);
});

export const helloWorld = functions.https.onRequest(app);
