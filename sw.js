const CACHE='artefact-v38';
const FILES=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(CACHE);await c.addAll(FILES);await self.skipWaiting()})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{try{const response=await fetch(event.request);if(response&&response.ok){const c=await caches.open(CACHE);c.put(event.request,response.clone())}return response}catch(error){const cached=await caches.match(event.request);return cached||Response.error()}})())
});