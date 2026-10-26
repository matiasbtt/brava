# BRAVA — maqueta web

Ropa urbana personalizable de Cochabamba (canguros, poleras y gorras serigrafiadas por pedido). Maqueta de un solo archivo: `index.html` (HTML + CSS + JS sin dependencias).

## Verla en local

```bash
python -m http.server 5191
```

y abrir http://localhost:5191/index.html

## Qué hay

- `index.html`: la página completa (rutas por hash, personalizador, pedido con QR y cierre por WhatsApp).
- `prendas/`: fotos de maniquí fantasma de canguro, polera y gorra en 8 colores (WebP).
- `disenos/arte/`: dibujos de serigrafía que manda Matías, uno por departamento (`<id>.webp` para imprimir, `<id>-m.webp` para pantalla) más `bolivia` (rótulo de la gorra). Originales en `disenos/arte/originales/`.
- `disenos/nombres/`: rótulo con el nombre de cada departamento, dibujado por Codex (`v1/` es su entrega original; los de la carpeta raíz están re-espaciados con `tools/reespaciar_nombres.py`).
- `disenos/*.svg`: dibujos vectoriales anteriores (de Codex); siguen en uso para la polera.
- `tools/`: `importar_arte.py` (foto de línea → arte con transparencia + símbolo en el HTML), `inyectar_nombres.py`, `reespaciar_nombres.py`, `colorear_prendas.py`.
- `prendas3d/`: pruebas de generación de las prendas (fotos recortadas, especificaciones).

## Estado (2026-10-26)

- **Canguro, espalda:** lleva el arte de Matías en Cochabamba, Santa Cruz, Chuquisaca, Tarija y Beni. Faltan La Paz, Oruro, Potosí y Pando (hoy se ocultan con `SOLO_CON_ARTE=true` en `index.html`; ponerlo en `false` los vuelve a mostrar con el dibujo vectorial anterior).
- **Pecho (canguro y polera):** lleva solo el nombre del departamento en letras.
- **Gorra:** dos opciones, «BOLIVIA» o el nombre del departamento; el rótulo va centrado en el frente.
- **Polera, espalda:** La Paz (5 opciones: póster Illimani, Ciudad Ajayu, Salteña, La Mamani, Kusillo) y Oruro (Carnaval 1956) llevan láminas a todo color, tal cual, en `disenos/polera/` (`tools/importar_polera.py`, selector «Diseño de la espalda»). Los demás departamentos llevan el mismo arte que el canguro. `disenos/polera/originales/bolivia-cholita.jpg` está guardada pero sin usar.
- **Derechos:** esas láminas son obras de terceros (póster de Redbubble, libro «La Mamani» de Nelson y Pelon, sello de Correos de Bolivia, afiche Carnaval 1956, «Arte Sano Mutante»). Solo vista previa: no publicar ni vender sin permiso. Aviso: están en el repositorio público solo para la maqueta.
- **Tamaño de impresión:** todos los dibujos tienen el mismo ancho en la espalda (canguro 144 u., polera 134 u.); los verticales (3:4) quedan más altos, sin deformarse. El canguro arranca bajo la punta de la capucha.

## Pendientes y avisos

- El arte de **Santa Cruz** trae una sirena parecida al logo de Starbucks (abajo a la derecha). Es una marca registrada: hay que quitarla o reemplazarla antes de vender.
- Los rótulos de nombres de Codex quedaron más finos y geométricos que el «BOLIVIA» de referencia; conviene una segunda pasada de diseño.
- Cochabamba y Santa Cruz vienen en baja resolución (≈ 520–610 px): para imprimir hacen falta versiones más grandes.
- El arte es de una sola tinta: la opción «2 tintas» no cambia el dibujo.
- Planos, `ARQUITECTURA.md` y `PRODUCT.md` siguen describiendo el modelo anterior.
- Prototipo académico: precios, plazos y contactos son de ejemplo.
