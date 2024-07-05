import express from 'express';

const app = express();

app.use(express.static('dist'))

// app.get('/',(req,res) => {
//     res.send("server is redy");
// });
// get a list of 5 jokes

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            title:'a joke 1',
        },
        {
            id:2,
            title:'a joke 2',
        },
        {
            id:3,
            title:'a joke 3',
        },
        {
            id:4,
            title:'a joke 4',
        },
        {
            id:5,
            title:'a joke 5',
        },
    ]
    res.json(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at ${port}`);
})