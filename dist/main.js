(()=>{"use strict";function e(){const e=document.getElementById("middle");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("h2");t.classList.add("page-header"),t.textContent="Contact";const n=document.createElement("div");n.id="contact";const d=document.createElement("ul");d.classList.add("contact-box");const c=document.createElement("li");c.textContent="We have no location because this restaurant is not real.",c.id="contact-location";const a=document.createElement("li");a.textContent="Call 555-555-FAKE to order, now with curbside pickup!",a.id="contact-order";const o=document.createElement("li");o.textContent="Send your application to hiring@fakechainrestaurant.com.",o.id="contact-nowHiring",d.appendChild(c),d.appendChild(a),d.appendChild(o);const i=document.createElement("ul");i.classList.add("contact-box");const s=document.createElement("li");s.textContent="This webpage was created to practice DOM manipulation for The Odin Project.";const l=document.createElement("li"),m=document.createElement("a");m.href="https://github.com/travis1010/restaurant-page",m.target="_blank",m.textContent="GitHub",l.appendChild(m);const r=document.createElement("li"),p=document.createElement("a");p.href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page",p.target="_blank",p.textContent="The Odin Project",r.appendChild(p),i.appendChild(s),i.appendChild(l),i.appendChild(r),n.appendChild(d),n.appendChild(i),e.appendChild(t),e.appendChild(n)}function t(){const e=document.getElementById("middle");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("h2");t.textContent="Welcome!";const n=document.createElement("p");n.textContent="Welcome to the Homepage of this Chain Restaurant!  Our menu is about the same as other chain resturants in your area, \n  and the food quality is similar too!  We hope you spend some money here soon! Sed eu placerat tellus, eu sollicitudin erat. Phasellus augue lorem, \n  varius tincidunt rutrum eget, sollicitudin rhoncus enim. Duis eget venenatis quam. Donec convallis diam et enim molestie lacinia. Phasellus eu \n  nisi non metus ultrices molestie non non augue. Aenean turpis neque, mattis at tincidunt vitae, dignissim sed augue.";const d=document.createElement("div");d.id="about",d.appendChild(t),d.appendChild(n);const c=document.createElement("div");c.textContent="Kids Eat Free!",c.classList.add("info-blip");const a=document.createElement("div");a.textContent="Senior Discounts",a.classList.add("info-blip");const o=document.createElement("div");o.textContent="Margarita Mondays!",o.classList.add("info-blip");const i=document.createElement("img");i.src="./assets/drink.jpg",i.classList.add("round-img");const s=document.createElement("img");s.src="./assets/hamburger.jpg",s.classList.add("round-img");const l=document.createElement("img");l.src="./assets/salad.jpg",l.classList.add("round-img");const m=document.createElement("div");m.id="home";const r=document.createElement("div");r.classList.add("home-blips");const p=document.createElement("div");p.classList.add("home-blips");const u=document.createElement("div");u.classList.add("home-blips"),r.appendChild(c),r.appendChild(l),p.appendChild(s),p.appendChild(d),p.appendChild(o),u.appendChild(a),u.appendChild(i),m.appendChild(r),m.appendChild(p),m.appendChild(u),e.appendChild(m)}function n(){const e=document.getElementById("middle");for(;e.firstChild;)e.removeChild(e.firstChild);const t=document.createElement("div");t.id="menu";const n=document.createElement("h2");n.classList.add("page-header"),n.textContent="Menu";const d=document.createElement("div");d.classList.add("menu-column");const c=document.createElement("div");c.classList.add("menu-column");const a=document.createElement("div");a.classList.add("menu-column");const o=document.createElement("div");o.classList.add("menu-section");const i=document.createElement("h3");i.textContent="Appetizers";const s=document.createElement("ul");for(let e=1;e<=7;e++){const t=document.createElement("li");t.textContent=`Appetizer Number ${e}... $8.99`,t.classList.add("menu-item"),s.appendChild(t)}o.appendChild(i),o.appendChild(s);const l=document.createElement("div");l.classList.add("menu-section");const m=document.createElement("h3");m.textContent="Salads";const r=document.createElement("ul");for(let e=1;e<=5;e++){const t=document.createElement("li");t.textContent=`Salad Number ${e}... $7.99`,t.classList.add("menu-item"),r.appendChild(t)}l.appendChild(m),l.appendChild(r);const p=document.createElement("div");p.classList.add("menu-section");const u=document.createElement("h3");u.textContent="Sandwiches";const h=document.createElement("p");h.textContent="Served with a side of french fries.  Substitute a side of salad for $1.99.";const C=document.createElement("ul");for(let e=1;e<=6;e++){const t=document.createElement("li");t.textContent=`Sandwich Number ${e}... $10.99`,t.classList.add("menu-item"),C.appendChild(t)}p.appendChild(u),p.appendChild(h),p.appendChild(C),d.appendChild(o),d.appendChild(l),d.appendChild(p);const E=document.createElement("div");E.classList.add("menu-section");const f=document.createElement("h3");f.textContent="Lunches";const v=document.createElement("p");v.textContent="Served with a ceasar salad and a side of french fries.  Substitute any side for $1.99.";const x=document.createElement("ul");for(let e=1;e<=8;e++){const t=document.createElement("li");t.textContent=`Lunch Number ${e}... $11.99`,t.classList.add("menu-item"),x.appendChild(t)}E.appendChild(f),E.appendChild(v),E.appendChild(x);const L=document.createElement("div");L.classList.add("menu-section");const g=document.createElement("h3");g.textContent="Dinners";const b=document.createElement("p");b.textContent="Served with a ceasar salad and any side.";const $=document.createElement("ul");for(let e=1;e<=10;e++){const t=document.createElement("li");t.textContent=`Dinner Number ${e}... $7.99`,t.classList.add("menu-item"),$.appendChild(t)}L.appendChild(g),L.appendChild(b),L.appendChild($),c.appendChild(E),c.appendChild(L);const w=document.createElement("div");w.classList.add("menu-section");const S=document.createElement("h3");S.textContent="Desserts";const y=document.createElement("ul");for(let e=1;e<=4;e++){const t=document.createElement("li");t.textContent=`Dessert Number ${e}... $11.99`,t.classList.add("menu-item"),y.appendChild(t)}w.appendChild(S),w.appendChild(y);const k=document.createElement("div");k.classList.add("menu-section");const D=document.createElement("h3");D.textContent="Soft Drinks";const j=document.createElement("p");j.textContent="All Coca-Cola products available... $2.49 w/ free refills.",k.appendChild(D),k.appendChild(j);const A=document.createElement("div");A.classList.add("menu-section");const N=document.createElement("h3");N.textContent="Adult Beverages";const B=document.createElement("p");B.textContent="Must show ID and be over 21 to order.";const M=document.createElement("ul");for(let e=1;e<=7;e++){const t=document.createElement("li");t.textContent=`Adult Beverage Number ${e}... $4.99`,t.classList.add("menu-item"),M.appendChild(t)}A.appendChild(N),A.appendChild(B),A.appendChild(M);const I=document.createElement("div");I.classList.add("menu-section");const z=document.createElement("h3");z.textContent="Sides";const H=document.createElement("p");H.textContent="Available to order for $4.99.";const O=document.createElement("ul");for(let e=1;e<=5;e++){const t=document.createElement("li");t.textContent=`Side Dish Number ${e}`,t.classList.add("menu-item"),O.appendChild(t)}I.appendChild(z),I.appendChild(H),I.appendChild(O),a.appendChild(w),a.appendChild(k),a.appendChild(A),a.appendChild(I),t.appendChild(d),t.appendChild(c),t.appendChild(a),e.appendChild(n),e.appendChild(t)}!function(){const d=document.getElementById("content"),c=document.createElement("div");c.id="header";const a=document.createElement("div");a.id="middle";const o=document.createElement("div");o.id="footer";const i=document.createElement("h1");i.textContent="Chain Restaurant",c.appendChild(i);const s=document.createElement("ul");s.id="nav-bar";const l=document.createElement("li");l.textContent="Home",l.onclick=t;const m=document.createElement("li");m.textContent="Menu",m.onclick=n;const r=document.createElement("li");r.textContent="Contact",r.onclick=e,s.appendChild(l),s.appendChild(m),s.appendChild(r),c.appendChild(s);const p=document.createElement("a");p.href="https://www.vecteezy.com/free-photos",p.textContent="Free Stock photos by Vecteezy",o.appendChild(p),d.appendChild(c),d.appendChild(a),d.appendChild(o),t()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxPQUN0QzBFLEVBQU9yRSxHQUFLLFNBR1osTUFBTXNFLEVBQUtoRixTQUFTSyxjQUFjLE1BQ2xDMkUsRUFBR3hFLFlBQWMsbUJBQ2pCc0UsRUFBTy9ELFlBQVlpRSxHQUVuQixNQUFNQyxFQUFTakYsU0FBU0ssY0FBYyxNQUN0QzRFLEVBQU92RSxHQUFLLFVBRVosTUFBTXdFLEVBQVdsRixTQUFTSyxjQUFjLE1BQ3hDNkUsRUFBUzFFLFlBQWMsT0FDdkIwRSxFQUFTQyxRQUFVM0QsRUFDbkIsTUFBTTRELEVBQVdwRixTQUFTSyxjQUFjLE1BQ3hDK0UsRUFBUzVFLFlBQWMsT0FDdkI0RSxFQUFTRCxRQUFVOUMsRUFDbkIsTUFBTWdELEVBQWNyRixTQUFTSyxjQUFjLE1BQzNDZ0YsRUFBWTdFLFlBQWMsVUFDMUI2RSxFQUFZRixRQUFVckYsRUFFdEJtRixFQUFPbEUsWUFBWW1FLEdBQ25CRCxFQUFPbEUsWUFBWXFFLEdBQ25CSCxFQUFPbEUsWUFBWXNFLEdBQ25CUCxFQUFPL0QsWUFBWWtFLEdBR25CLE1BQU1LLEVBQWtCdEYsU0FBU0ssY0FBYyxLQUMvQ2lGLEVBQWdCbEUsS0FBTyx1Q0FDdkJrRSxFQUFnQjlFLFlBQWMsZ0NBQzlCdUUsRUFBT2hFLFlBQVl1RSxHQUVuQlQsRUFBUTlELFlBQVkrRCxHQUNwQkQsRUFBUTlELFlBQVloQixHQUNwQjhFLEVBQVE5RCxZQUFZZ0UsR0FLcEJ2RCxJQ2xERitELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRkbGUnKTtcblxuICB3aGlsZSAobWlkZGxlLmZpcnN0Q2hpbGQpIHtcbiAgICBtaWRkbGUucmVtb3ZlQ2hpbGQobWlkZGxlLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi5jbGFzc0xpc3QuYWRkKCdwYWdlLWhlYWRlcicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG5cbiAgXG5cbiAgY29uc3QgcmVzdGF1cmFudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICByZXN0YXVyYW50TGlzdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJveCcpO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnV2UgaGF2ZSBubyBsb2NhdGlvbiBiZWNhdXNlIHRoaXMgcmVzdGF1cmFudCBpcyBub3QgcmVhbC4nXG4gIGxvY2F0aW9uLmlkID0gJ2NvbnRhY3QtbG9jYXRpb24nO1xuXG4gIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgb3JkZXIudGV4dENvbnRlbnQgPSAnQ2FsbCA1NTUtNTU1LUZBS0UgdG8gb3JkZXIsIG5vdyB3aXRoIGN1cmJzaWRlIHBpY2t1cCEnXG4gIG9yZGVyLmlkID0gJ2NvbnRhY3Qtb3JkZXInO1xuXG4gIGNvbnN0IG5vd0hpcmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG5vd0hpcmluZy50ZXh0Q29udGVudCA9ICdTZW5kIHlvdXIgYXBwbGljYXRpb24gdG8gaGlyaW5nQGZha2VjaGFpbnJlc3RhdXJhbnQuY29tLidcbiAgbm93SGlyaW5nLmlkID0gJ2NvbnRhY3Qtbm93SGlyaW5nJztcblxuICByZXN0YXVyYW50TGlzdC5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gIHJlc3RhdXJhbnRMaXN0LmFwcGVuZENoaWxkKG9yZGVyKTtcbiAgcmVzdGF1cmFudExpc3QuYXBwZW5kQ2hpbGQobm93SGlyaW5nKTtcbiAgXG5cbiAgY29uc3QgZGV2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGRldkNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1ib3gnKTtcblxuICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGFib3V0LnRleHRDb250ZW50ID0gJ1RoaXMgd2VicGFnZSB3YXMgY3JlYXRlZCB0byBwcmFjdGljZSBET00gbWFuaXB1bGF0aW9uIGZvciBUaGUgT2RpbiBQcm9qZWN0LidcblxuICBjb25zdCBnaXRodWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3RyYXZpczEwMTAvcmVzdGF1cmFudC1wYWdlJztcbiAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJ1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gJ0dpdEh1Yic7XG4gIGdpdGh1Yi5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0b3BMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICB0b3BMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL3BhdGhzL2Z1bGwtc3RhY2stamF2YXNjcmlwdC9jb3Vyc2VzL2phdmFzY3JpcHQvbGVzc29ucy9yZXN0YXVyYW50LXBhZ2UnO1xuICB0b3BMaW5rLnRhcmdldCA9ICdfYmxhbmsnXG4gIHRvcExpbmsudGV4dENvbnRlbnQgPSAnVGhlIE9kaW4gUHJvamVjdCc7XG4gIHRvcC5hcHBlbmRDaGlsZCh0b3BMaW5rKTtcbiAgXG4gIGRldkNvbnRhY3QuYXBwZW5kQ2hpbGQoYWJvdXQpO1xuICBkZXZDb250YWN0LmFwcGVuZENoaWxkKGdpdGh1Yik7XG4gIGRldkNvbnRhY3QuYXBwZW5kQ2hpbGQodG9wKTtcbiAgXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExpc3QpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGRldkNvbnRhY3QpO1xuXG4gIG1pZGRsZS5hcHBlbmRDaGlsZChoMik7XG4gIG1pZGRsZS5hcHBlbmRDaGlsZChjb250YWN0KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21pZGRsZScpO1xuXG4gIHdoaWxlIChtaWRkbGUuZmlyc3RDaGlsZCkge1xuICAgIG1pZGRsZS5yZW1vdmVDaGlsZChtaWRkbGUuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBcbiAgXG5cbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBoMi50ZXh0Q29udGVudCA9ICdXZWxjb21lISc7XG5cbiAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dFBhcmEudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byB0aGUgSG9tZXBhZ2Ugb2YgdGhpcyBDaGFpbiBSZXN0YXVyYW50ISAgT3VyIG1lbnUgaXMgYWJvdXQgdGhlIHNhbWUgYXMgb3RoZXIgY2hhaW4gcmVzdHVyYW50cyBpbiB5b3VyIGFyZWEsIFxuICBhbmQgdGhlIGZvb2QgcXVhbGl0eSBpcyBzaW1pbGFyIHRvbyEgIFdlIGhvcGUgeW91IHNwZW5kIHNvbWUgbW9uZXkgaGVyZSBzb29uISBTZWQgZXUgcGxhY2VyYXQgdGVsbHVzLCBldSBzb2xsaWNpdHVkaW4gZXJhdC4gUGhhc2VsbHVzIGF1Z3VlIGxvcmVtLCBcbiAgdmFyaXVzIHRpbmNpZHVudCBydXRydW0gZWdldCwgc29sbGljaXR1ZGluIHJob25jdXMgZW5pbS4gRHVpcyBlZ2V0IHZlbmVuYXRpcyBxdWFtLiBEb25lYyBjb252YWxsaXMgZGlhbSBldCBlbmltIG1vbGVzdGllIGxhY2luaWEuIFBoYXNlbGx1cyBldSBcbiAgbmlzaSBub24gbWV0dXMgdWx0cmljZXMgbW9sZXN0aWUgbm9uIG5vbiBhdWd1ZS4gQWVuZWFuIHR1cnBpcyBuZXF1ZSwgbWF0dGlzIGF0IHRpbmNpZHVudCB2aXRhZSwgZGlnbmlzc2ltIHNlZCBhdWd1ZS5gO1xuICBcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWJvdXQuaWQgPSAnYWJvdXQnO1xuICBhYm91dC5hcHBlbmRDaGlsZChoMik7XG4gIGFib3V0LmFwcGVuZENoaWxkKGFib3V0UGFyYSk7XG5cbiAgY29uc3Qga2lkc0VhdEZyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2lkc0VhdEZyZWUudGV4dENvbnRlbnQgPSAnS2lkcyBFYXQgRnJlZSEnO1xuICBraWRzRWF0RnJlZS5jbGFzc0xpc3QuYWRkKCdpbmZvLWJsaXAnKTtcblxuICBjb25zdCBzZW5pb3JEaXNjb3VudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VuaW9yRGlzY291bnRzLnRleHRDb250ZW50ID0gJ1NlbmlvciBEaXNjb3VudHMnO1xuICBzZW5pb3JEaXNjb3VudHMuY2xhc3NMaXN0LmFkZCgnaW5mby1ibGlwJyk7XG5cbiAgY29uc3QgbWFyZ2FyaXRhTW9uZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYXJnYXJpdGFNb25kYXlzLnRleHRDb250ZW50ID0gJ01hcmdhcml0YSBNb25kYXlzISc7XG4gIG1hcmdhcml0YU1vbmRheXMuY2xhc3NMaXN0LmFkZCgnaW5mby1ibGlwJyk7XG5cbiAgY29uc3QgZHJpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZHJpbmsuc3JjID0gJy4vYXNzZXRzL2RyaW5rLmpwZyc7XG4gIGRyaW5rLmNsYXNzTGlzdC5hZGQoJ3JvdW5kLWltZycpO1xuXG4gIGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBoYW1idXJnZXIuc3JjID0gJy4vYXNzZXRzL2hhbWJ1cmdlci5qcGcnO1xuICBoYW1idXJnZXIuY2xhc3NMaXN0LmFkZCgncm91bmQtaW1nJyk7XG5cbiAgY29uc3Qgc2FsYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgc2FsYWQuc3JjID0gJy4vYXNzZXRzL3NhbGFkLmpwZyc7XG4gIHNhbGFkLmNsYXNzTGlzdC5hZGQoJ3JvdW5kLWltZycpO1xuXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZS5pZCA9ICdob21lJztcblxuICBjb25zdCB0b3BCbGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b3BCbGlwcy5jbGFzc0xpc3QuYWRkKCdob21lLWJsaXBzJyk7XG5cbiAgY29uc3QgbWlkZGxlQmxpcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWlkZGxlQmxpcHMuY2xhc3NMaXN0LmFkZCgnaG9tZS1ibGlwcycpO1xuXG4gIGNvbnN0IGJvdHRvbUJsaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvdHRvbUJsaXBzLmNsYXNzTGlzdC5hZGQoJ2hvbWUtYmxpcHMnKVxuXG4gIHRvcEJsaXBzLmFwcGVuZENoaWxkKGtpZHNFYXRGcmVlKTtcbiAgdG9wQmxpcHMuYXBwZW5kQ2hpbGQoc2FsYWQpO1xuICBtaWRkbGVCbGlwcy5hcHBlbmRDaGlsZChoYW1idXJnZXIpO1xuICBtaWRkbGVCbGlwcy5hcHBlbmRDaGlsZChhYm91dCk7XG4gIG1pZGRsZUJsaXBzLmFwcGVuZENoaWxkKG1hcmdhcml0YU1vbmRheXMpO1xuICBib3R0b21CbGlwcy5hcHBlbmRDaGlsZChzZW5pb3JEaXNjb3VudHMpO1xuICBib3R0b21CbGlwcy5hcHBlbmRDaGlsZChkcmluayk7XG5cbiAgaG9tZS5hcHBlbmRDaGlsZCh0b3BCbGlwcyk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQobWlkZGxlQmxpcHMpO1xuICBob21lLmFwcGVuZENoaWxkKGJvdHRvbUJsaXBzKTtcblxuICBtaWRkbGUuYXBwZW5kQ2hpbGQoaG9tZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtaWRkbGUnKTtcblxuICB3aGlsZSAobWlkZGxlLmZpcnN0Q2hpbGQpIHtcbiAgICBtaWRkbGUucmVtb3ZlQ2hpbGQobWlkZGxlLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmlkID0gJ21lbnUnO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuY2xhc3NMaXN0LmFkZCgncGFnZS1oZWFkZXInKTtcbiAgaDIudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgY29sdW1uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb2x1bW4xLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29sdW1uJyk7XG4gIGNvbnN0IGNvbHVtbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29sdW1uMi5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbHVtbicpO1xuICBjb25zdCBjb2x1bW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbHVtbjMuY2xhc3NMaXN0LmFkZCgnbWVudS1jb2x1bW4nKTtcblxuICAvL2NvbHVtbiAxXG5cbiAgLy9hcHBldGl6ZXJzXG4gIGNvbnN0IGFwcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXBwcy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBhcHBzaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBhcHBzaDMudGV4dENvbnRlbnQgPSAnQXBwZXRpemVycyc7XG4gIFxuICBjb25zdCBhcHBzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYXBwLnRleHRDb250ZW50ID0gYEFwcGV0aXplciBOdW1iZXIgJHtpfS4uLiAkOC45OWBcbiAgICBhcHAuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgYXBwc0xpc3QuYXBwZW5kQ2hpbGQoYXBwKTtcbiAgfVxuXG4gIGFwcHMuYXBwZW5kQ2hpbGQoYXBwc2gzKTtcbiAgYXBwcy5hcHBlbmRDaGlsZChhcHBzTGlzdCk7XG4gIFxuICAvL3NhbGFkc1xuICBjb25zdCBzYWxhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2FsYWRzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuXG4gIGNvbnN0IHNhbGFkc2gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgc2FsYWRzaDMudGV4dENvbnRlbnQgPSAnU2FsYWRzJztcbiAgXG4gIGNvbnN0IHNhbGFkc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA1OyBpKyspIHtcbiAgICBjb25zdCBzYWxhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc2FsYWQudGV4dENvbnRlbnQgPSBgU2FsYWQgTnVtYmVyICR7aX0uLi4gJDcuOTlgXG4gICAgc2FsYWQuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgc2FsYWRzTGlzdC5hcHBlbmRDaGlsZChzYWxhZCk7XG4gIH1cblxuICBzYWxhZHMuYXBwZW5kQ2hpbGQoc2FsYWRzaDMpO1xuICBzYWxhZHMuYXBwZW5kQ2hpbGQoc2FsYWRzTGlzdCk7XG5cbiAgLy9zYW5kd2ljaGVzXG4gIGNvbnN0IHNhbmR3aWNoZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2FuZHdpY2hlcy5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBzYW5kd2ljaGVzaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzYW5kd2ljaGVzaDMudGV4dENvbnRlbnQgPSAnU2FuZHdpY2hlcyc7XG5cbiAgY29uc3Qgc2FuZHdpY2hQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzYW5kd2ljaFBhcmEudGV4dENvbnRlbnQgPSBcIlNlcnZlZCB3aXRoIGEgc2lkZSBvZiBmcmVuY2ggZnJpZXMuICBTdWJzdGl0dXRlIGEgc2lkZSBvZiBzYWxhZCBmb3IgJDEuOTkuXCJcblxuICBcbiAgY29uc3Qgc2FuZHdpY2hlc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA2OyBpKyspIHtcbiAgICBjb25zdCBzYW5kd2ljaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc2FuZHdpY2gudGV4dENvbnRlbnQgPSBgU2FuZHdpY2ggTnVtYmVyICR7aX0uLi4gJDEwLjk5YFxuICAgIHNhbmR3aWNoLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIHNhbmR3aWNoZXNMaXN0LmFwcGVuZENoaWxkKHNhbmR3aWNoKTtcbiAgfVxuXG4gIHNhbmR3aWNoZXMuYXBwZW5kQ2hpbGQoc2FuZHdpY2hlc2gzKTtcbiAgc2FuZHdpY2hlcy5hcHBlbmRDaGlsZChzYW5kd2ljaFBhcmEpO1xuICBzYW5kd2ljaGVzLmFwcGVuZENoaWxkKHNhbmR3aWNoZXNMaXN0KTtcblxuICBjb2x1bW4xLmFwcGVuZENoaWxkKGFwcHMpO1xuICBjb2x1bW4xLmFwcGVuZENoaWxkKHNhbGFkcyk7XG4gIGNvbHVtbjEuYXBwZW5kQ2hpbGQoc2FuZHdpY2hlcyk7XG5cbiAgLy9jb2x1bW4gMlxuXG4gIC8vbHVuY2hlc1xuICBjb25zdCBsdW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsdW5jaC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBsdW5jaGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbHVuY2hoMy50ZXh0Q29udGVudCA9ICdMdW5jaGVzJztcblxuICBjb25zdCBsdW5jaFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGx1bmNoUGFyYS50ZXh0Q29udGVudCA9IFwiU2VydmVkIHdpdGggYSBjZWFzYXIgc2FsYWQgYW5kIGEgc2lkZSBvZiBmcmVuY2ggZnJpZXMuICBTdWJzdGl0dXRlIGFueSBzaWRlIGZvciAkMS45OS5cIlxuXG4gIFxuICBjb25zdCBsdW5jaExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICBjb25zdCBsdW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbHVuY2gudGV4dENvbnRlbnQgPSBgTHVuY2ggTnVtYmVyICR7aX0uLi4gJDExLjk5YFxuICAgIGx1bmNoLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGx1bmNoTGlzdC5hcHBlbmRDaGlsZChsdW5jaCk7XG4gIH1cblxuICBsdW5jaC5hcHBlbmRDaGlsZChsdW5jaGgzKTtcbiAgbHVuY2guYXBwZW5kQ2hpbGQobHVuY2hQYXJhKTtcbiAgbHVuY2guYXBwZW5kQ2hpbGQobHVuY2hMaXN0KTtcblxuICAvL2Rpbm5lcnNcbiAgY29uc3QgZGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpbm5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBkaW5uZXJoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGRpbm5lcmgzLnRleHRDb250ZW50ID0gJ0Rpbm5lcnMnO1xuXG4gIGNvbnN0IGRpbm5lclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRpbm5lclBhcmEudGV4dENvbnRlbnQgPSBcIlNlcnZlZCB3aXRoIGEgY2Vhc2FyIHNhbGFkIGFuZCBhbnkgc2lkZS5cIlxuXG4gIFxuICBjb25zdCBkaW5uZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgIGNvbnN0IGRpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGlubmVyLnRleHRDb250ZW50ID0gYERpbm5lciBOdW1iZXIgJHtpfS4uLiAkNy45OWBcbiAgICBkaW5uZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgZGlubmVyTGlzdC5hcHBlbmRDaGlsZChkaW5uZXIpO1xuICB9XG5cbiAgZGlubmVyLmFwcGVuZENoaWxkKGRpbm5lcmgzKTtcbiAgZGlubmVyLmFwcGVuZENoaWxkKGRpbm5lclBhcmEpO1xuICBkaW5uZXIuYXBwZW5kQ2hpbGQoZGlubmVyTGlzdCk7XG5cblxuICBjb2x1bW4yLmFwcGVuZENoaWxkKGx1bmNoKTtcbiAgY29sdW1uMi5hcHBlbmRDaGlsZChkaW5uZXIpO1xuXG4gIC8vY29sdW1uIDNcblxuICAvL2Rlc3NlcnRzXG4gIGNvbnN0IGRlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGVzc2VydC5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBkZXNzZXJ0aDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkZXNzZXJ0aDMudGV4dENvbnRlbnQgPSAnRGVzc2VydHMnO1xuXG4gIGNvbnN0IGRlc3NlcnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZGVzc2VydC50ZXh0Q29udGVudCA9IGBEZXNzZXJ0IE51bWJlciAke2l9Li4uICQxMS45OWBcbiAgICBkZXNzZXJ0LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGRlc3NlcnRMaXN0LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuICB9XG5cbiAgZGVzc2VydC5hcHBlbmRDaGlsZChkZXNzZXJ0aDMpO1xuICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRMaXN0KTtcblxuICAvL3NvZnQgZHJpbmtzXG5cbiAgY29uc3Qgc29mdERyaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzb2Z0RHJpbmtzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuXG4gIGNvbnN0IHNvZnREcmlua3NoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNvZnREcmlua3NoMy50ZXh0Q29udGVudCA9ICdTb2Z0IERyaW5rcyc7XG5cbiAgY29uc3Qgc29mdERyaW5rc3BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNvZnREcmlua3NwYXJhLnRleHRDb250ZW50ID0gJ0FsbCBDb2NhLUNvbGEgcHJvZHVjdHMgYXZhaWxhYmxlLi4uICQyLjQ5IHcvIGZyZWUgcmVmaWxscy4nXG5cbiAgc29mdERyaW5rcy5hcHBlbmRDaGlsZChzb2Z0RHJpbmtzaDMpO1xuICBzb2Z0RHJpbmtzLmFwcGVuZENoaWxkKHNvZnREcmlua3NwYXJhKTtcblxuICAvL2FkdWx0IGJldmVyYWdlc1xuICBjb25zdCBhZHVsdEJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZHVsdEJldi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKTtcblxuICBjb25zdCBhZHVsdEJldmgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgYWR1bHRCZXZoMy50ZXh0Q29udGVudCA9ICdBZHVsdCBCZXZlcmFnZXMnO1xuXG4gIGNvbnN0IGFkdWx0QmV2UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWR1bHRCZXZQYXJhLnRleHRDb250ZW50ID0gXCJNdXN0IHNob3cgSUQgYW5kIGJlIG92ZXIgMjEgdG8gb3JkZXIuXCJcblxuICBcbiAgY29uc3QgYWR1bHRCZXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgY29uc3QgYWR1bHRCZXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkdWx0QmV2LnRleHRDb250ZW50ID0gYEFkdWx0IEJldmVyYWdlIE51bWJlciAke2l9Li4uICQ0Ljk5YFxuICAgIGFkdWx0QmV2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGFkdWx0QmV2TGlzdC5hcHBlbmRDaGlsZChhZHVsdEJldik7XG4gIH1cblxuICBhZHVsdEJldi5hcHBlbmRDaGlsZChhZHVsdEJldmgzKTtcbiAgYWR1bHRCZXYuYXBwZW5kQ2hpbGQoYWR1bHRCZXZQYXJhKTtcbiAgYWR1bHRCZXYuYXBwZW5kQ2hpbGQoYWR1bHRCZXZMaXN0KTtcblxuICAvL3NpZGVzXG4gIGNvbnN0IHNpZGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGVzLmNsYXNzTGlzdC5hZGQoJ21lbnUtc2VjdGlvbicpO1xuXG4gIGNvbnN0IHNpZGVzaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBzaWRlc2gzLnRleHRDb250ZW50ID0gJ1NpZGVzJztcblxuICBjb25zdCBzaWRlc1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNpZGVzUGFyYS50ZXh0Q29udGVudCA9IFwiQXZhaWxhYmxlIHRvIG9yZGVyIGZvciAkNC45OS5cIjtcblxuICBcbiAgY29uc3Qgc2lkZXNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgY29uc3Qgc2lkZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHNpZGVzLnRleHRDb250ZW50ID0gYFNpZGUgRGlzaCBOdW1iZXIgJHtpfWBcbiAgICBzaWRlcy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBzaWRlc0xpc3QuYXBwZW5kQ2hpbGQoc2lkZXMpO1xuICB9XG5cbiAgc2lkZXMuYXBwZW5kQ2hpbGQoc2lkZXNoMyk7XG4gIHNpZGVzLmFwcGVuZENoaWxkKHNpZGVzUGFyYSk7XG4gIHNpZGVzLmFwcGVuZENoaWxkKHNpZGVzTGlzdCk7XG4gIFxuICBjb2x1bW4zLmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuICBjb2x1bW4zLmFwcGVuZENoaWxkKHNvZnREcmlua3MpO1xuICBjb2x1bW4zLmFwcGVuZENoaWxkKGFkdWx0QmV2KTtcbiAgY29sdW1uMy5hcHBlbmRDaGlsZChzaWRlcyk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChjb2x1bW4xKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjb2x1bW4yKTtcbiAgbWVudS5hcHBlbmRDaGlsZChjb2x1bW4zKTtcblxuICBtaWRkbGUuYXBwZW5kQ2hpbGQoaDIpO1xuICBtaWRkbGUuYXBwZW5kQ2hpbGQobWVudSk7XG59IiwiaW1wb3J0IGxvYWRDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSBcIi4vbWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5pZCA9ICdoZWFkZXInO1xuXG4gIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtaWRkbGUuaWQgPSAnbWlkZGxlJztcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZm9vdGVyLmlkID0gJ2Zvb3Rlcic7XG5cbiAgLy9oZWFkZXIgY29udGVudCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGgxLnRleHRDb250ZW50ID0gJ0NoYWluIFJlc3RhdXJhbnQnO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIG5hdkJhci5pZCA9ICduYXYtYmFyJztcblxuICBjb25zdCBob21lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGhvbWVMaW5rLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBob21lTGluay5vbmNsaWNrID0gbG9hZEhvbWU7XG4gIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbWVudUxpbmsudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnVMaW5rLm9uY2xpY2sgPSBsb2FkTWVudTtcbiAgY29uc3QgY29udGFjdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250YWN0TGluay50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgY29udGFjdExpbmsub25jbGljayA9IGxvYWRDb250YWN0O1xuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChob21lTGluayk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51TGluayk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0TGluayk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuXG4gIC8vZm9vdGVyIGNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgY29uc3Qgc3RvY2tQaG90b3NMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBzdG9ja1Bob3Rvc0xpbmsuaHJlZiA9IFwiaHR0cHM6Ly93d3cudmVjdGVlenkuY29tL2ZyZWUtcGhvdG9zXCI7XG4gIHN0b2NrUGhvdG9zTGluay50ZXh0Q29udGVudCA9ICdGcmVlIFN0b2NrIHBob3RvcyBieSBWZWN0ZWV6eSc7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChzdG9ja1Bob3Rvc0xpbmspO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtaWRkbGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgXG5cbiAgLy9taWRkbGUgY29udGVudC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbG9hZEhvbWUoKTtcbn0iLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6WyJsb2FkQ29udGFjdCIsIm1pZGRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJoMiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImNvbnRhY3QiLCJpZCIsInJlc3RhdXJhbnRMaXN0IiwibG9jYXRpb24iLCJvcmRlciIsIm5vd0hpcmluZyIsImFwcGVuZENoaWxkIiwiZGV2Q29udGFjdCIsImFib3V0IiwiZ2l0aHViIiwiZ2l0aHViTGluayIsImhyZWYiLCJ0YXJnZXQiLCJ0b3AiLCJ0b3BMaW5rIiwibG9hZEhvbWUiLCJhYm91dFBhcmEiLCJraWRzRWF0RnJlZSIsInNlbmlvckRpc2NvdW50cyIsIm1hcmdhcml0YU1vbmRheXMiLCJkcmluayIsInNyYyIsImhhbWJ1cmdlciIsInNhbGFkIiwiaG9tZSIsInRvcEJsaXBzIiwibWlkZGxlQmxpcHMiLCJib3R0b21CbGlwcyIsImxvYWRNZW51IiwibWVudSIsImNvbHVtbjEiLCJjb2x1bW4yIiwiY29sdW1uMyIsImFwcHMiLCJhcHBzaDMiLCJhcHBzTGlzdCIsImkiLCJhcHAiLCJzYWxhZHMiLCJzYWxhZHNoMyIsInNhbGFkc0xpc3QiLCJzYW5kd2ljaGVzIiwic2FuZHdpY2hlc2gzIiwic2FuZHdpY2hQYXJhIiwic2FuZHdpY2hlc0xpc3QiLCJzYW5kd2ljaCIsImx1bmNoIiwibHVuY2hoMyIsImx1bmNoUGFyYSIsImx1bmNoTGlzdCIsImRpbm5lciIsImRpbm5lcmgzIiwiZGlubmVyUGFyYSIsImRpbm5lckxpc3QiLCJkZXNzZXJ0IiwiZGVzc2VydGgzIiwiZGVzc2VydExpc3QiLCJzb2Z0RHJpbmtzIiwic29mdERyaW5rc2gzIiwic29mdERyaW5rc3BhcmEiLCJhZHVsdEJldiIsImFkdWx0QmV2aDMiLCJhZHVsdEJldlBhcmEiLCJhZHVsdEJldkxpc3QiLCJzaWRlcyIsInNpZGVzaDMiLCJzaWRlc1BhcmEiLCJzaWRlc0xpc3QiLCJjb250ZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiaDEiLCJuYXZCYXIiLCJob21lTGluayIsIm9uY2xpY2siLCJtZW51TGluayIsImNvbnRhY3RMaW5rIiwic3RvY2tQaG90b3NMaW5rIiwiaW5pdGlhbGl6ZVdlYnNpdGUiXSwic291cmNlUm9vdCI6IiJ9