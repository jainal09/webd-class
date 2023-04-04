//import the model
import User from '../models/models.js';
// import the error handler
import errorHandler from '../services/errorHandler.js';
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
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
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // validate inputs
    if (!email || !password) {
        return res.status(400).send({ message: 'Please provide all required fields' });
    }
    try {
        // Find the user in mongodb by email
        const user = await User.findOne({ email });
        // Throw error if user not found
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        // Check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        // Throw error if password is incorrect
        if (!isMatch) {
            return res.status(400).send({ message: 'Invalid password' });
        }
        // Send success response
        res.send({ message: 'Login successful' });
    } catch (err) {
        // Handle errors
        errorHandler(err, res);
    }
}

const updateUser = async (req, res) => {
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
}
const deleteUser = async (req, res) => {
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
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'fullName email password'); // retrieve full name, email, and password
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}
export  { createUser, loginUser, updateUser, deleteUser, getAllUsers };