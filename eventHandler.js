let upper_case = document.getElementById("upper-case");
let lower_case = document.getElementById("lower-case");
let proper_case = document.getElementById("proper-case");
let sentence_case = document.getElementById("sentence-case");
let save_text = document.getElementById("save-text-file");
let textArea = document.querySelector("textarea");

upper_case.addEventListener("click", function (){
    let str = textArea.value.toUpperCase();
    console.log(str);
    textArea.value = str;
});

lower_case.addEventListener("click", function (){
    let str = textArea.value.toLowerCase();
    console.log(str);
    textArea.value = str;
});

proper_case.addEventListener("click", function(){
    let str = textArea.value.toLowerCase();
    str = str.split(" ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    textArea.value = str.join(" ");
});

sentence_case.addEventListener("click", function(){
    let str = textArea.value.toLowerCase();
    str = str.split(". ");
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    textArea.value = str.join(". ");
});

save_text.addEventListener("click", function(){
    let text = textArea.value;
    let filename = "text.txt";
    download(filename,text);
}, false);

function download(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}