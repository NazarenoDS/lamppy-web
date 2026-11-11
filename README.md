# lamppy-web

Landing de Lamppy: quién es y qué puede hacer por vos.

## Cómo verla

Abrí `index.html` en el navegador (doble clic), o serví la carpeta:

```sh
python3 -m http.server 8080   # y abrí http://localhost:8080
```

No tiene build ni dependencias. Solo carga la tipografía Roboto desde Google Fonts.

## Qué tiene

- Hero con Lamppy grande que, al scrollear, recorre la página, esquiva el texto, se acerca y se aleja.
- Recorrido en 5 pasos (pedís, mira, señala, hacés, listo) sobre un escritorio de ejemplo.
- Tres ejemplos cotidianos: mandar un email, navegar en internet, usar un programa nuevo.
- Dónde funciona: Windows, macOS y Linux hoy; Android e iPhone próximamente.
- Chat: al tocar a Lamppy se abre un input con respuestas básicas (un `switch` en el JS, sin modelo). Lamppy es gratis..
- Final: input de email (llega por correo al autor) y el código de uso difuminado.

## Configurar el envío del email

El formulario del final usa [Formspree](https://formspree.io), que reenvía cada email al correo del autor sin que
ese correo aparezca en la página ni en el repo.

1. En formspree.io creá una cuenta, un formulario nuevo con el correo donde querés recibir los mensajes y confirmá ese correo.
2. Copiá la URL del formulario (`https://formspree.io/f/XXXXXXXX`) y pegala en `FORM_URL`, al final de `index.html`. Es pública por diseño.

Mientras `FORM_URL` esté vacía, el formulario avisa que el envío todavía no está configurado.

Limitadores: campo trampa `_gotcha` contra bots, y en el navegador 1 envío cada 30 s y 3 por hora. El límite real y el antispam
los pone Formspree según el plan.

## Pendiente

- Cargar `FORM_URL` de Formspree (ver arriba).
- El código difuminado es un texto de relleno entre comillas. Reemplazarlo por los pasos reales cuando haya instaladores.

## Archivos

- `index.html`: toda la página (HTML, CSS y JS).
- `assets/`: caras del personaje (copias reducidas de `lamppy/apps/desktop/assets/personaje/completo`). Se usan 7 de las 9.
- `exploraciones/cinco-landings.html`: la primera ronda de 5 direcciones de diseño, como referencia.
