"use strict";

function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.textDecoration = "";
        tablinks[i].style.textUnderlineOffset = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    elmnt.style.textDecoration = "underline rgb(89, 134, 230) 5px";
    elmnt.style.textUnderlineOffset = "25px";
    console.log(elmnt);
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//buy pannel

var x = document.getElementById("buy_1");
// array dict array dictionary

var ardict = [
    {
        name: "bigtemple",
        photo: "plans\\img\\big_temple_img.jpeg",
        author: "raja",
        price: "500",
        description: `this old guy is still look young`,
    },
    {
        name: "pentagon",
        photo: "plans\\img\\pentagon_img.jpeg",
        author: "deorge david",
        price: "500",
        description: `don't tell anyone this is where the  illuminati meetings happen`,
    },
    {
        name: "statue of liberty",
        photo: "plans\\img\\statue_of_liberty_img.jpeg",
        author: "femgr",
        price: "500",
        description: `very tall lady always ready to beat you with torch light`,
    },
    {
        name: "taj mahal",
        photo: "plans\\img\\taj_img.jpeg",
        author: "shaj",
        price: "500",
        description: "you will love it",
    },
    {
        name: "Great wall of china",
        photo: "plans\\img\\wall_of_china_img.jpeg",
        author: "quin shi",
        price: "500",
        description: "very long",
    },
];

//adding section html

console.log(ardict[1].author);
console.log(ardict.length);

for (var i = 0; i < ardict.length; i++) {
    var y = `
    <hr />
    <section >
    <style>
                #container1:hover {
                    opacity: 1;
                    z-index: 4;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                    border-radius: 20px;
                    justify-content: safe;
                    background-color: #fff;


                    padding: 16px 32px;




                }

                #container1:hover #container1head {
                    font-weight: 600;
                    font-size: medium;

                    text-decoration-line: underline;

                    padding: 3px 3px;
                }

                #container1:hover #containerimg {
                    padding: 3px 3px;
                }
            </style>
<div class="row" id="container1">


    <div>
        <h6  id="container1head">${ardict[i].name}</h2>
    </div>
    <div class="col-lg-4 ms auto"  id="containerimg">
        <img src=${ardict[i].photo} alt="Error 404 not found"
        style="border-radius: 10px;   max-width: 14cm;
        max-height:7cm ; ">
    </div>
    <div class="col-lg-6 ms auto">
        <a>details</a>
        <p>
            copyrighted<br>author:${ardict[i].author}<br>price:${ardict[i].price}<br>description:${ardict[i].description}<br>
        </p>
    </div>




</div>


</section>

`;

    var el = document.createElement("newtags");
    el.innerHTML = y;
    x.appendChild(el);
}

//hover effects

x = document.getElementById("newtags");

//sell

var thumpnail = document.querySelector("#myFile");
var title = document.querySelector("#selltitle");
var price = document.querySelector("#sellprice");
var description = document.querySelector("#selldescription");
var soiltype = document.querySelector("#sellsoiltype");
var uploadblueprint = document.querySelector("#sellmainfile");
var youtube = document.querySelector("#sellvideo");
var submit = document.querySelector("#sellsubmit")
function logger() {
    console.log(thumpnail.value)
    console.log(title.value)
    console.log(price.value)
    console.log(description.value)
    console.log(soiltype.value)
    console.log(uploadblueprint.value)
    console.log(youtube.value)
    //sending dict
    var seller = {
        thumpnail: thumpnail.value,
        title: title.value,
        price: price.value,
        description: description.value,
        soiltype: soiltype.value,
        youtube: youtube.value,
        uploadblueprint: uploadblueprint.value
    }

    console.log("seller" + seller)

    x = youtube.value
    console.log(typeof (x))
    let y = x.slice(0, 16)
    console.log(y)
    if (y == "https://youtu.be") {
        console.log("it is an youtube link")
        return y
    }
    else {
        alert("it have to be an youtube link⚠️")
        return false
    }
    /*  //sending dict
      seller = {
          thumpnail: thumpnail.value,
          title: title.value,
          price: price.value,
          description: description.value,
          soiltype: soiltype.value,
          youtube: youtube.value,
          uploadblueprint: uploadblueprint.value
      }
  
      console.log(seller)
      */
}

