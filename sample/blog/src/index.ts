
import express from 'express';
import { renderToString } from 'react-dom/server';

const app = express();
import 'dotenv/config'
//
import PostsIndex from './pages/posts/App';
import PostsShow from './pages/posts/show/App';
//
import commonRouter from './routes/commonRouter';
import postRouter from './routes/post';
import siteRouter from './routes/site';
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV)
//console.log(process.env)
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/common', commonRouter);

//MPA
/*
app.get('/about', (req: any, res: any) => {
  try { res.send(renderToString(About())); } catch (error) { res.sendStatus(500);}
});
*/
///posts
app.get('/posts/:id',async (req: any, res: any) => {
  try {
//console.log("id=", req.params.id  );
    const item = await postRouter.get(Number(req.params.id));
    res.send(renderToString(PostsShow({item: item, id: 0}))); 
  } catch (error) { res.sendStatus(500); }
});
app.get('/',async (req: any, res: any) => {
  try { 
    const site = await siteRouter.get();
    const items = await postRouter.get_list_page(Number(1));
    res.send(renderToString(PostsIndex({items: items, page: 1, site: site}))); 
  } catch (error) { res.sendStatus(500); }
});

//start
const PORT = 4000;
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});
console.log('start');
