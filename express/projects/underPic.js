const btn = document.querySelector("#pictureBox");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

btn.addEventListener("mousemove", throttleFunction((dets) => {

    // Your less repeatation code
    var div = document.createElement("div");
    div.classList.add("imgdiv");

    // div ko sahi position pe lagane ke liye
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    // image create
    var img = document.createElement("img");
    img.setAttribute("src", "https://plus.unsplash.com/premium_photo-1701186643238-1d0218c6515d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D")
    div.appendChild(img);

    // screen pe div ko add karne ke liye
    document.body.appendChild(div);

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
    });

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2
    });

    
    setTimeout(function () {
        div.remove();
    }, 1500);

}, 500));  
