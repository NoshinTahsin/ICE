function DiscussionCardCreation(){ 
   
    function createDiscussionCardDom(product) {
           return `  

           <div class="detailBox">
           <div class="titleBox">
             <label>Comment Box</label>
               <button type="button" class="close" aria-hidden="true">&times;</button>
           </div>
           <div class="commentBox">
               
               <p class="taskDescription">${product.title}</p>
           </div>
           <div class="actionBox">
               <ul class="commentList">
                   <li>
                       <div class="commenterImage">
                         <img src="${product.img}" />
                       </div>
                       <div class="commentText">
                           <p class="">${product.des}</p><span class="date sub-text">on March 5th, 2014</span>
                       </div>
                   </li>
                   <li>
                       <div class="commenterImage">
                         <img src="${product.img}" />
                       </div>
                       <div class="commentText">
                           <p class="">${product.des}</p> <span class="date sub-text">on March 5th, 2014</span>
       
                       </div>
                   </li>
                   <li>
                       <div class="commenterImage">
                         <img src=${product.img} />
                       </div>
                       <div class="commentText">
                           <p class="">${product.des}</p> <span class="date sub-text">on March 5th, 2014</span>
       
                       </div>
                   </li>
               </ul>
               <form class="form-inline" role="form">
                   <div class="form-group">
                       <input class="form-control" type="text" placeholder="Your comments" />
                   </div>
                   <div class="form-group">
                       <button class="btn w3-btn w3-blue add-comment-btn">Add</button>
                   </div>
               </form>
           </div>
       </div>
           `;
       }
   
       return {
           
        createDiscussionCardDom
       }
   }