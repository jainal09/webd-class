const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const app = express();

//import the model
const User = require('./models');
// import the error handler
const errorHandler = require('./errorHandler');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


// Create a new user
app.post('/user/create', async (req, res) => {
    console.log(req.body);
    const { fullName, email, password } = req.body;

    // Validate inputs
    if (!fullName || !email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    }

    try {
 

        // Create the user
        const user = new User({ fullName, email, password: password });
        await user.save();

        // Send success response
        res.send({ message: 'User created' });
    } catch (err) {
        // Handle errors
        errorHandler(err, res);
        
    }
        
});

// Update user details
app.put('/user/edit/:email', async (req, res) => {
    const { fullName, password } = req.body;
    const email = req.params.email;

    // Validate inputs
    if (!fullName && !password) {
        return res.status(400).send({ message: 'Please provide at least one field to update' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        // Throw error if user not found
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Update user details
        if (fullName) {
            user.fullName = fullName;
        }

        if (password) {
            user.password = password;
            await user.save();
        }
        else {
            await user.save();
        }
        

        // Send success response
        res.send({ message: 'User updated' });
    } catch (err) {
        // Handle errors
        errorHandler(err, res);
    }
});

// Delete user 
app.delete('/user/delete', async (req, res) => {
    const email = req.body.email;
    try {
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET all users
app.get('/user/getAll', async (req, res) => {
    try {
        const users = await User.find({}, 'fullName email password'); // retrieve full name, email, and password
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

try {
    // Start server
    app.listen(3000, () => console.log('Server started'));
} catch (err) {
    // Handle errors
    console.log(err);
    res.status(500).send({ message: 'Internal server error' });
}

