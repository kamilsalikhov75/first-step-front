import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { login, openAuthModal } from "entities/auth";
import { AuthModalMode } from "entities/auth/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../model/form-schemas";

export const LoginForm = () => {
  const {
    register: fieldRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <ModalHeader>Авторизация</ModalHeader>
      <ModalBody>
        <form
          onSubmit={handleSubmit((data) => {
            login({ identifier: data.email, password: data.password });
          })}
          className="flex flex-col gap-2"
        >
          <Input
            errorMessage={errors.email?.message as string}
            classNames={{ innerWrapper: "border-green-500" }}
            variant="bordered"
            placeholder="Электронная почта"
            {...fieldRegister("email")}
          />
          <Input
            errorMessage={errors.password?.message as string}
            classNames={{ innerWrapper: "border-green-500" }}
            variant="bordered"
            placeholder="Пароль"
            type="password"
            {...fieldRegister("password")}
          />
          <Button
            type="submit"
            className="bg-green-500 text-white font-bold w-full"
          >
            Войти
          </Button>
        </form>
      </ModalBody>
      <ModalFooter className="flex items-center justify-start gap-1">
        Нет аккаунта?{" "}
        <Button
          className="text-green-500 font-bold"
          variant="light"
          onClick={() => openAuthModal(AuthModalMode.Register)}
        >
          Регистрация
        </Button>
      </ModalFooter>
    </>
  );
};
