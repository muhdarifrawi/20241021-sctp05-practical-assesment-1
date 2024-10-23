(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        createProducts();
    })

})();

let fruits = ["apple", "banana", "ciku", "durian", "elderberry", "fig", "grape", "huckleberry", "ice-apple", "jackfruit",
    "kiwi", "lime", "melon", "orange", "pumpkin", "quince", "raspberry", "strawberry", "tangerine", "ugli",
    "voavanga",
    "watermelon", "yam", "zuchinni"]

let colours = [
    "Azure",
    "Blue",
    "Chocolate",
    "Daffodil",
    "Evergreen",
    "Flame",
    "Gold",
    "Honeydew",
    "Indigo",
    "Jet Black",
    "Khaki",
    "Lavender",
    "Magenta",
    "Navy Blue",
    "Orange",
    "Peach",
    "Queen Blue",
    "Red",
    "Silver",
    "Tan",
    "Ultramarine",
    "Violet",
    "White",
    "Xanadu",
    "Yellow",
    "Zaffre"
]

createProducts = () => {
    let productArea = document.querySelector("#product-area");


    for (i = 0; i < 31; i++) {
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        const randomColour = colours[Math.floor(Math.random() * colours.length)];

        let cards = `
            <div class="col d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <img src="images/product-buy.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${randomColour} ${randomFruit}</h5>
                        <p class="card-text">
                            A hint of ${randomFruit} that makes you think of the colour ${randomColour}
                        </p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
            `
        productArea.innerHTML += cards;
    }
}