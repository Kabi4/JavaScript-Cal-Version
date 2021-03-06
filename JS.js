var intial_one = 0;
var intial_other = 0;
var one_decimal = 1;
var one_decimal_bool=false;

const displayText = document.querySelector('.operation');
const resultText = document.querySelector('.result');

var display = "";
var oldSign = "";
var oldSignOperation = "";

var lastWasDigit=false;
var myLastWasNeg=false;
var first=true;
var equals=false;

function updateOperationLine(s){
	switch(s){
		case 1:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(1/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 2:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(2/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 3:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(3/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 4:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(4/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 5:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(5/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 6:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(6/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 7:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(7/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 8:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(8/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 9:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(intial_one!==0)intial_one = intial_one/10;
			}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			intial_one = intial_one*10+(9/one_decimal);
			if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
			displayText.textContent = intial_one;
			lastWasDigit=true;
			equals=false;
			break;
		case 0:
			if(one_decimal_bool === true){
				one_decimal=one_decimal*10;
				if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
				displayText.textContent = intial_one.toPrecision(Math.log10(one_decimal)+1);
				 
			}
			else{if(myLastWasNeg===true){myLastWasNeg=false;intial_one*=-1;}
				intial_one = intial_one*10+(0/one_decimal);
			displayText.textContent = intial_one;}
			if(oldSign!==""){
				resultText.textContent+=oldSign;
				oldSign="";
			}
			lastWasDigit=true;
			equals=false;
			break;
		case '/':
			if(myLastWasNeg===true){myLastWasNeg=false;}
			if(lastWasDigit===true && oldSignOperation!==""){
			if(resultText.textContent==="0"){resultText.textContent=intial_one;}else{resultText.textContent+=intial_one;}
				switch(oldSignOperation){
				case "X":
					intial_other = intial_other*intial_one;
					break
				case "+":
					intial_other = intial_other+intial_one;
					break
				case "-":
					intial_other = intial_other-intial_one;
					break
				case "/":
					intial_other = intial_other/intial_one;
					break
				default:
					intial_other=intial_other;
					break	
			}
			oldSignOperation="";
			oldSign="";
			intial_one=intial_other;
			}
			if(oldSign===""){
			if(first){first=false;resultText.textContent=intial_one;}
			intial_other=intial_one;
			intial_one=0;
			one_decimal = 1;
			one_decimal_bool = false;
			display+=intial_other;
			oldSign="/";
			oldSignOperation="/";
			}
			else{
				oldSign="/";
				oldSignOperation="/";
			}
			lastWasDigit=false;
			displayText.textContent="/";
			break;
		case '*':
			if(myLastWasNeg===true){myLastWasNeg=false;}
			if(lastWasDigit===true && oldSignOperation!==""){
			if(resultText.textContent==="0"){resultText.textContent=intial_one;}else{resultText.textContent+=intial_one;}
				switch(oldSignOperation){
				case "X":
					intial_other = intial_other*intial_one;
					break
				case "+":
					intial_other = intial_other+intial_one;
					break
				case "-":
					intial_other = intial_other-intial_one;
					break
				case "/":
					intial_other = intial_other/intial_one;
					break
				default:
					intial_other=intial_other;
					break	
			}
			oldSignOperation="";
			oldSign="";
			intial_one=intial_other;
			}
			if(oldSign===""){
			if(first){first=false;resultText.textContent=intial_one;}
			intial_other=intial_one;
			intial_one=0;
			one_decimal = 1;
			one_decimal_bool = false;
			display+=intial_other;
			oldSign="X";
			oldSignOperation="X";
			}
			else{
				oldSign="X";
				oldSignOperation="X";
			}
			lastWasDigit=false;
			displayText.textContent="X";
			break;
		case '-':
			if(lastWasDigit===true && oldSignOperation!==""){
			if(resultText.textContent==="0"){resultText.textContent=intial_one;}else{resultText.textContent+=intial_one;}
				switch(oldSignOperation){
				case "X":
					intial_other = intial_other*intial_one;
					break
				case "+":
					intial_other = intial_other+intial_one;
					break
				case "-":
					intial_other = intial_other-intial_one;
					break
				case "/":
					intial_other = intial_other/intial_one;
					break
				default:
					intial_other=intial_other;
					break	
			}
			oldSignOperation="";
			oldSign="";
			intial_one=intial_other;
			}
			if(oldSign===""){
			if(first){first=false;resultText.textContent=intial_one;}
			intial_other=intial_one;
			intial_one=0;
			one_decimal = 1;
			one_decimal_bool = false;
			display+=intial_other;
			oldSign="-";
			oldSignOperation="-";
			}
			else{
				myLastWasNeg=true;
			}
			lastWasDigit=false;
			displayText.textContent="-";
			break;
		case '+':
			if(myLastWasNeg===true){myLastWasNeg=false;}
			if(lastWasDigit===true && oldSignOperation!==""){
			if(resultText.textContent==="0"){resultText.textContent=intial_one;}else {resultText.textContent+=intial_one;}
				switch(oldSignOperation){
				case "X":
					intial_other = intial_other*intial_one;
					break
				case "+":
					intial_other = intial_other+intial_one;
					break
				case "-":
					intial_other = intial_other-intial_one;
					break
				case "/":
					intial_other = intial_other/intial_one;
					break
				default:
					intial_other=intial_other;
					break	
			}
			oldSignOperation="";
			oldSign="";
			intial_one=intial_other;
			}
			if(oldSign===""){
			if(first){first=false;resultText.textContent=intial_one;}
			intial_other=intial_one;
			intial_one=0;
			one_decimal = 1;
			one_decimal_bool = false;
			display+=intial_other;
			oldSign="+";
			oldSignOperation="+";
			}
			else{
				oldSign="+";
				oldSignOperation="+";
			}
			lastWasDigit=false;
			displayText.textContent="+";
			break;
		case '.':
			one_decimal_bool = true;
			break;
		case 'AC':
			first=true;
			lastWasDigit=false
			one_decimal_bool = false;
			intial_one=0;
			intial_other=0;
			one_decimal = 1;
			displayText.textContent = intial_one;
			resultText.textContent = intial_other;
			display = "";
			oldSign = "";
			oldSignOperation = "";
			break;
		case '=':
			if(resultText.textContent==="0"){resultText.textContent=intial_one;}else if(!equals){resultText.textContent+=intial_one;}
			switch(oldSignOperation){
				case "X":
					intial_other = intial_other*intial_one;
					break
				case "+":
					intial_other = intial_other+intial_one;
					break
				case "-":
					intial_other = intial_other-intial_one;
					break
				case "/":
					intial_other = intial_other/intial_one;
					break
				default:
					intial_other=intial_other;
					break	
			}
			displayText.textContent=intial_other;
			oldSignOperation="";
			intial_one=intial_other;
			equals=true;
			break
	}
}
