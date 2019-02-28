# Amazon S3 Bucket (Localstack) y Verdaccio

Verdaccio running with [Localstack](https://github.com/localstack/localstack) provides an easy-to-use test/mocking framework for developing Cloud applications (AWS S3 in our example).


## Configuracion de un almacenamiento alternativo

```
store:
  s3-storage:
    bucket: localstack.s3.plugin.test
    keyPrefix: docker-test-prefix
    region: eu-west-2
    endpoint: http://localstack-s3:4572

uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages:
  '@*/*':
    # scoped packages
    access: $all
    publish: $all
    proxy: npmjs
  '**':
    access: $all
    publish: $all
    proxy: npmjs

logs:
  - {type: stdout, format: pretty, level: trace}

listen:
  - 0.0.0.0:4873
```

## Uso

```
docker-compose up
```

## Comandos Utiles

* Instalar AWS (https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html)

Listar el contenido del bucket bucket
```
aws --endpoint-url=http://localhost:4572 s3 ls s3://localstack.s3.plugin.test --recursive --human-readable --summarize
```

## Test

Instalar `siege`
```
brew install siege
``

Test de stress multiples conexiones
```
## Ejemplo 1 (metadata)
siege -b -t10S http://localhost:4874/jquery
## Ejemplo 2 (metadata concurrent)
siege -c=2000  -t10S http://localhost:4874/jquery
## Ejemplo 3 (tarball)
siege -c=200 -t10S http://localhost:4874/jquery/-/jquery-3.3.1.tgz
```