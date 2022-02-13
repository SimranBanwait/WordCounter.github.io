

let textbox = document.getElementById("textbox");
textbox.addEventListener('input',function(){
    var textoutput=this.value;
    let char=textoutput.length;
    document.getElementById("char").innerHTML=char;

    textoutput=textoutput.trim();

    let words=textoutput.split(" ");
    cleanList=words.filter(function(el){
        return el != "";
    });
    console.log(words);
    document.getElementById("words").innerHTML=cleanList.length;
})






