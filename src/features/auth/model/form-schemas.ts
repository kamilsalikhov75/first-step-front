import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Заполните поле" }),
    email: z.string().email("Неверный адрес электронной почты"),
    password: z.string().min(6, { message: "Должно быть больше 6 символов" }),
    passwordConfirm: z
      .string()
      .min(6, { message: "Должно быть больше 6 символов" }),
  })
  .superRefine(({ passwordConfirm, password }, ctx) => {
    if (passwordConfirm !== password) {
      ctx.addIssue({
        path: ["passwordConfirm"],
        code: "custom",
        message: "Пароли должны совпадать",
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email("Неверный адрес электронной почты"),
  password: z.string().min(6, { message: "Должно быть больше 6 символов" }),
});
