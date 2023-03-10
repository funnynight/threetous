import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { NavLink, NavSection } from "components";

export function SidebarNav() {
  return (
    <>
      <Stack spacing="12" align="flex-start">
        <NavSection title="Geral">
          <NavLink href="/dashboard" icon={RiDashboardLine}>
            Dashboard
          </NavLink>
          <NavLink href="/users" icon={RiContactsLine}>
            Usuários
          </NavLink>
        </NavSection>
        <NavSection title="Automoção">
          <NavLink href="/forms" icon={RiInputMethodLine}>
            Formulários
          </NavLink>
          <NavLink href="/automation" icon={RiGitMergeLine}>
            Automoção
          </NavLink>
        </NavSection>
      </Stack>
    </>
  );
}
