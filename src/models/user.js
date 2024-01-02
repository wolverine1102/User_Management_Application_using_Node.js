const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        default: ""
    },
    phone: {
        type: String,
        unique: true,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;