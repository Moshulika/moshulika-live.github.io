function gotoPayment()
{

    let price_el = document.getElementById("modal_price");
    let price = price_el.textContent.replace("Price: $", "");

    let nume = document.getElementById("form-nume").value;
    let prenume = document.getElementById("form-prenume").value;
    let mail = document.getElementById("form-mail").value;
    let tel = document.getElementById("form-tel").value;

    let size = document.querySelector('input[name="size"]:checked').value;
    let paper = document.querySelector('input[name="paper"]:checked').value;

    window.open("https://paypal.me/moshudev/" + price, "_blank");
    window.open("addOrder.php/?nume=" + nume + "&prenume=" + prenume + "&mail=" + mail + "&tel=" + tel + "&size=" + size + "&paper=" + paper, "_blank");
    window.open("thank-you.html", "_self");

}

document.getElementById("order-form").addEventListener(
    "submit",
    function(event)
    {

        event.preventDefault();

    },
    false
);