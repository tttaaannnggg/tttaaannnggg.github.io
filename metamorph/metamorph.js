const button = document.querySelector('#submit');
let text = 'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a monstrous vermin.';
text=text.split(/\W+/).filter(Boolean);

const textToArr = (str)=>{
	const output = [];
	const textArr = str.split(/\W+/).filter(Boolean);
	textArr.forEach((input)=>output.push(input.toLowerCase()));
	return output;
}

const spanify = (arr)=>{
	const output=[];
	let element;
	arr.forEach((item)=>{
		element = document.createElement('span')
		element.setAttribute('onmouseover', 'handleHover(this)');
		element.innerHTML = (item);
		output.push(element);
	});
	return output;
}
const handleHover = (el)=>{
	if (el.style.color === 'green' || el.style.color === 'lightgrey') return;
	if (el.innerHTML.length === text[0].length){
		el.innerHTML = text[0];
		el.style.color = 'green';
		text.shift();
	} else{
		el.style.color = 'lightgrey';
	}
}

const handleClick = ()=>{
	let outP = document.querySelector('#output');
	let textVal = document.querySelector('#textArea').value
	spanify(textToArr(textVal)).forEach(
		function(item){
						outP.appendChild(item).after(' ');
		}
	);
}
