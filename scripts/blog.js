const navSlide = () => {

    const icon = document.querySelector('.icon');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    icon.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

         //Animate links
    navLinks.forEach((link, index)=>{
        if(link.style.animation)
        {
            link.style.animation = '';
        }else
        {
            link.style.animation = `navLinkFade 3s ease forwards ${index / 7}s`;
        }
        
    });
    });

   
}

navSlide();