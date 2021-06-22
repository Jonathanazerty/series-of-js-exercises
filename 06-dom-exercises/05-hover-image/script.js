

(function() {

    // TODO: make variables to id them
    const img = document.querySelector("img");

    const sourceImage = img.getAttribute("src");

    const hoverImage = img.getAttribute("data-hover");

    // TODO: change image when hovering over image
    img.addEventListener("mouseover", function( ){
        img.src = hoverImage;
    });


    img.addEventListener("mouseout", function(){
        img.src = sourceImage;
    });
})();
