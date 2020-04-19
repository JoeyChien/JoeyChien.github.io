//js版-todo

    document.getElementById("addImg").addEventListener("click", function(event){
        let url = document.getElementById('imgUrl').value;
        let elem = document.createElement("img");
        elem.scr = url;
        
        document.getElementById("imgList").appendChild(elem);
        console.log(elem.scr);
    }, false); 



