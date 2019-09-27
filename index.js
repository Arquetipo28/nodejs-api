const express = require("express")
const app = express()

require('./routes/index')(app);

app.listen(3000, () => {
    console.log('Server is running')
})
