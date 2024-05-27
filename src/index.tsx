
import express from 'express';
import renderToString from 'preact-render-to-string'
const app = express();
import 'dotenv/config'
//
import { App } from './pages/App';
import {AboutApp} from './pages/About';
import {TestApp} from './pages/Test';
//
import commonRouter from './routes/commonRouter';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//console.log("EXTERNAL_API_URL=", process.env.EXTERNAL_API_URL)
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/common', commonRouter);

//MPA
app.get('/test', (req: any, res: any) => {
  try { 
    const html = renderToString(<TestApp />);
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (error) { res.sendStatus(500); }
});
app.get('/about', (req: any, res: any) => {
  try {
    const html = renderToString(<AboutApp />);
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (error) { res.sendStatus(500);}
});
app.get('/', (req: any, res: any) => {
  try {
     const html = renderToString(<App />);
    //console.log(html);
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
