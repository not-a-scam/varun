const varun = document.getElementsByClassName("varun")[0];
const header = document.getElementsByClassName("header")[0];
const description = document.getElementsByClassName("description")[0];
const imgContainer = document.getElementsByClassName("img-container")[0];
const cta = document.getElementsByClassName("cta")[0];

let checkClick = false;
let headerTop = {"initial": 0, "final":0};

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
    let id = null;
    let pos = 0;
    let step = 0;
    if (header.classList.contains("initial")){
        header.classList.remove("initial");
        document.getElementsByClassName("title")[0].innerHTML = "Hi i'm <span class=\"accent-color\">Varun</span>";
        clearInterval(id);
        openCloseMouth(300);
        id = setInterval(() => {
            const titleBg = document.getElementsByClassName("title-bg")[0];
            if (pos == 100){
                clearInterval(id);
                pos = 0;
            } else {
                pos++;
                titleBg.style.width = pos + "%";
            }
        }, 8);
        headerTop.initial = header.getBoundingClientRect().top;
        
    } else {
        if (checkClick){
            if (description.classList.contains("initial")){
                description.classList.remove("initial");
                openCloseMouth(300);
            }
        } else {
            header.style.visibility = "hidden";
            setTimeout(()=>{
                console.log("hi")
            }, 1000);
            description.innerHTML = "<div class=\"card-content\"><p>I am:</p><ul><li>Very handsome</li><li>Very cool</li><li>Varun</li></ul></div>";
            description.classList.add("card", "text-color", "sans-serif", "card-color", "initial");

            header.style.margin = "auto auto 0";
            headerTop.final = header.getBoundingClientRect().top;
            pos = headerTop.initial - headerTop.final;
            step = pos / 100;
            clearInterval(id);
            openCloseMouth(500);
            let first = true
            id = setInterval(() => {
                if (pos > 0){
                    if (first){
                        header.style.visibility = "visible";
                        first = false;
                    } else {
                        pos -= step;
                        header.style.transform= "translateY("+ pos+"px)";
                    }
                } else {
                    clearInterval(id);
                    pos = 0;
                }
            } ,5);


            checkClick = true;
        }
    }
});

description.addEventListener("click", () => {
    if (screen.width > 1050){
        header.style.marginLeft = "0";
        description.style.margin = "auto auto auto 0";
        imgContainer.style.right = "0";
        imgContainer.style.left = "auto";
        imgContainer.style.height = "auto";
        imgContainer.style.width = "30%";
        cta.innerHTML = '<p class="text-color serif">Click here for</p><p class="text-color serif"><span class="accent-color">MORE</span> Varun</p><img class="arrow-icon" src="./images/arrow.png" alt="">';
        varun.src = "./images/closed-mouth-right.png";
        varun.ariaLabel = "right";
        varun.style.height = "auto";
        varun.style.width = "100%";
    }
});

