var arr = [
    {
        dp: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fH", stories: "https://images.unsplash.com/photo-1655222733429-7e4e4df830e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1639435904425-e8d35f07a47a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc0fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D", stories: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM1fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1702058573021-60cc8604edf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwMXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8", stories: "https://images.unsplash.com/photo-1684283377169-e3dcfec7790c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fFM0TUtMQXNCQjc0fHxlbnwwfHx8fHw%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1712546852197-b279a870c926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8", stories: "https://images.unsplash.com/photo-1712826805986-9570575c7cd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1672753755304-140359dc739a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0OHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",stories:"https://images.unsplash.com/photo-1690165901976-a167ce744058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1OHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1711574786543-0078cf358b50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4MXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",stories:"https://images.unsplash.com/photo-1589572441190-5cb43e3585da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3MHxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8",stories:"https://images.unsplash.com/photo-1548235069-ece12da94d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxMXxTNE1LTEFzQkI3NHx8ZW58MHx8fHx8"
    },
];

var storiyan = document.querySelector("#storiyan");

var clutter = "";

arr.forEach(function (elem, index) {
    // console.log(elem,index);
    clutter += `<div class="stories">
<img id="${index}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    // console.log(arr[dets.target.id].stories);
    document.querySelector("#full_screen").style.display = "block"
    document.querySelector("#full_screen").style.backgroundImage = `url(${arr[dets.target.id].stories})`

setTimeout(function(){
  document.querySelector("#full_screen").style.display = "none";
},3000)

});
