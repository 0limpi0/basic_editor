/* 
	Catching the html elements on the DOM
	Storing them on variables in order yo\
	work with them
*/ 
const codeInput = document.querySelector('.code_input');
const codeOutput = document.querySelector('iframe');
const runCodeBtn = document.querySelector('button');

/* 
	When we click on the button it will take the content from 
	the div that has the attribute contenteditable and run it.
	BUT IT ALSO RUNS AUTOMATICALY
*/
runCodeBtn.addEventListener('click', () => {
	var html = codeInput.textContent;
	codeOutput.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

/* 
	When we click on the button it will take the content from 
	the div that has the attribute contenteditable and run it.
	BUT IT ALSO RUNS AUTOMATICALY
*/
codeInput.addEventListener('keyup', () => {
	var html = codeInput.textContent;
	codeOutput.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

/* 
	When we click on the button it will take the content from 
	the div that has the attribute contenteditable and run it.
	BUT IT ALSO RUNS AUTOMATICALY
*/
codeInput.addEventListener('paste',() => {
	e.preventDefault();
	var text = e.clipBoardData.getData("text/plain");
	document.exeCommand("insertText", false, text);
});
