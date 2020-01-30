function BlogCardCreation(){ 
   
    function createBlogCardDom(product) {
           return `  
           <div class="card">
               <div class="product-info">
                   <h4 class="title">${product.title}</h4>
                   <p class="title">${product.des}</p>
               </div>
                
               <div class="add-cart-action">
                   <a href="read.html" class="w3-btn add-cart-btn button-${product.id}"
                   data-id="${product.id}">Get Blogs!</a>
               </div>
    
           </div>
           
           `;
       }
   
       return {
           
        createBlogCardDom
       }
   }