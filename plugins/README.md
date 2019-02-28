# Creando un Plugin en Verdaccio


## Como usar un plugin?

Existen tres maneras de cargar un plugin

* Folder externo

```
  /home/my-location/plugins
  /home/my-location/plugins/my-plugin/package.json
```

```
// config.yaml

storage: ./storage
plugins: /home/my-location/plugins

auth:
  my-plugin:
    conf: 1
```

* Dependencia Global

```
  npm i -g my-plugin
```

## Estructura

```
interface IPluginAuth extends IPlugin {
  authenticate(user: string, password: string, cb: Callback): void;
  adduser(user: string, password: string, cb: Callback): void;
  allow_access(user: RemoteUser, pkg: $Subtype<PackageAccess>, cb: Callback): void;
  allow_publish(helpers): void;
}
```
### Obligatorio

* `authenticate` logea el usuario
* `adduser` agrega un usuario

### Opcionales

* `allow_access` maneja el accesso a los paquetes
* `allow_publish` maneja el accceso a quien publica


Ejemplo completo:

[https://github.com/verdaccio/verdaccio-auth-memory](https://github.com/verdaccio/verdaccio-auth-memory)