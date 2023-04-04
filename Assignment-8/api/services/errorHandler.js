export default function errorHandler(err, res) {
    let errorMessage;
    switch (true) {
      case err.name === 'ValidationError':
        const messages = Object.values(err.errors).map((err) => err.message);
        errorMessage = messages.join('. ');
        res.status(400).json({ message: errorMessage });
        break;
      case err.message === 'Invalid password format':
        errorMessage = err.message;
        res.status(400).json({ message: errorMessage });
        break;
      case err.errors && err.errors.fullName:
        errorMessage = err.errors.fullName.message;
        res.status(400).send({ message: errorMessage });
        break;
      case err.errors && err.errors.email:
        errorMessage = err.errors.email.message;
        res.status(400).send({ message: errorMessage });
        break;
      case err.errors && err.errors.password:
        errorMessage = err.errors.password.message;
        res.status(400).send({ message: errorMessage });
        break;
      case err.code === 11000:
        errorMessage = 'Email already exists';
        res.status(400).send({ message: errorMessage });
        break;
      default:
        console.log(err);
        errorMessage = 'Internal server error';
        res.status(500).send({ message: errorMessage });
        break;
    }
  }
  

  