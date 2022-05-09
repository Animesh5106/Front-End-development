screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue ="";
            screen.value = screenValue;
        }
        else if(buttonText == "←")
        {
            screenValue= screenValue.slice(0, -1);
            screen.value =screenValue;
        }
        
        else if (buttonText == '=') {
            scvalue= eval(screenValue);
            screen.value =scvalue;
            screenValue =scvalue;
        }
       
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}
