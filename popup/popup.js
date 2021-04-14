const ranges = document.getElementsByClassName('range')
const colorDiv = document.getElementById('colorPreview')

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
