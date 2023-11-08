async function loadProduct()
{

    const response = await fetch("database.json");
    let data = await response.json();

    var url = window.location.search;
    var urlParams = new URLSearchParams(url);
    var id = urlParams.get('id');

    let img = document.getElementById("product_image");
    img.src = "css/product-images/" + data[id].image;

    let title = document.getElementById("product_title");
    title.textContent = data[id].title;
    document.title = "Carina Rosanna Tăutu | " + data[id].title;


        let modal_title = document.getElementById("zoom-title");
    modal_title.textContent = data[id].title;

    let desc = document.getElementById("product_description");
    desc.textContent = data[id].description;

    let short_desc = document.getElementById("product_small_desc");
    short_desc.textContent = data[id].short_description;

    createRandomProducts("Some of my other works of art:", data);

}