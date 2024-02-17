// toggle style switcher 

const styleSwitchToggle = document.querySelector(".style-switcher-toggler");
styleSwitchToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style switcher on scroll 

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open"));
    {
        document.querySelector(".style-switcher").classList.remove("open");       
    }
})

// Stack adalah tipe data berprinsip Last In First Out(LIFO) dimana data yang terakhir kali dimasukkan lah yang diambil keluar.

// contoh penggunaan : Pada sistem undo/redo pada vs code yang memungkinkan kita dapat mengembalikan huruf, kata ataupun kalimat yang diketik terakhir kali yang membantu kita mengembalikan sesuatu yang mungkin salah.

// theme colors 

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActivityStyle(color)
{
    alternateStyles.forEach((style) => 
    {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}

// theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-moon");
    dayNight.querySelector("i").classList.toggle("fa-sun");
    const body = document.body;

    if (!body.classList.contains("dark")) 
    {
        body.classList.add("dark");
    }
    
    else
    {
        body.classList.remove("dark")
    }

})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");

    }
})

