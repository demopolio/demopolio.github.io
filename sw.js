// DEMopólio: service worker mínimo.
// Não guarda nada em cache: vai sempre buscar a versão mais recente ao GitHub,
// e só mostra uma mensagem simples quando não há internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<title>DEMopólio</title><body style="font-family:system-ui;background:#EEF2FA;color:#0F1C44;display:grid;place-items:center;height:100vh;margin:0;text-align:center;padding:20px">' +
    '<div><h1 style="color:#1F47C2">DEMopólio</h1><p>Sem ligação à internet.<br>Liga-te e volta a abrir o jogo.</p></div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
