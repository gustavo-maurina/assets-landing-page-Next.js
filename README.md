# assets-landing-page-Next.js

## _document.jsx

### Preconnect com fontes p/ reduzir bundle size

## _app.jsx

### Particularidades
```js
  <Head />
```
Contém tags pra compor boa pontuação dentro do SEO, e tags OpenGraph   
<br />
```js
  <DeviceProvider />
```
Contexto pra ser usado durante app, pra checar se dispositivo é mobile ou desktop   
<br />   

```js
  <LazyMotion />
```
Envolver app pra poder usar componente `m` ao invés do componente `motion` dentro do app, que diminiu bundle size

## Hero.jsx

### uso do componente `m` e algumas outras tecnicas


## DeviceContext.jsx

### Componente Context API pra resgatar dispositivo mobile/desktop
