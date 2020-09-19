$(function(){
    $(document).ready(function () {
        $("#green_monster").mlens(
        {
            imgSrc: $("#green_monster").attr("data-big"),	// path of the hi-res version of the image
            lensShape: "square",				// shape of the lens (circle or square)
            lensSize: 200,					// size of the lens (in px)
            borderSize: 1,					// size of the lens border (in px)
            borderColor: "#fff",				// color of the lens border (#hex)
            borderRadius: 0	,				// border radius (optional, only if the shape is square)
        });
    });
    $('.spinnerExample').spinner({});
    


    let $gwc = $('.gwc');
    // init();
    $gwc.click(function(){
        let good_id =$(this).parent().text();
        console.log(good_id)
    })
})