
function ViewBlogList(){
    function ViewBlogList(){
    
    console.log("amake daka hoise");
    
    const uitil = Utiliy(); 
    const createReadList=BlogReadListCreation();
    const readList=BlogReadList();
    const readListDom = uitil.domQuery.getDomByQuery('.read-list');
    const store_var=Storage();
     
    const blog = readList.BlogReadList();
    let proDom = '';
    blog.forEach(pro => {
        proDom += createReadList.createReadListDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(readListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewBlogList};
}
 

