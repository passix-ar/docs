# CLAUDE.md — Ayuda de Passix (docs.getpassix.com)

El sitio de ayuda para organizadores y compradores, hecho con Astro + Starlight. **Este repo es
público**: acá solo va ayuda para usuarios. Nada interno (decisiones, riesgos, infraestructura,
números, estrategia), y nada que nombre a Hi.Events.

## Correr y publicar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # tiene que pasar antes de abrir el PR
```

Cloudflare (Workers Builds, con `wrangler.jsonc`) compila y **publica solo cada push a `main`**.
Por eso a `main` se entra únicamente por PR.

## Cómo se escribe una página

- **En español rioplatense, de vos, directo y concreto:** "Andá a **Asistentes** y tocá
  **Crear**". Para quien organiza un evento, no para un programador.
- **Los nombres de botones y menús, exactos y en negrita**, tal como aparecen en el panel en
  español. Ante la duda, buscalos en `hi-events/frontend/src/locales/es.po`.
- **Estructura:**
  1. Frontmatter con `title`, `description` y `sidebar.order`.
  2. Un párrafo que dice qué resuelve la página.
  3. Pasos numerados para hacer algo.
  4. Tablas para comparar opciones o estados.
- **Avisos de Starlight:** `:::tip` (consejo), `:::note` (dato) y `:::caution` (algo que puede
  salir mal). Uno o dos por página, no más.
- **Links internos con ruta absoluta del sitio:** `[Reembolsos](/ventas/reembolsos/)`.
- **Las capturas van en `public/img/panel/`** y se referencian como `/img/panel/<archivo>.png`.
  Se sacan del panel real, nunca se dibujan ni se arman con datos inventados que no existen en el
  producto.
- **Se documenta solo lo que el usuario puede usar hoy.** Nada de funciones apagadas u ocultas, ni
  de "próximamente".

## Cuándo se toca

Cuando un PR de `hi-events` cambia algo que ve el organizador o el comprador, la página
correspondiente se actualiza en este repo antes de cerrar la tarea. El PR de acá referencia la tarea
de la funcionalidad (`Refs passix-ar/hi-Events#N`), porque este repo no tiene issues.
