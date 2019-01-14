const button = document.querySelector('#submit');
let initialText = `I tried and failed to get my Russian visa today, so I decided to spend the rest of my afternoon at SF MoMA. It\'s been a couple of years since I\'ve been in San Francisco.

As much as I\'ve felt uncomfortable in and alienated by the art world, there\'s also something about museums that feels like home. I flash my badge, and there\'s a glint of acknowledgement in the ticketer's eye as he hands me a complimentary pass- one museum worker to another.

Today I am not sure what I'm looking for. I haven't really been to an art space except to socialize or to see a show from a particular artist. Instead, I'm wandering around the gallery- Jackson Pollock, Picasso, Magritte (who I'll get back to in another post), Ellsworth Kelly, Calder, Anselm Kiefer. It's beautiful here. I see a young man walking his (mother? aunt?) through the exhibitions, offering opinions and thoughts about contemporary art, and I can't help but overhear. He dislikes the Eurocentric trappings of the museum, the abstract expressionists, Jeff Koons's excesses, the just-so universalism of minimalist sculpture that posits the Eurocentric vision as the only world possible. I appreciate his perspective on art, and share some of the populist, multicultural ethos underpinning it. But it feels insufficient.

I think I find what I'm looking for in Agnes Martin's paintings, and the particular way they're installed in the museum. Quiet, all-encompassing, somehow deeply moving to me. It's a series of paintings arranged in an octagonal room, with a bench in the middle. They're geometric abstraction; grids or stripes, arranged on a series of large, portrait-oriented canvases. What struck me about the work is its delicacy. The paintings' color is pale, quiet, barely over a whisper, grids clinging gently to existence. They play on the edge of imperceptibility, and I can feel my own heart weakening before them, mirroring their tenuous presence. They could be wiped away in an instant, by some passing carelessness, by a breeze, by anything- and so could we.

Maybe I've got a bit of a soft spot for existential angst; I've been reading Dostoevsky, Sartre, Camus, and I've adored all of it. I've been a little less antagonistic towards the dead white males, and I feel ambivalent about my dissipating anger.

In the end, it's probably an experience of self-annihilation that I'm chasing. The white artists who I've loved have always been the type. Jeff Koons's sculptures belie a profound lack. Robert Irwin's late paintings do their best to un-paint themselves. There's something in the emptiness of whiteness, in the rootless despair and causeless angst that fascinates me. It's a transcendental lack that defies all logic, all materiality.

The stories of LGBT people, of PoC, and of women are ones of being denied, being robbed of autonomy, of home, of family, of being cast out into a world where one does not belong. Those stories resonate with me, certainly, but so do the stories of white existential crises. Those are the deep, abiding psychosis of being safe, having your needs largely provided-for, being ostensibly advantaged in every way conceivable, but still- still feeling the emptiness, feeling like you could burn alive and nothing would change, no one would care, and none of it would matter. Feeling like the world could end at any moment; wishing, just a little bit, that it would. Screaming as loudly as you can for anything, anything besides the unbearable, immovable present.

There is a metaphysical, transcendental suffering inside of that feeling, one which has haunted me throughout my entire life. It feels true in a way that little else does.`

let text = 'As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a monstrous vermin.';
text=text.split(/\b\W* */).filter(Boolean);

const textToArr = (str)=>{
	const output = [];
	const textArr = str.split(/ /).filter(Boolean);
	textArr.forEach((input)=>output.push(input));
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
	if (!!text[0] && el.innerHTML.length === text[0].length){
		el.innerHTML = text[0];
		el.style.color = 'green';
		text.shift();
	} else{
		el.style.color = 'lightgrey';
	}
}

const loaded =()=>{
	console.log('loaded');
	let outP=document.querySelector('#output');
	spanify(textToArr(initialText)).forEach(
		function(item){
			outP.appendChild(item).after(' ');
		}
	);
}
