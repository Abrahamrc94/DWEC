# Integración Frontend y Backend

## Introducción

El objetivo del proyecto es trabajar sobre un sistema de contenido en streaming, como Netflix.

En el apartado de funciones disponibles se indican las distintas posibilidades del proyecto.

## Requisitos

- Tener instalado [Spring Tool Suite](https://spring.io/tools), para la parte backend.
- Utilizar algún navegador web (preferiblemente [Google Chrome](https://www.google.com/intl/es_es/chrome/)), para la parte frontend.

## Preparación del entorno

Para utilizar la aplicación web, primero debemos descargar los entornos backend y frontend.

- Descargamos el [proyecto](https://github.com/Abrahamrc94/DWEC/tree/master/JavaScript/Ejercicio%20Integraci%C3%B3n) desde el siguiente enlace:
  https://github.com/Abrahamrc94/DWEC/tree/master/JavaScript/Ejercicio%20Integraci%C3%B3n

### Backend

- Importamos el proyecto en Spring.

        File -> Import -> Maven -> Existing Maveng Projects
        Seleccionamos la carpeta "backend" como raíz.

        Una vez agregado el proyecto, Spring descargará las dependencias necesarias (podemos comprobarlo en la esquina inferior derecha.)

- Iniciamos el servidor desde Spring

        Tras importar el proyecto, iniciamos el servidor desde el apartado "Boot Dashboard" (normalmente ubicado en la parte inferior izquieda.)

        Desplegamos el botón "local" -> click botón derecho sobre "jacaranda" -> click sobre start

### Frontend

- Acceso al apartado web.

        Abrimos el fichero "index.html" utilizando cualquier navegador.

## Funciones disponibles

- Buscar un producto en el sistema.

        Se realiza una petición GET al backend utilizando el identificador del producto.

        Debemos introducir un nombre en la primera fila del formulario, dentro del input "Nombre".
        Luego pulsaremos el botón "Get Product".

        Comprobamos que los datos del producto se han insertado en las líneas del formulario.

- Mostrar listado de productos disponibles en el sistema.

        Se realiza una petición GET al backend, sin utilizar parámetros.

        Pulsamos el botón "Get Data", ubicado al final del formulario.

        Comprobamos que se muestra el listado de productos disponibles actualmente en el sistema.

- Insertar producto en el sistema.

        Se realiza una petición POST al backend, utilizando los siguientes parámetros:

        - Nombre. Input de tipo texto
        - Precio. Input de tipo texto.
        - Stock. Input de tipo texto.

        Debemos insertar todos los parámetros mencionados, en caso contrario el sistema los pondrá por defecto a null.

        Una vez se han introducido los datos, pulsamos el botón "Send Producto", ubicado al final del formulario.

        Podemos confirmar que el producto se ha creado correctamente, utilizando el botón "Get Data" explicado anteriormente.