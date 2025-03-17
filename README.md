# Parcial 1 - Programación con tecnologías web

David Alejandro Fuquen Flórez
202021113

# Pasos para la ejecución de la aplicación

## Ejecutar la aplicación en máquina local

Dentro de la raíz del repositorio abra una terminal y ejecuta los siguientes comandos:

Instalar las dependencias con npm install

```
npm i
```

Ejecutar el entorno en modo de desarrollo

```
npm run dev
```

Habiendo ejecutado dicho comando, basta con esperar a que se abra el navegador automáticamente o a abrir la url que se muestra en la terminal.

# Especificaciones
+ Libreria de UI
  + React 
  + React-Bootstrap 
+ Otras liberías usadas
  + Sass -> Para procesamiento de estilo
  + Axios -> Para peticiones http
  + React-Query -> Para manejo de estados de consultas a api
  + React Rotuer -> Para navegación entre páginas
  + React Intl  -> Para internacionalización
+ Version de npm
  + 10.9.0

# Desarrollo del parcial

## Preparación

Como preparación para el parcial, se realizaron las siguientes actividades antes de empezar la hora y 20 disponible.
+ Se configuró un proyecto utilizando Vite, Typescript, React y las demás librerías explicadas anteriormente. Lo anterior se hizo para usar las mismas herramientas que se venían utilizando en la realización del proyecto del curso.
+ Dentro del proyecto, se crearon rutas básicas como /home y /login teniendo en cuenta el parcial de práctica realizado previamente.
+ Dentro del proyecto, se crearon pages básicas como Home.tsx y Login.tsx teniendo en cuenta el parcial de práctica realizado previamente.
+ Se estudió le librería React Bootstrap para realizar con esta todos los componentes de la aplicación 

## Realización del parcial

Durante el parcial el resultado obtenido no fue satisfactorio. Entre el afán y la angustia no se tuvo la agilidad necesaria y esperada teniendo en cuenta la preparación que se tuvo previamente. Durante el examen se logró hacer la página de Login, que al llenar el formulario dirige al usuario a la página Home.

A continuación se muestra cómo se realizó página Login y cómo fue realizada

### Realización de la página login (Login.tsx)
+ Se utilizó un **Container** de React para llenar toda la página
  + Dentro de este **Container** se utilizaron dos columnas, la izquierda para el logo y el título, la derecha para el login
  + En la columna izquierda se utilizó un componente **Card** para colocar el logo, el título, el slogan y la imagen.
  + En la columna de la derecha se utilizó un componte **Form** dentro de una **Card** para recibir en este el login y el password (considerando el número de caracteres requerido) del usuario, así como un botón que nos direcciona a la página de Home gracias a la libreria de **React Router**.
  
## Después del parcial

Después del parcial, se realizaron las actividades estipuladas para casa:

+ Se realizó el ReadME que usted lee actualmente
+ Se llevó a cabo la internacionalización con el uso del Hook useIntl. Con este, en todas las paginas, usted podrá ver los textos estáticos en español o en inglés según la configuración de su navegador. Para ello, utilizamos FormattedMessage para admitir traducciones.

Además, con ánimo de aprender y corregir los errores, se completó en su totalidad el parcial

### Realización de la página Home (Home.tsx)

+ Se utilizó un **Container** de React para llenar toda la página.  
  + Dentro de este **Container**, se agregó un **Row** centrado para alinear los elementos de la interfaz.  
  + Se utilizó un **Col** con estilo redondeado que contiene una **Card** para organizar el contenido.  
  + Dentro de la **Card**, se utilizó un **Card.Body** que contiene una fila con tres columnas, cada una con un **icono y un texto** asociado.  
  + Cada ícono representa una funcionalidad principal: **Menú, Tiendas y Carrito**, y tiene un evento **onClick** que redirige a la página correspondiente utilizando **React Router**.
 
### Realización de la página Menu (Menu.tsx), Stores (Stores.tsx) y Menu (Menu.tsx)

+ Se creó un API Mockup en Mockaroo para las imágenes del Carrousel y de las cards al inferior de la página.
+ Al ser páginas idénticas, el proceso de creación de cada una es muy similar, sólo cambiando el título de la página y los íconos de su navbar. 

+ Se utilizó un **Navbar** con un fondo de color y un título estilizado en la parte superior de la página.  
  + En el título, se agregó un **ícono de menú** antes y después del texto de título.

+ Se utilizó un **Container** para mostrar un **Carrusel** con imágenes de comida.  
  + Los datos se obtienen de una API mediante **Axios** y **React Query**.  
  + Se muestran **tres imágenes** en el carrusel, seleccionadas de los datos obtenidos.  

+ Se agregó otro **Container** que contiene una **fila con tarjetas** de los productos del menú.  
  + Cada tarjeta muestra una **imagen** y el **nombre del alimento**.  
  + Los datos para estas tarjetas también provienen de la API.  

+ Se utilizó **React Query** para manejar la obtención de datos de la API y controlar la carga de los elementos.

## Conclusiones

Si bien al momento del parcial no se ejecutó lo deseado, el trabajo realizado en casa logró un resultado más que satisfactorio. Usando Estados, Hooks, Routing y Componentes se logró crear un proyecto que deja en evidencia el buen uso de todo lo aprendido en clase y del conocimiento en React para realizar Front.
