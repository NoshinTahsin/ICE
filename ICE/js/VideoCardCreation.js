function VideoCardCreation(){ 
   
    function createVideoCardDom(product) {
           return `  
           <div class="card">
           
           <div class="video">
           <iframe src="${product.video}" allowfullscreen></iframe>
           </div>
           <div class="product-info">
               <h4 class="title">${product.title}</h4>
               <p class="title">${product.des}</p>

               <div class="dropdown">
               <a href="#">Show More</a>
                <div class="dropdown-content">
                ${product.fulldes}
                </div>
                </div>

               
           </div>

           <div class="commenterImage">
                <img src="${product.img}" />
            </div>
            <div class="commentText">
                <p class="">${product.name}</p><span class="date sub-text">${product.date}</span>
            </div>

            
            
            

       </div>
           `;
       }
   
       return {
           
        createVideoCardDom
       }
   }