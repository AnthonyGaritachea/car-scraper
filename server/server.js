const express = require('express');

const PORT = process.env.PORT || 3000; 

const app = express();

app.get('/', (req, res) => {
    res.json({ok: 'hello'})
});

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));