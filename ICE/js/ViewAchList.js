
function ViewAchList(){
    function ViewAchList(){
    
    console.log("amake daka hoise");
    
    const uitil = Utiliy(); 
    const createAchReadList=AchReadListCreation();
    const achReadList=AchReadList();
    const achReadListDom = uitil.domQuery.getDomByQuery('.achievement-read-list');
    const store_var=Storage();
     
    const ach = achReadList.AchReadList();
    let proDom = '';
    ach.forEach(pro => {
        proDom += createAchReadList.createAchReadListDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(achReadListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewAchList};
}
 

