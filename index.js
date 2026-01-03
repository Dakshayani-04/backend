import express from 'express';
import router from './routers/firstRouters.js';

const app = express();

app.use('/get-data', router);

app.listen(7007, () => {
    console.log("server running at port 7007");
});
