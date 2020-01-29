
function ViewEventCards(){
    function ViewEventCards(){
    
    console.log("amake daka hoise");
     
    const uitil = Utiliy(); 
    const createEventCard=EventCardCreation();
    const eventList=EventCardList();
    const EventListDom = uitil.domQuery.getDomByQuery('.event-list');
    const store_var=Storage();
     
    const event = eventList.EventCardList();
    let proDom = '';
    event.forEach(pro => {
        proDom += createEventCard.createEventCardDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(EventListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewEventCards};
}
 

