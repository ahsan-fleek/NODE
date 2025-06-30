import { jwt } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constant';
import { JWT_EXPIRES_IN, JWT_SECRET } from '../../configuration';

class SecurityManager {


  async hashPassword(password: string, saltRounds: number = SALT_ROUNDS): Promise<string> {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async comparePassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  generateToken(payload: object) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  verifyToken(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }

};

export default new SecurityManager();