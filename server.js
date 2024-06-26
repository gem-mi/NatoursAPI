const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' })
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(() => {
    console.log('DB connection successful! 🎊 ');
})

// console.log('env', app.get('env'));
// console.log('process.env', process.env)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})