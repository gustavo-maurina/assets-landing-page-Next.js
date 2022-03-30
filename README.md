# assets-landing-page-Next.js

## _app.jsx

### Particularidades
`<DeviceProvider />`
Contexto pra ser usado durante app, pra checar se dispositivo é mobile ou desktop

`<LazyMotion />`
Envolver app pra poder usar componente `m` ao invés do componente `motion` dentro do app, que diminiu bundle size
