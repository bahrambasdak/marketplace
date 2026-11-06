import "server-only";

import bcrypt from "bcrypt";

const BCRYPT_COST_FACTOR = 12;
// This non-secret hash keeps failed credential checks on the bcrypt path.
const DUMMY_PASSWORD_HASH =
  "$2b$12$q0cRcfCTkNJcDvqWO8r2O.QaRNmzplfrV14q/Cf7H3pVyAJx3hmZ2";
const BCRYPT_HASH_PATTERN =
  /^\$2[ab]\$(0[4-9]|[12]\d|3[01])\$[./A-Za-z0-9]{53}$/;

export function hashPassword(password: string) {
  return bcrypt.hash(password, BCRYPT_COST_FACTOR);
}

export async function verifyPassword(
  password: string,
  passwordHash: string | null | undefined,
) {
  const isValidHash =
    typeof passwordHash === "string" && BCRYPT_HASH_PATTERN.test(passwordHash);
  const matches = await bcrypt.compare(
    password,
    isValidHash ? passwordHash : DUMMY_PASSWORD_HASH,
  );

  return isValidHash && matches;
}
