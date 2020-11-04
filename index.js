let dayjs = require('dayjs')
let utc = require('dayjs/plugin/utc')
let timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

const express = require("express");
const app = express();
const port = 8000

app.listen(port, () => {
    console.log('Listening on ' + port);
});

// example usage http://localhost:8000/time?timezone=America/New_York
app.get("/time", (req, res, _next) => {
    const timezone = req.query.timezone;
    const now = dayjs().tz(timezone).format('hh:mm:ss');
    res.send(now)
});
