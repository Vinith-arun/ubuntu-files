

let searchInput = document.querySelector('#searchBar');
searchInput.addEventListener('keyup', searchs);
const vegetablesContainer = document.getElementById("vegetables");
function searchs(e) {
  searchTerm = e.target.value.toLowerCase();
  vegetablesContainer.innerHTML = ''
  let newItems = listOfVegetables.filter((title) => {
    if (title.name.toLowerCase().trim().includes(searchTerm.trim().toLowerCase())) return true;
  });
  console.log('new', newItems)
  writeDate(newItems);
}

const listOfVegetables = [
  {
    name: "Apple",
    price: "25",
    url: "image/apple.jpg"
  },
  {
    name: "Carrot",
    price: "15",
    url: "image/carrot.jpg"
  },
  {
    name: "Beans",
    price: "20",
    url: "image/beans.jpg"
  },
  {
    name: "Beetroot",
    price: "12",
    url: "image/Beetroot.jpg"

  },
  {
    name: "Cabbage",
    price: "30",
    url: "image/cabbage.jpg"

  },
  {
    name: "Onion",
    price: "28",
    url: "image/onion.jpg"
  },
  {
    name: "Tomato",
    price: "7",
    url: "image/tomato.jpg"
  },
  {
    name: "Brinjal",
    price: "16",
    url: "image/brinjal.jpg"
  },
  {
    name: "Capcicum",
    price: "40",
    url: "image/capcicum.jpg"
  },
  {
    name: "Potato",
    price: "18",
    url: "image/potato.jpg"
  },
  {
    name: "Pumpkin",
    price: "45",
    url: "image/pumpkin.jpg"
  },
  {
    name: "BitterGuard",
    price: "14",
    url: "image/bitterguard.jpg"
  },
  {
    name: "Califlower",
    price: "15",
    url: "image/califlower.jpg"
  },
];


function initStore() {
  const items = listOfVegetables;
  writeDate(listOfVegetables);

}

function writeDate(items) {

  items.forEach(item => {
    const li = document.createElement('div');
    li.className = "temp"
    li.innerHTML = `<div id="veges" class="vege" name=${item.name}>
    <h2 class="veg">${item.name}</h2>
    <p>Price Rs. ${item.price}</p>
    <img src=${item.url} alt="Lamp" width="70%" style="border-radius:10" height="100" />
    </div>`
    vegetablesContainer.appendChild(li);
  })
}
initStore();