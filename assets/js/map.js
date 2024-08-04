document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML=`
        <iframe class="contact__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1549.9040388044211!2d-80.28267819517554!3d26.15177493464443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a83608eb9d41%3A0x24f51c2e43b6fb99!2sSunrise%2C%20Florida!5e0!3m2!1ses!2sus!4v1718388577316!5m2!1ses!2sus" style="border:0;" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
    `; 
    }, 500)
});