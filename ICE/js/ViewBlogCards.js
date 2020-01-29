
function ViewBlogCards(){
    function ViewBlogCards(){
    
    console.log("amake daka hoise");
     
    const uitil = Utiliy(); 
    const createBlogCard=BlogCardCreation();
    const blogList=BlogCardList();
    const blogListDom = uitil.domQuery.getDomByQuery('.product-list');
    const store_var=Storage();
     
    const blog = blogList.BlogCardList();
    let proDom = '';
    blog.forEach(pro => {
        proDom += createBlogCard.createBlogCardDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(blogListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewBlogCards};
}
 

