const ranges = document.getElementsByClassName('range')
const colorDiv = document.getElementById('colorPreview')
const checkBox = document.getElementById('hashCheck')

let red = 100;
let green = 100;
let blue = 100;

for(let i = 0; i < 3; i++){
    let currRange = ranges[i]

    currRange.addEventListener('input', ()=>{
        switch(i){
            case 0: 
                red = currRange.value
                break
            case 1: 
                green = currRange.value
                break
            case 2: 
                blue = currRange.value
                break
        }

        colorDiv.style.background = `rgb(${red}, ${green}, ${blue})`
    })
}

colorDiv.addEventListener('click', ()=>{

    console.log(red + ' ' + green + ' ' + blue)
    console.log(red.toString(16) + ' ' + green.toString(16) + ' ' + blue.toString(16))

    if(checkBox.checked) {
        textToClipboard (`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`)
    }  else {
        textToClipboard (`${red.toString(16)}${green.toString(16)}${blue.toString(16)}`)
    } 
})

// thx https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard

function textToClipboard (text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}