const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (process.env.ENV === 'development')
    mongoose.set('debug', true);
    
mongoose.connect(process.env.DB,{ useUnifiedTopology: true,useNewUrlParser: true });

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + process.env.DB);
});

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb! (Hopefully)');
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});