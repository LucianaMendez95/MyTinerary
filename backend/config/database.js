const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(()=> console.log("se conecto"))
.catch(() => console.log("no se conecto"))