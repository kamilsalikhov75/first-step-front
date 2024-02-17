import {
  Button,
  Input,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { openAuthModal, register } from "entities/auth";
import { AuthModalMode } from "entities/auth/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../model/form-schemas";

export const RegisterForm = () => {
  const {
    register: fieldRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <>
      <ModalHeader>Регистрация</ModalHeader>
      <ModalBody>
        <form
          onSubmit={handleSubmit((data) => {
            register({
              email: data.email,
              name: data.name,
              password: data.password,
            });
          })}
          className="flex flex-col gap-2"
        >
          <Input
            errorMessage={errors.name?.message as string}
            classNames={{ innerWrapper: "border-green-500" }}
            variant="bordered"
            placeholder="Имя"
            {...fieldRegister("name")}
          />
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
          <Input
            errorMessage={errors.passwordConfirm?.message as string}
            classNames={{ innerWrapper: "border-green-500" }}
            variant="bordered"
            placeholder="Повторите пароль"
            type="password"
            {...fieldRegister("passwordConfirm")}
          />
          <Button
            type="submit"
            className="bg-green-500 text-white font-bold w-full"
          >
            Зарегистрироваться
          </Button>
        </form>
      </ModalBody>
      <ModalFooter className="flex items-center justify-start gap-1">
        Уже есть аккаунт?{" "}
        <Button
          className="text-green-500 font-bold"
          variant="light"
          onClick={() => openAuthModal(AuthModalMode.Login)}
        >
          Войти
        </Button>
      </ModalFooter>
    </>
  );
};
