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

El formulario del final usa [Web3Forms](https://web3forms.com), que reenvía cada email al correo del autor sin que
ese correo aparezca en la página ni en el repo.

1. En web3forms.com pedí una clave de acceso con el correo donde querés recibir los mensajes.
2. Pegala en `WEB3FORMS_KEY` (al final de `index.html`). La clave es pública por diseño, no revela el correo.

Mientras la clave esté vacía, el formulario avisa que el envío todavía no está configurado.

## Pendiente

- Cargar la clave de Web3Forms (ver arriba).
- El código difuminado es un texto de relleno entre comillas. Reemplazarlo por los pasos reales cuando haya instaladores.

## Archivos

- `index.html`: toda la página (HTML, CSS y JS).
- `assets/`: caras del personaje (copias reducidas de `lamppy/apps/desktop/assets/personaje/completo`). Se usan 7 de las 9.
- `exploraciones/cinco-landings.html`: la primera ronda de 5 direcciones de diseño, como referencia.
