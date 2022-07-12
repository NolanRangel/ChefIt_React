
// // imprts mongoose
const mongoose = require('mongoose');


// // establishes connection with db
mongoose.connect(process.env.REACT_APP_MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
