const links = document.querySelectorAll("li").length;
let selectedLinks = 0;
for (let i = 0; i < links; i++) {
    document.querySelectorAll("li")[i].addEventListener("click", function () {
        this.style.backgroundColor="hsl(217, 12%, 63%)";
        this.style.color="#fff";
        // const linkInnerHTML = this.innerHTML;
        // console.log(linkInnerHTML);
        selectedLinks++;
        console.log(selectedLinks);
    });
}
setTimeout(function() {
    document.querySelector("button").addEventListener("click", function() {
            document.querySelector(".container").classList.add("hide");
            document.querySelector(".thank-you").classList.remove("hide");
            document.querySelector("p span").innerHTML=selectedLinks;
    });
}, 100);