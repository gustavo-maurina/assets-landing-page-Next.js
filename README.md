# assets-landing-page-Next.js

## _app.jsx

### Particularidades
```js
  <Head />
```
Contém tags pra compor boa pontuação dentro do SEO, e tags OpenGraph

```js
  <DeviceProvider />
```
Contexto pra ser usado durante app, pra checar se dispositivo é mobile ou desktop

```js
  <LazyMotion />
```
Envolver app pra poder usar componente `m` ao invés do componente `motion` dentro do app, que diminiu bundle size
