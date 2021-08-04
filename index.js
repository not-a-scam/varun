const varun = document.getElementsByClassName("varun")[0];
const header = document.getElementsByClassName("header")[0];
const description = document.getElementsByClassName("description")[0];
const imgContainer = document.getElementsByClassName("img-container")[0];
const cta = document.getElementsByClassName("cta")[0];

let checkClick = false;

function openCloseMouth(delay){
    if (varun.ariaLabel === "left"){
        varun.src = "./images/open-mouth-left.png";
    } else {
        varun.src = "./images/open-mouth-right.png";
    }
    setTimeout(() => {
        if (varun.ariaLabel === "left"){
            varun.src = "./images/closed-mouth-left.png";
        } else {
            varun.src = "./images/closed-mouth-right.png";
        }
    }, delay);
}

varun.addEventListener("mouseover", () => {
    if (varun.ariaLabel === "left"){
        varun.src = "./images/open-mouth-left.png";
    } else {
        varun.src = "./images/open-mouth-right.png";
    }
});

varun.addEventListener("mouseout", () => {
    if (varun.ariaLabel === "left"){
        varun.src = "./images/closed-mouth-left.png";
    } else {
        varun.src = "./images/closed-mouth-right.png";
    }
});

varun.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/vaaaarrun/";
});

header.addEventListener("click", () => {
    if (header.classList.contains("initial")){
        header.classList.remove("initial");
        document.getElementsByClassName("title")[0].innerHTML = "Hi i'm <span class=\"accent-color\">Varun</span>";
        openCloseMouth(300);
    } else {
        if (checkClick){
            console.log(description.innerHTML);
            if (description.classList.contains("initial")){
                description.classList.remove("initial");
                openCloseMouth(300);
            }
        } else {
            header.style.margin = "auto auto 0";
            description.innerHTML = "<div class=\"card-content\"><p>I am:</p><ul><li>Very handsome</li><li>Very cool</li><li>Varun</li></ul></div>";
            description.classList.add("card", "text-color", "sans-serif", "card-color", "initial");
            openCloseMouth(300);
            checkClick = true;
        }
    }
});

description.addEventListener("click", () => {
    header.style.marginLeft = "0";
    description.style.margin = "auto auto auto 0";
    imgContainer.style.right = "0";
    imgContainer.style.left = "auto";
    cta.innerHTML = '<p class="text-color serif">Click here for</p><p class="text-color serif"><span class="accent-color">MORE</span> Varun</p><img class="arrow-icon" src="./images/arrow.png" alt="">';
    varun.src = "./images/closed-mouth-right.png";
    varun.ariaLabel = "right";
});

