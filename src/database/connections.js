import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODBURI, {
    useNewUrlParser: true,
    useUndefinedTopology: true,
})