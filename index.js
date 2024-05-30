const menu = [
    

    {
        id:"2",
        category: "Burger",
        price:"N1400",
        image: "./image/imageB.jfif"
    },

    {
        id:"3",
        category: "Pizza",
        price:"N1200",
        image: "./image/imageC.jfif"
    },

    {
        id:"4",
        category: "Burger",
        price:"N1500",
        image: "./image/imageD.jpg"
    },

    {
        id:"5",
        category: "Pizza",
        price:"N1200",
        image: "./image/imageE.jfif"
    },

    {
        id:"6",
        category: "Burger",
        price:"N1200",
        image: "./image/imageF.jpg"
    },

    {
        id:"7",
        category: "Burger",
        price:"N1600",
        image: "./image/imageG.jpg"
    },

    {
        id:"8",
        category: "Burger",
        price:"N1200",
        image: "./image/imageH.jpg"
    },

    ];

    

    const bars = document.querySelector(".menu-icon i");
    const menu_list = document.querySelector(".nav-list");
 
        
 
bars.addEventListener("click", function () {
    if (menu_list.classList.contains("active")) {
        menu_list.classList.remove("active");

    } else{
        menu_list.classList.add("active");
        // bars.innerHTML="X";
    }
    // menu_list.classList.toggle("active");
});


const container= document.querySelector(".menu-images");
const btn = document.querySelectorAll(".menu-btn");


btn.forEach(element =>{
  element.addEventListener("click", (x)=>{
    let categorys = x.currentTarget.dataset.id;
    let filtered = menu.filter((item) =>{
        
        if (item.category == categorys) {
            return item
        }

    })

    console.log(filtered);

      if (categorys == "All") {
          display(menu);
      } else {
        display(filtered)
      }
    
    // console.log(filtered);

  })


});



document.addEventListener("DOMContentLoaded",function () {

    display(menu)
 });


 
 
 function display(item) {
     let detail = item.map((x) => {
         return `
         <div class="img-container">
            <img src=${x.image} alt="">
         </div>..
     `
     })
     
     detail = detail.join("");
     container.innerHTML = detail;
    
 }







 let a = [
    {   
        paragraph: "Lorem ipsum dolor \sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
        title: "Moana Michell",
        paragraph2: "magna aliqua",
        Image: "./image/anYiA7xWJrI.jpg",
        Image2: "./image/JOHNOZOH.jpg"


    },

    {   
        paragraph: "Lorem ipsum dolor \sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
        title: "Moana Michell",
        paragraph2: "magna aliqua",
        Image: "./image/JOHNOZOH.jpg",
        Image2: "./image/candlewoman.jpg"
    },

        {   
        paragraph: "Lorem ipsum dolor \sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
        title: "Moana Michell",
        paragraph2: "magna aliqua",
        Image: "./image/whitehair.jpg",
        Image2: "./image/wWH_0E6KdnM.jpg"

    },

    {   
        paragraph: "Lorem ipsum dolor \sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam",
        title: "Moana Michell",
        paragraph2: "magna ",
        Image: "image/latinagirl.jpg",
        Image2: "image/ntsEIUcbEd8.jpg"
    }
];


const img = document.getElementById('circle-img');
const img2 = document.getElementById('circle-img2');
const paragraph = document.getElementById('paragraph');
const title = document.getElementById('title');
const paragraph2 = document.getElementById('paragraph2');
const img_btn = document.getElementById('img-btn');
const img_btn2 = document.getElementById('img-btn2');
let count = 0;

img_btn.addEventListener('click', function(){
    count++;
    if (count >= a.length) {
        count = 0;
    } 
    
    paragraph.innerHTML=a[count].paragraph;
    title.innerHTML = a[count].title;
    paragraph2.innerHTML = a[count].paragraph2;
    img.src= a[count].Image;
    img2.src= a[count].Image2;

});

img_btn2.addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = a.length-1;
    }
   
    paragraph.innerHTML=a[count].paragraph;
    title.innerHTML = a[count].title;
    paragraph2.innerHTML = a[count].paragraph2;
    img.src= a[count].Image;
    img2.src= a[count].Image2;

});