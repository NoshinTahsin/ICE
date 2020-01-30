function CardCreation(){ 
 
 function createCardDom(product) {
        return `
          
        <div class="card">
            <div class="product-image">
                <img src="${product.img}" alt="Book_Cover">
            </div>
            <div class="product-info">
                <h4 class="title">${product.title}</h4>
            </div>
              
            <div class="add-cart-action">
                <a href="${product.id}.html" class="w3-btn add-cart-btn button-${product.id}"
                data-id="${product.id}">View Details</a>
            </div>

        </div>
        
        `;
    }

    return {
        
        createCardDom
    }
}