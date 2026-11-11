// Google Apps Script que recibe el email de la landing y te lo manda por correo.
// Pasos: script.google.com > Proyecto nuevo > pegar este código >
// Implementar > Nueva implementación > Tipo: Aplicación web >
// Ejecutar como: Yo, Quién tiene acceso: Cualquier persona > Implementar.
// Copiar la URL que termina en /exec y pegarla en FORM_URL (al final de index.html).
// El correo de destino es el de la cuenta que lo implementa: no se escribe acá.
function doPost(e) {
  var email = ((e.parameter && e.parameter.email) || "").trim();
  var bot = e.parameter && e.parameter.botcheck;
  if (bot || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 200) {
    return ContentService.createTextOutput("ignored");
  }
  MailApp.sendEmail({
    to: Session.getEffectiveUser().getEmail(),
    replyTo: email,
    subject: "Nuevo contacto desde la web de Lamppy",
    body: email + " quiere probar Lamppy."
  });
  return ContentService.createTextOutput("ok");
}
