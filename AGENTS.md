# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Mejora de Experiencia de Usuario en eCommerce mediante Animaciones y Transiciones**.

| | |
|---|---|
| Tema | VTEX IO microinteracciones 1790190526597 |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | VTEX IO |
| Stack | TypeScript / VTEX IO Store Framework |
| Patron arquitectonico | Componentes reutilizables con patrones de contenedor/presentacional y manejo de estado explicito con VTEX Signals |
| Tiempo estimado | 15 horas |

## Receta del stack

Esqueleto obligatorio:

- `manifest.json en la raiz (declara vendor, name, builders)`
- `store/blocks con la composicion de bloques`
- `store/interfaces.json`
- `react/ con los componentes`
- `styles/configs con los CSS Handles`

Dependencias:

- vtex.store-ui n/a
- vtex.styleguide n/a
- @vtex/css-handles n/a
- react 18.x
- react-dom 18.x
- typescript 5.x

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npx tsc --noEmit` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npx tsc --noEmit` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Análisis de Requerimientos y Diseño de Animaciones**: Documento de diseño que describe las animaciones y transiciones propuestas para las interacciones clave en el flujo de compra.
- **Fase 2 — Implementación de Animaciones y Transiciones**: Plataforma VTEX con las animaciones y transiciones implementadas y funcionando correctamente.
- **Fase 3 — Evaluación y Optimización**: Documento que describe las optimizaciones realizadas, los resultados obtenidos y las métricas de impacto en la experiencia de usuario.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `store/interfaces.json` — El topic pide gestion de estado: este archivo es el ejercicio.
- [ ] `store/blocks/home.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.
- [ ] `store/blocks/product.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.
- [ ] `store/blocks/minicart.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (14)

- `tsconfig.json`
- `manifest.json`
- `store/interfaces.json`
- `store/blocks/home.jsonc`
- `store/blocks/product.jsonc`
- `store/blocks/minicart.jsonc`
- `react/components/ProductCard.tsx`
- `react/components/AddToCartButton.tsx`
- `react/components/MiniCart.tsx`
- `react/hooks/useCartAnimation.ts`
- `react/utils/animationUtils.ts`
- `styles/configs/animation.tokens.json`
- `styles/global/animations.css`
- `README.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `store/blocks`
- `react/components`
- `react/hooks`
- `react/utils`
- `styles/configs`
- `styles/global`

## Verificacion

```bash
npm install && npx tsc --noEmit
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **Componentes reutilizables con patrones de contenedor/presentacional y manejo de estado explicito con VTEX Signals**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced
- Brecha que el reto ataca: Aplica conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones y alineadas con la UX definida en el proyecto.
- Mision: Candidato con experiencia avanzada en eCommerce, trabajando en mejora de experiencia de usuario mediante animaciones y transiciones web.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
