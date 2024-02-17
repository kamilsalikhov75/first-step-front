import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { logout, useAuth } from "entities/auth";
import { Role } from "entities/auth/types";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          as="button"
          className=" bg-green-500 text-green-100 transition-transform"
          name={user?.name}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        {user?.role === Role.Admin && (
          <DropdownItem
            onClick={() => {
              navigate("/admin/appointments");
            }}
          >
            Записи клиентов
          </DropdownItem>
        )}
        <DropdownItem
          onClick={() => {
            navigate("/appointments");
          }}
        >
          Мои записи
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            navigate("/appointments/create");
          }}
        >
          Запись на прием
        </DropdownItem>
        <DropdownItem
          onClick={() => {
            logout();
          }}
        >
          Выход
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
