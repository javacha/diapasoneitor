# Proposito



necesito una app para ir “graficando” acordes / escalas en la guitarra.
quiero tener una vista del diapason de una guitarra.
a medida que voy haciendo click en las cuerdas / trastes, se van dibujando unos circulitos que indican que debo presionar en ese punto.
Si hago click en un circulo existente, lo quita.

Como soy zurdo, quiero que el diapasón se muestre:
la ceja del clavijero a la derecha, con lo cual el traste nro 1 es el de mas a la derecha
6ta cuerda debe ser la cuerta superior
se debe indicar en nro de cada cuerda 
debe tener indicador de traste (solo los impares)
debe poder visualizarse todos los trastes (hasta el 24), a lo sumo se debe contar con una barra de scroll horizontal


necesito algunos indicadores:
activar / desactivar que dentro del circulo se indique la nota correspondiente
activar / desactivar notacion americana (A B C D E F G o Do Re Mi Fa Sol La Si)
activar / desactivar modalidad “resaltar”, que cambia de calor el circulito para que destaque entre otros
ancho en pixeles del espacio que ocupa un traste



## Detalles técnicos

Debe estar construida con Astro.
Debe poder desplegarse en Vercel.
Se deben incluir instrucciones para ejecutar la app localmente, versionarla con Git y desplegarla en Vercel.


## Decisiones acordadas

- Afinación inicial: estándar (`E A D G B E`, de grave a agudo).
- Una posición puede contener varias notas seleccionadas en diferentes cuerdas.
- Los círculos seleccionados tienen fondo negro por defecto.
- Al activar «resaltar», los círculos que vaya seleccionando cambian a fondo rojo.
- Los acordes y escalas se crean desde cero.
- No existe diferencia funcional entre acordes y escalas: cada configuración guardada recibe un nombre propio.
- La persistencia inicial será local en el navegador.
- Solo se requiere soportar la afinación estándar.
- La interfaz será minimalista.
- Se toma la imagen adjunta como referencia visual general.
- El diapasón se presenta en orientación para zurdos:
  - la cejilla/clavijero queda a la derecha;
  - el traste 1 queda a la derecha;
  - la 6.ª cuerda aparece arriba;
  - cada cuerda muestra su número.
- La vista debe llegar al traste 24.
- La anotación dentro de los círculos puede mostrarse u ocultarse.
- La notación puede cambiar entre americana (`A B C D E F G`) y solfeo (`Do Re Mi Fa Sol La Si`).
- El ancho de cada traste debe ser configurable en píxeles.

## Pendientes por definir

- ~~¿El diapasón incluye traste 0 para representar cuerdas al aire?~~ — descartado por ahora.
- ¿Qué acciones debe permitir la gestión de guardados: buscar, renombrar, duplicar y eliminar?
- ¿Al crear un nuevo diagrama se debe borrar inmediatamente la selección actual o mostrar una confirmación si existen cambios sin guardar?
- ¿Cómo se debe nombrar una configuración guardada: desde un campo visible antes de guardar o desde el mismo selector principal?
- ¿«Resaltar» es un conmutador global para todo el diagrama o cada círculo debe poder marcarse individualmente como destacado, mientras los demás quedan negros?

## Requisitos confirmados

- ~~Se incluye el traste 0 como representación de cuerdas al aire.~~
- El resaltado es individual: cada círculo puede tener fondo rojo o negro de forma independiente.
- La gestión de guardados incluirá como mínimo:
  - crear una configuración con nombre;
  - cargar una configuración guardada;
  - renombrar;
  - duplicar;
  - eliminar.
- Al iniciar un diagrama nuevo con cambios sin guardar, la aplicación solicitará confirmación antes de limpiar la selección.

## Alcance del producto inicial

El primer producto será una aplicación minimalista con un único diapasón horizontal para zurdos, afinación estándar y persistencia local. Permitirá dibujar una combinación de notas desde cero y guardarla con un nombre, sin distinguir entre acordes y escalas.