function EventCardCreation(){ 
   
    function createEventCardDom(product) {
           return `  
           <div class="card">
           <div class="product-image">
               <img src="${product.img}" alt="Book_Cover">
           </div>
           <div class="product-info">
               <h4 class="title">${product.title}</h4>
               <p class="title">${product.des}</p>
           </div>
            
           <div class="add-cart-action">
               <a href="#" class="w3-btn w3-green add-cart-btn button-${product.id}"
               data-id="${product.id}">Register</a>
           </div>

       </div>
           `;
       }
   
       return {
           
        createEventCardDom
       }
   }