## Creando un Plugin en Verdaccio

```
interface IPluginAuth extends IPlugin {
  authenticate(user: string, password: string, cb: Callback): void;
  adduser(user: string, password: string, cb: Callback): void;
  allow_access(user: RemoteUser, pkg: $Subtype<PackageAccess>, cb: Callback): void;
  apiJWTmiddleware(user: RemoteUser, pkg: $Subtype<PackageAccess>, cb: Callback): void;
  allow_publish(helpers): void;
}
```
 ### Obligatorio

* `authenticate` logea el usuario
* `adduser` agrega un usuario

### Opcionales

* `allow_access` maneja el accesso a los paquetes
* `allow_publish` maneja el accceso a quien publica