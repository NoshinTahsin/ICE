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
               <a href="${product.link}" class="w3-btn add-cart-btn button-${product.id}"
               data-id="${product.id}">Register</a>
           </div>

       </div>
           `;
       }
   
       return {
           
        createEventCardDom
       }
   }