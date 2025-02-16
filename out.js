(()=>{var i=class{constructor(e,r,s,d){this.ref=e,this.price=r,this.description=s,this.photo=d}},p=[new i("P001",19.99,"Produit 1 - article de base","https://picsum.photos/100/100?random=1"),new i("P002",29.99,"Produit 2 - article de luxe","https://picsum.photos/100/100?random=2"),new i("P003",39.99,"Produit 3 - article de prestige","https://picsum.photos/100/100?random=3")];function m(t){return p.filter(e=>e.ref.toLowerCase().includes(t.toLowerCase())||e.description.toLowerCase().includes(t.toLowerCase()))}var l=class{constructor(){this.items=this.loadCart()}addToCart(e){let r=this.items.find(s=>s.product.ref===e.ref);r?r.qty++:this.items.push({product:e,qty:1}),this.saveCart()}emptyCart(){this.items=[],this.saveCart()}saveCart(){localStorage.setItem("cart",JSON.stringify(this.items))}loadCart(){let e=localStorage.getItem("cart");return e?JSON.parse(e):[]}},n=new l;function f(t,e){let r=document.createElement("div");return r.classList.add("product"),r.innerHTML=`
        <div class="photo">
            <img src="${t.photo}" alt="${t.ref}">
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger">${t.ref}</strong>
                <strong class="bigger">${t.price} \u20AC</strong>
            </div>
            <div class="details-description">
                ${t.description}
            </div>
        </div>
    `,r.querySelector(".product-add2cart").addEventListener("click",()=>e(t)),r}function u(t,e){let r=document.getElementById("product-list");r.innerHTML="",t.forEach(s=>{r.appendChild(f(s,e))})}function c(){let t=document.getElementById("cart-content"),e=document.getElementById("total-products"),r=document.getElementById("cart-total"),s=n.items.map(o=>`
            <tr>
                <td>${o.product.ref}</td>
                <td>${o.qty}</td>
                <td>${(o.product.price*o.qty).toFixed(2)} \u20AC</td>
            </tr>
        `).join("");t.innerHTML=s;let d=n.items.reduce((o,a)=>o+a.product.price*a.qty,0);r.textContent=d.toFixed(2)+" \u20AC",e.textContent=n.items.reduce((o,a)=>o+a.qty,0)}function y(t){n.addToCart(t),c()}function h(){u(p,y),c();let t=document.getElementById("product-search");t.addEventListener("keyup",r=>{if(r.key==="Enter"){let s=m(t.value);u(s)}}),document.getElementById("empty-cart").addEventListener("click",()=>{n.emptyCart(),c()})}document.addEventListener("DOMContentLoaded",()=>{h()});})();
