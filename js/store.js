(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        createProducts();
    })

})();

createProducts = () => {
    let productArea = document.querySelector("#product-area");

    let cards = `
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem;">
            <img src="https://placehold.co/300x200" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    `
    for(i=0;i<31;i++){
        productArea.innerHTML += cards;
    }
}