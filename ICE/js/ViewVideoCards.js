
function ViewVideoCards(){
    function ViewVideoCards(){
    
    console.log("amake daka hoise");
     
    const uitil = Utiliy(); 
    const createVideoCard=VideoCardCreation();
    const VideoList=VideoCardList();
    const VideoListDom = uitil.domQuery.getDomByQuery('.video-list');
    const store_var=Storage();
     
    const Video = VideoList.VideoCardList();
    let proDom = '';
    Video.forEach(pro => {
        proDom += createVideoCard.createVideoCardDom(pro);
    });

    console.log("amake daka hoise");
    console.log(proDom);
    uitil.domQuery.setDomInnerHTML(VideoListDom,proDom);

    
    //const btn = uitil.domQuery.getDomByClass('add-cart-btn');
    // addToCartEvent(btn);
    
    }




    return {ViewVideoCards};
}
 

