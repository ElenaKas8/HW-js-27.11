//* 1- Создайте новый элемент , добавьте ему текст и добавьте его после элемента с id "existingElement".

let element = document.createElement("p");
element.innerText = "Hallo everybody!";
let existingElement = document.getElementById("existingElement");
existingElement.append(element);

//*2-Создайте новый элемент , добавьте ему текст и вставьте его внутрь элемента с id "parentElement"
let element2 = document.createElement("p");
element2.innerText = "Im Block2";
let parentElement = document.getElementById("parentElement");
parentElement.append(element2);

//*3-Удалите элемент с классом "removeMe".

let removeMe = document.querySelector(".removeMe");
removeMe.remove();

//*Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, unit_price, count)

const products = [
  { title: "IPhon", unit_price: 10, count: 5 },
  { title: "Service", unit_price: 20, count: 3 },
  { title: "Cosmetic", unit_price: 15, count: 7 },
];

// Функция для создания карточек товаров
function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = product.title;

  const price = document.createElement("p");
  price.textContent = `Unit Price: $${product.unit_price.toFixed(2)}`;

  const count = document.createElement("p");
  count.textContent = `Count: ${product.count}`;

  card.append(title);
  card.append(price);
  card.append(count);

  return card;
}

// Создание карточек для каждого товара
const container = document.body;
products.forEach((product) => {
  const card = createProductCard(product);
  container.append(card);
});

//*--5 Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, unit_price, count), а внизу выводится итоговая сумма товаров и их количество.
