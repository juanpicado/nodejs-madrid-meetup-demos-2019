# Node.js Madrid Meetup Demos de Verdaccio

5 de Marzo de 2019

* [https://www.meetup.com/es-ES/Node-js-Madrid/events/258299729/](https://www.meetup.com/es-ES/Node-js-Madrid/events/258299729/)
* [https://verdaccio.org/](https://verdaccio.org/)
* [Slides](https://docs.google.com/presentation/d/1ldlk0Krh2ZsRASLUvYX0dIqjWOkI7Hh9QhtbhWOZ4WU/edit?usp=sharing)



Prerequisitos
* Docker Desktop (Mac/Windows)
* Node.js >6 (Preferiblemente 10)
* Yarn opcional


## Instalando con NPM
Ejecutar en la terminal

```
npm install -g verdaccio@next

verdaccio -c backup/config.yaml
```

## Instalando con Docker
Ejecutar en la terminal

```
docker pull verdaccio/verdaccio

docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

## Demostraciones

- Lo basico con Verdaccio (Ejecutar con npm)
- Amazon S3 Bucket como almacenamiento con LocalStack
- Creando un Plugin de autenticación.
- Link 3 registros con UpLinks y Permisos por Paquete


## Mas Demos

- https://github.com/verdaccio/docker-examples
