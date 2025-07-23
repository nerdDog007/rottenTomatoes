import User from '../models/User.js';

export const loginOrRegister = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    if (user.password === password) {
      return res.status(200).json({ validation: true, email, password });
    } else {
      return res.status(400).json({ validation: false, error: 'Invalid Email or Password' });
    }
  }

  const newUser = new User({ email, password });
  await newUser.save();
  res.status(200).json({ validation: true, email, password });
};
