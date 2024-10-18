let num1 = 0;
let op = null ;
let num2 =  0; 
let result = 0;
let input = document.getElementById('inpute')
 
function typingNumber(N) {
    input.value +=  N
}
function operation(opValue) {
 num1 = parseFloat(input.value)
 op = opValue
 input.value = NaN
}
function equals() {
    num2 = parseFloat(input.value)
    switch (op) {
        case '+' :
            result = num1 + num2
            break;
            case '-' :
                result = num1 - num2
                break;
                case '*' :
                    result =   num1 * num2
                    break;
                    case '/'  :
                        result =  num1 / num2
                        break;
   
    }
    input.value = result ;
}