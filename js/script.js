// =========================
// TAMBAH PRODUK
// =========================

const form = document.getElementById("productForm");


if (form) {


form.addEventListener("submit", function(e){

    e.preventDefault();


    const product = {

        name: document.getElementById("productName").value,

        normalPrice: document.getElementById("normalPrice").value,

        price: document.getElementById("surplusPrice").value,

        stock: document.getElementById("stock").value

    };


    // simpan produk
    localStorage.setItem(
        "newProduct",
        JSON.stringify(product)
    );


    alert("Produk berhasil dipublikasikan!");


    window.location.href="products.html";


});

}



// =========================
// TAMPIL PRODUK DI PRODUCTS
// =========================


const productArea = document.getElementById("newProduct");


if(productArea){


const data = localStorage.getItem("newProduct");
console.log(data);



if(data){


const product = JSON.parse(data);



productArea.innerHTML = `

<tr>

<td class="food">

<img src="https://images.unsplash.com/photo-1547592180-85f173990554">


<div>

<b>
${product.name}
</b>

<p>
Rp${product.price}
</p>


</div>


</td>



<td>
Rp${product.price}
</td>


<td>
${product.stock} porsi
</td>


<td>
Hari ini
</td>


<td>

<span class="status">
Aktif
</span>

</td>


<td>

<button class="toggle">
●
</button>

</td>


</tr>

`;



}


}
// =====================
// SELESAIKAN PESANAN
// =====================

function completeOrder(button){

    const row = button.closest("tr");


    const status = row.querySelector("td:nth-child(5)");


    status.innerHTML = `
        <span class="success">
            Selesai
        </span>
    `;


    button.innerHTML = "Selesai";

    button.disabled = true;

    button.style.background="#eee";

    button.style.color="#777";

}