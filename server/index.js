import express from 'express';
import dbCon from './Utils/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import routers from './routers/routes.js';
dotenv.config();

const app = express();

//mongodb

dbCon()
app.use(express.json());
app.use(cors());

   app.use('/api', routers)
   app.listen(process.env.PORT,() => {
    console.log('server is running');
    
  })
    
 