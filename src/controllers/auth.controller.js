import UserService from "../services/user.service";
import bcrypt from "bcryptjs"

class AuthController {
  async signUp(req, res) {
    const user = req.body;
    const salt = bcrypt.genSalt(10);
    const encryptedPassword = bcrypt.hash(user.password.salt)

    const newUser = await UserService.create({
        email: user.email,
        password: encryptedPassword
    });

    const token = jwt.sign({
        _id: newUser._id,
        email: newUser.email
    })
    res.status(201).send({
      success: true,
      newUser,
    });
  }
  async login(req, res) {
    const userData = req.body;

    const user = await UserService.findOne({
        email: userData.email
    })

    const isValidPassword = await bcrypt.compare(userData.password, user.password);

    if (!isValidPassword) {
        return res.status(400).send({
            success: false,
            message: "Invalid credentials"
        })
    }

    const token = jwt.sign({
        _id: user._id,
        email: user.email
    },
        process.env.SECRET,
        { expiresIn: 3 * 24 * 60 * 60 }
    );

    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000
    })

    return res.status(200).send({
        success: true,
        message: "User successfully logged in",
        user
    })
}
async logout(req, res) {
  try {
    // Clear the token cookie by setting it to an empty string and setting the maxAge to 0
    res.cookie("token", "", {
      httpOnly: true,
      maxAge: 0,
    });

    return res.status(200).send({
      success: true,
      message: "User successfully logged out"
    });

  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).send({
      success: false,
      message: "An error occurred during logout"
    });
  }
}
}

export default new AuthController();