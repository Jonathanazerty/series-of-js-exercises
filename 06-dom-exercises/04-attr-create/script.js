
(function() {


    // TODO: get the image 
    const sourceImage = document.querySelector("#source");

    const valueImage = sourceImage.getAttribute("data-image");
    console.log(valueImage);


    // TODO: create new element
    const newImage = document.createElement("img");

    newImage.src = valueImage;

    // TODO: add new image on target
    document.querySelector("#target").appendChild(newImage);
    

    // TODO: remove original element
    sourceImage.remove();


})();
