const PASSWORD = "admin123";
let products = JSON.parse(localStorage.getItem("products")) || [
  { name: "Gaming PC Ultra", desc: "Intel i9, RTX 4090, 32GB RAM", price: "₸ 1 200 000" }
];

function saveProducts() { localStorage.setItem("products", JSON.stringify(products)); }

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="card">
        <img src="https://via.placeholder.com/300x200">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="price">${p.price}</div>
        <button onclick="buy()">Купить</button>
        <button onclick="removeProduct(${i})">❌</button>
      </div>
    `;
  });
}

function buy() { alert("Товар добавлен в корзину!"); }

function openAdmin() {
  const pass = prompt("Введите пароль администратора:");
  if(pass === PASSWORD) document.getElementById("adminPanel").style.display = "block";
  else alert("Неверный пароль");
}

function closeAdmin() { document.getElementById("adminPanel").style.display = "none"; }

function addProduct() {
  const name = document.getElementById("pName").value;
  const desc = document.getElementById("pDesc").value;
  const price = document.getElementById("pPrice").value;
  if(!name || !price) return alert("Заполни поля!");
  products.push({ name, desc, price });
  saveProducts();
  renderProducts();
  document.getElementById("pName").value = "";
  document.getElementById("pDesc").value = "";
  document.getElementById("pPrice").value = "";
}

/* ORDER FORM */
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  document.getElementById("orderMessage").textContent = "Спасибо! Ваша заявка отправлена.";
  this.reset();
});

renderProducts();
