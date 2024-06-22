import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);

  // Verificar si el usuario está autenticado
  if (authService.isLoggedIn()) {
    return true; // Usuario autenticado, permitir acceso a la ruta
  }

  // Usuario no autenticado, redirigir al componente de inicio de sesión
  router.navigate(['']);
  return false;
};
