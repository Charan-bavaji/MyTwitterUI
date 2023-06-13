
let data = [
    {
        img: "photo.jpg",
        name: "Coco Jk",
        id: "@cocojk07",
        time: "5h",
        text: "Suggest me some sites to solve beginner level javascript problems",
        contentImg: "javascriptBs.png"
    },
    {
        img: "photo.jpg",
        name: "Coco Jk",
        id: "@cocojk07",
        time: "5h",
        text: "Suggest me some sites to solve beginner level javascript problems",
        contentImg: "javascriptBs.png"
    }
]

// img,UserName,id,time,//span-description// 

let profileData = document.getElementById("profileData")

data.forEach(function (datas) {
    let listname = document.createElement("li");
    listname.innerText = datas.name + " " + datas.id;
    profileData.appendChild(listname);
    let container = document.querySelectorAll("#containerProfile")
    let imgElement = document.createElement("img");
    imgElement.src = datas.img;
    imgElement.alt = datas.id;
    container.appendChild(imgElement);
})
