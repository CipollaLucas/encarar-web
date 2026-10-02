# encarar-web

Landing profesional de **Lucas Cipolla** para **encarar.com.ar**.

## Objetivo

Presentar un perfil técnico orientado a recruiters y clientes, mostrando experiencia real en:

- Software y producto
- Inteligencia artificial aplicada
- Automatización e integraciones
- Infraestructura, CI/CD y observabilidad
- Sistemas web y mobile en producción

## Versiones visuales

La landing incluye tres variantes seleccionables desde el header:

- **Night** — dark tecnológico / cinematográfico
- **Ice** — claro, limpio y técnico
- **Horizon** — claro premium con azul suave

La selección queda persistida en `localStorage`.

## Interacciones

- Transiciones al hacer scroll
- Cards con efecto 3D sutil
- Hero con sistema visual animado
- Cambio de tema sin recargar
- Responsive desktop / mobile
- Navegación por secciones

## Estructura

```
.
├── assets/
│   ├── lc-mark.svg
│   └── lc-full.svg
├── app.js
├── index.html
├── styles.css
└── README.md
```

## Ejecutar localmente

No requiere build:

```bash
python -m http.server 8080
```

Abrir: `http://localhost:8080`

## Próximos pasos

- Ajustar mail de contacto definitivo
- Agregar LinkedIn y GitHub
- Incorporar CV descargable
- Crear páginas de caso por proyecto
- Sumar screenshots reales
- Agregar analytics
- Preparar deploy de encarar.com.ar


## Versión actual

**v1.0.0 — primera versión pública**

Incluye identidad visual, selector de temas, proyectos reales, case studies interactivos, trayectoria profesional, CACIC 2026, contacto directo y diseño responsive.
