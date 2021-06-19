import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message : 'testando??'});
})

const port = 3333;

app.listen(port, () => {
    console.log(`Application runnig at http://localhost:${port} `)
})