# Agromarc ERP — sitio de presentación

Sitio estático independiente del ERP. Se publica con GitHub Pages desde `main`, carpeta `/ (root)`.

## Vista previa

Desde este repositorio:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Abrir <http://127.0.0.1:8080>. No requiere instalar dependencias ni levantar el ERP.

## Actualizar capturas y descargas

- Guardar capturas aptas para publicación en [`assets/`](./assets/), sin datos de clientes, empleados o costos internos. Al reemplazar una captura, actualizar su texto alternativo y sus dimensiones en [`index.html`](./index.html).
- Adjuntar los instaladores a una nueva versión en GitHub Releases. No agregar los binarios al historial de Git.
- Actualizar en [`index.html`](./index.html) los dos enlaces de descarga y el enlace a la versión. Revisar tamaños, requisitos y estado de notarización antes de publicar.
