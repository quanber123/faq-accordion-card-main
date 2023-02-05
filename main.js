const accordionIc = document.querySelectorAll(".accordion-ic");

accordionIc.forEach(function(click){
    click.addEventListener('click', function(){
        click.classList.toggle('active');
        let accordionContent = click.nextElementSibling;
        if(accordionContent.style.display === "none"){
            accordionContent.style.display = "block";
        }else{
            accordionContent.style.display = "none";
        }
    })
})