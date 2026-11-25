---
title: Autenticación de dos factores
description: Protegé tu cuenta con un código de tu celular, además de la contraseña.
sidebar:
  order: 8
---

Con la autenticación de dos factores, para entrar al panel no alcanza con la contraseña: también hace falta un código de 6 dígitos que genera una app en tu celular. Así, alguien que consiga tu contraseña igual no puede entrar.

## Activarla

Necesitás una app de autenticación en el celular, como Google Authenticator, Microsoft Authenticator o 1Password.

1. En el menú de tu usuario, abrí **Mi perfil** y andá a la pestaña **Seguridad**.
2. Tocá **Activar la autenticación de dos factores** e ingresá tu contraseña.
3. Abrí tu app de autenticación, tocá el botón **+** y escaneá el código. Si estás en el celular, tocá **¿Estás en el celular? Abrilo en tu app de autenticación**.
4. Ingresá el código de 6 dígitos que muestra la app.
5. Guardá tus **códigos de recuperación** y marcá **Guardé mis códigos de recuperación en un lugar seguro**.

:::caution
Los códigos de recuperación son la forma de entrar si perdés el celular. Cada uno sirve una sola vez. Guardalos fuera del celular, por ejemplo en tu gestor de contraseñas.
:::

## Entrar al panel

1. Ingresá tu email y tu contraseña, o entrá con Google, como siempre.
2. Escribí el código que muestra tu app de autenticación.

Si marcás **Confiar en este dispositivo durante 30 días**, ese navegador no te vuelve a pedir el código por 30 días. Si no tenés el celular a mano, tocá **Usar un código de recuperación**.

Después de 10 códigos equivocados, la cuenta se bloquea 15 minutos y te llega un email avisándote.

## Desde la pestaña Seguridad

| Para | Tocá |
|---|---|
| Ver en qué navegadores no se pide el código | **Dispositivos de confianza** |
| Que un navegador vuelva a pedir el código | **Dejar de confiar en este dispositivo** |
| Tener códigos de recuperación nuevos (los anteriores dejan de servir) | **Generar códigos de recuperación nuevos** |
| Apagarla | **Desactivar la autenticación de dos factores** |

## Exigirla a todo el equipo

Lo puede hacer solo quien creó la cuenta, y antes tiene que tenerla activada en su propio perfil.

1. Andá a **Configuración de la cuenta → Usuarios**.
2. Activá **Exigir autenticación de dos factores**.

Desde ese momento, quien no la tenga activada tiene que configurarla la próxima vez que entre. En la lista del equipo, la columna **Dos factores** muestra quién ya la tiene.

## Si alguien pierde el celular y los códigos

- **Un miembro del equipo:** un **Admin** de la cuenta toca **Restablecer dos factores** en su fila, en **Configuración de la cuenta → Usuarios**. La persona entra con su contraseña y la vuelve a configurar. Si esa persona también está en otra organización, lo tiene que hacer soporte.
- **Quien creó la cuenta:** escribinos a soporte. Cuando confirmemos que sos vos, la restablecemos.

:::note
Si entrás solo con Google, para activarla necesitás una contraseña. Creala primero con **¿Olvidaste tu contraseña?** en la pantalla de ingreso.
:::
