# Prueba técnica de Habi

Accede al siguiente [link](https://habi-technical-test-jvqhhh39o-nancy.vercel.app/) para verlo en producción.

## Dependencias

- [Styled-components](https://styled-components.com/)
- [React-router](https://reactrouter.com/en/main)
- [Typescript](https://www.typescriptlang.org/)
- [react-hook-form](https://react-hook-form.com/)

## Tools

- [tinypng](https://tinypng.com/) `ayuda a reducir el tamaño de nuestras imágenes sin perder calidad`
- [vercel](https://vercel.com/) `Nos ayuda hacer un deploy fácilmente de nuestra aplicación`
- [react-modal](https://www.npmjs.com/package/react-modal) `De las mejores y fáciles para crear un Modal`

## Detalles de la prueba

Este proyecto fue creado con [Create React App typescript](https://create-react-app.dev/docs/adding-typescript/);Se decidió utilizar `Styled-component` para la creación de componentes reutilizables, `Typescript` para asegurarnos de crear una aplicación sin futuros errores de typados y más resilente :), `react-router` ayudó para manejar la navegación y poder crear vistas dinamicas según la ruta obtenida.

Para el manejo de estado no hubo necesidad de utilizar alguna herramienta como Redux o Mobx, debido que nuestra aplicación es pequeña y podemos cubrir de manera satisfactoria esta necesidad con la API de `Context` que `React` nos ofrece.

Nuestro formulario se hizó con `react-hook-form`, una muy buena alternativa para manejar validaciones en formularios, sin embargo, de acorde a la experiencia obtenida la curva de aprendizaje puede ser complicada si no has usado previamente algo como [Formik](https://formik.org/docs/overview), en lo personal y gracias a este proyecto puedo decir que `Formik`es más fácil de entender y `react-hook-form` debería ser utilizado para proyectos que tengan muchas validaciones.

## Notas

La forma en como escribí los typos fue que cada componente tiene su propio archivo `.types`, menos los UI-components, esto es por la convención que he logrado detectar en diferentes framework como [Material-UI](https://mui.com/) donde los componentes que se crean para negocio sus typos si pueden ir por separado debido que son muy volatiles, pero los de la UI se ponen en el mismo archivo del componente porque son fijos, además es más claro y fácil al momento de implementarlos y de usarlos, pues si queremos ver cuales son sus typos no tendríamos la necesidad de navegar en cada archivo pues estos estan disponibles en el mismo.

Made with love 💜 by [Nancy Zitle](https://nancyzitle.medium.com/)
