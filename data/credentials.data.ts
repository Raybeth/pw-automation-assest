/**
 * Common test account data
 * Keeping credentials in one place avoids duplication 
 */
export const validCredentials = {
  username: "tomsmith",
  password: "SuperSecretPassword!",
};

/**
 * Invalid username scenario.
 */
export const invalidUsername = {
  username: "invalidUser",
  password: "SuperSecretPassword!",
};

/**
 * Invalid password scenario.
 */
export const invalidPassword = {
  username: "tomsmith",
  password: "InvalidPassword!",
};
