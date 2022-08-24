fetch(products.json)
.then(function(response){
    return response.json();

})
.then(function(products){
    let placeholder=document.querySelector("#data");
    let out ="";
    for(let prouct of products){
        out +=`
        <tr>
        <td>${product.Name}</td>
        <td>${product.Age}</td>
        <td>${prouct.Gendder}</td>}
        </tr>
        `;
    }
    placeholder.innerHTML=out;
})