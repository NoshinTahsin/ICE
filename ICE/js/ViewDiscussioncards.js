
function ViewDiscussionCards(){
    function ViewDiscussionCards(){
    
    console.log("amake daka hoise");
     
    const uitil = Utiliy(); 
    const createDiscussionCard=DiscussionCardCreation();
    const DiscussionList=DiscussionCardList();
    const DiscussionListDom = uitil.domQuery.getDomByQuery('.discussion-list');
    const store_var=Storage();
     
    const discussion = DiscussionList.DiscussionCardList();
    let proDom = '';
    discussion.forEach(pro => {
        proDom += createDiscussionCard.createDiscussionCardDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(DiscussionListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewDiscussionCards};
}
 

