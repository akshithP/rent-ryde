// JWT is a compact and self-contained way for securely transmitting information between parties as a JSON object
// 2 functions. One for signing JWT another for verifying and retrieving data from JWT

import { typography } from "@chakra-ui/react";
import jwt, { JwtPayload } from "jsonwebtoken";
import { MdDescription } from "react-icons/md";

interface SignOptions {
  expireTime: string | number;
}

const DEFAULT_SIGN_OPTION: SignOptions = {
  expireTime: "1d",
};

export function signJwt(
  /**
   * Creates a new JWT, enrypting the payload with secret key
   * @param {JwtPayload} payload: Is the data to include in JWT, in this case user ID
   * @param {string} [option: SignOptions = DEFAULT_SIGN_OPTION]  The defined token expiry
   * @return
   */
  payload: JwtPayload,
  option: SignOptions = DEFAULT_SIGN_OPTION
) {
  const secretKey = process.env.JWT_USER_ID_SECRET!;
  const token = jwt.sign(payload, secretKey, { expiresIn: option.expireTime });
  return token;
}

export function verifyJwt(token: string) {
  /**
   * Verify and decode the token, with the secret key
   * @param {string} token
   * @return
   */
  try {
    const secretKey = process.env.JWT_USER_ID_SECRET!;
    const decoded = jwt.verify(token, secretKey);
    return decoded as JwtPayload;
  } catch (e) {
    // If token is not valid, means expired or sescret key incorrect
    console.log(e);
    return null;
  }
}
