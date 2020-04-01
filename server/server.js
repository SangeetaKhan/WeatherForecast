const express = require('express');
const enableRouting = require("./routers");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:3000"
}));
enableRouting(app);
app.listen(port, () => console.log(`Listening on port ${port}`));