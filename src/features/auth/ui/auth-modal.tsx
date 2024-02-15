import { Modal, ModalContent } from "@nextui-org/react";
import { closeModal, useAuth } from "entities/auth";
import { LoginForm } from "./login-form";
import { AuthModalMode } from "entities/auth/types";
import { RegisterForm } from "./register-form";

export const AuthModal = () => {
  const { authModal, user } = useAuth();

  return (
    <Modal onClose={closeModal} isOpen={authModal?.isOpen && !user}>
      <ModalContent>
        {authModal?.mode === AuthModalMode.Login && <LoginForm />}
        {authModal?.mode === AuthModalMode.Register && <RegisterForm />}
      </ModalContent>
    </Modal>
  );
};
