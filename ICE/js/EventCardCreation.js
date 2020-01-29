function EventCardCreation(){ 
   
    function createEventCardDom(product) {
           return `  
                <div class="thumbnail">
                    <img src="${product.img}" alt="AUSTDC">
                    <p><strong>${product.title}</strong></p>
                    <p>${product.des}</p>
                    <a href="read.html" class="w3-btn w3-green add-cart-btn button-${product.id}"
                   data-id="${product.id}">Register</a>
                  </div>
           
           `;
       }
   
       return {
           
        createEventCardDom
       }
   }