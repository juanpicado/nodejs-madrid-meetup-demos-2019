# Node.js Madrid Meetup Demos de Verdaccio

5 de Marzo 2019

https://www.meetup.com/es-ES/Node-js-Madrid/events/258299729/


Prerequisitos
* Docker Desktop (Mac/Windows)
* Node.js >6 (Preferiblemente 10)
* Yarn opcional


## Instalando con NPM
Ejecutar en la terminal

```
npm install -g verdaccio

verdaccio -c backup/config.yaml
```

## Instalando con Docker
Ejecutar en la terminal

```
docker pull verdaccio/verdaccio

docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

## Demostraciones

- Amazon S3 Bucket como almacenamiento con LocalStack
- Link 3 registros con UpLinks y Permisos por Paquete
- Creando un Plugin de autenticación.


## Mas Demos

- https://github.com/verdaccio/docker-examples