function trunc(text, max)
{

    var final = text;

    if(text.length > max)
    {
        final = text.slice(0, max) + "..";
    }

    return final;

}

async function loadProducts()
{

    const response = await fetch("database.json");
    let data = await response.json();

    let div = document.getElementById("product-container");

    let row = document.createElement("div");
    row.classList.add("row");
    row.classList.add("product-row");
    div.append(row);

    for(var id = 0; id < data.length; id++)
    {

        if(id % 3 === 0)
        {
            row = document.createElement("div");
            row.classList.add("row");
            row.classList.add("product-row");
            div.append(row);
        }

        createProduct(data, id, row, true)

    }


}

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createRandomProducts(info, data)
{

    let div = document.getElementById("random_products");

    let row = document.createElement("div");
    row.classList.add("row");
    div.append(row);

    let text = document.createElement("h1");
    text.classList.add("random-products-title");
    text.textContent = info;
    row.append(text);

    let a = [];
    let rand = randInt(0, data.length -1);

    for(var i = 0; i < 2; i++)
    {

        if(a.includes(rand))
        {
            i--;
            rand = randInt(0, data.length-1);
            continue;
        }

        a.push(rand);
        createProduct(data, rand, row, false);

    }

}

async function randomProducts(info)
{

    const response = await fetch("database.json");
    let data = await response.json();

    createRandomProducts(info, data);

}

function createProduct(data, id, row, xl)
{

    let col = document.createElement("div");
    col.classList.add("col-xs-12");
    col.classList.add("col-lg-6");
    if(xl === true) col.classList.add("col-xl-3");

    let product = document.createElement('div');
    product.classList.add("product");

    let product_background = document.createElement("div");
    product_background.classList.add("product-background");
    product_background.style.backgroundImage = data[id].image;

    let product_text = document.createElement('div');
    product_text.classList.add("product-text");

    let text_col = document.createElement('div');
    text_col.classList.add('col-8');

    let text_row = document.createElement('div');
    text_row.classList.add('row');

    let title = document.createElement('h2');
    text_col.classList.add('no-margin');
    title.textContent = data[id].title;

    text_row.append(title);
    text_col.append(text_row);

    let desc_row = document.createElement('div');
    text_row.classList.add('row');
    text_row.classList.add('product-desc');

    let desc = document.createElement('small');
    desc.classList.add("product-desc-text");
    desc.textContent = trunc(data[id].description, 140);

    desc_row.append(desc);
    text_col.append(desc_row);

    let but_col = document.createElement('div');
    but_col.classList.add("col-4");
    but_col.classList.add("product-button");

    let button = document.createElement('button');
    button.classList.add("small-button");
    button.innerHTML = "Details <i class=\"fa-solid fa-arrow-right\"></i>";

    button.addEventListener("click", () =>
    {
       window.location.href = "product.html?id=" + id;
    });

    but_col.append(button);

    product_text.append(text_col);
    product_text.append(but_col);
    product_background.append(product_text);
    product.append(product_background);
    col.append(product);
    row.append(col);

}

document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});