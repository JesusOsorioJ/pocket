import { checkSchema } from "express-validator";

export const newMessage = checkSchema({
  content: {
    in: "body",
    isString: { errorMessage: "input must be a string" }
  },
});
