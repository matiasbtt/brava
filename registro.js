/* Registra el pedido en Supabase (RPC registrar_pedido) en paralelo a WhatsApp. Nunca bloquea la navegación. */
(() => {
  const cfg = window.BRAVA_SUPABASE || {};
  const key = 'brava-pendientes';
  if (!cfg.url || !cfg.anonKey) return;
  const leer = () => { try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (_) { return []; } };
  const guardar = q => { try { localStorage.setItem(key, JSON.stringify(q)); } catch (_) {} };
  /* 'ok' = registrado; 'rechazado' = el servidor dijo que los datos no sirven (4xx), no se reintenta; 'red' = falló la conexión o el servidor (5xx) */
  const enviar = async payload => {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const r = await fetch(`${cfg.url.replace(/\/$/, '')}/rest/v1/rpc/registrar_pedido`, {
          method: 'POST', headers: { apikey: cfg.anonKey, Authorization: `Bearer ${cfg.anonKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ p: payload }), keepalive: true
        });
        if (r.ok) return 'ok';
        if (r.status >= 400 && r.status < 500) { console.warn('BRAVA: pedido rechazado', r.status, await r.text().catch(() => '')); return 'rechazado'; }
      } catch (_) {}
    }
    return 'red';
  };
  window.registrarPedido = payload => { void enviar(payload).then(res => { if (res === 'red') guardar([...leer(), payload]); }); };
  const pendientes = leer();
  if (pendientes.length) void (async () => {
    const quedan = [];
    for (const p of pendientes) if (await enviar(p) === 'red') quedan.push(p);
    guardar(quedan);
  })();
})();
