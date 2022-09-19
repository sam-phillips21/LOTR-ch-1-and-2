// console.log('Linked.')
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth') 

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')


	// 2. use a for loop to iterate over the lands array that does the following:
for (let i = 0; i < lands.length; i++){
	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	const artTag = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
artTag.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
const h1Tag = document.createElement('h1')
h1Tag.innerHTML = lands[i]
artTag.appendChild(h1Tag)
	//   2d. appends each land to the middle-earth section
middleEarth.appendChild(artTag)
}
	// 3. append the section to the body of the DOM.
document.body.appendChild(middleEarth)
}

// makeMiddleEarth()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const ulHobbit = document.createElement('ul')
		// ulHobbit.setAttribute('id', 'hobbitId')
		for (var i = 0; i < hobbits.length; i++){
	 		const hobbitName = document.createElement('li')
			hobbitName.setAttribute('class', 'hobbit')
			hobbitName.innerHTML= hobbits[i]
			ulHobbit.appendChild(hobbitName)
			hobbitName.setAttribute('id', "hobbit" + [i])
	}
	 document.getElementById(lands[0]).appendChild(ulHobbit)
}
// function makeHobbits(){
// 	console.log('2: makeHobbits')
// 	const ulHobbit=document.createElement()

	// give each hobbit a class of `hobbit`
	// makeHobbits = document.createElement ('class')

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
	
// // document.getElementById("The-Shire").appendChild(hobbitList)
// }


// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	for(let i= 0; i < hobbits.length; i++) {
		if(document.getElementsByClassName("hobbit")[i].innerHTML === "Frodo Baggins"){
			document.getElementsByClassName("hobbit")[i].appendChild(theRing)
			document.getElementsByClassName("hobbit")[i].setAttribute('id', 'hobbit0')
		}
	}
}
	// console.log('3: keepItSecretKeepItSafe')

// 	// create a div with an id of `'the-ring'`
// const theRing = document.createElement('div')

// theRing.setAttribute('id', 'the-ring')
// // give the div a class of `'magic-imbued-jewelry'`
// theRing.setAttribute('class','magic-imbued-jewelry') }
// 	// add the ring as a child of `Frodo`

// 	for (let i = 0; i < hobbits.length; i++) {
// 		if(document.getElementsByClassName("hobbit")[i].innerHTML === "frodo Baggins") {
// 			document.getElementsByClassName("hobbit")[i].appendChild(theRing)
// 			// console.log(hobbits)
// 		}
// 	}


// // COMMIT YOUR WORK
// // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// // ============
// // Chapter 4
// // ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
const ulBaddies = document.createElement('ul')
	for (let i = 0; i < baddies.length; i++){
	// give each of the baddies a class of "baddy"
const baddiesClass = document.createElement('li')
	baddiesClass.setAttribute('class', 'baddy' )
	baddiesClass.innerHTML = baddies[i]
	ulBaddies.appendChild(baddiesClass)
	// console.log(baddiesClass)
}
	// remember to append them to Mordor
	document.getElementById('Mordor').appendChild(ulBaddies)
		
// 	   hobbitName.setAttribute('class', 'hobbit')
// 	   hobbitName.innerHTML= hobbits[i]
// 	   ulHobbit.appendChild(hobbitName)
// }
// document.getElementById('The-Shire').appendChild(ulHobbit)
// }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
 
function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
let asTag= document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
const ulBuddies = document.createElement('ul')
	
	for (let i=0; i < buddies.length; i++) {
		let buddiesLi = document.createElement('li')
		buddiesLi.setAttribute('class', 'buddies')
		buddiesLi.setAttribute('id', 'buddies' + [i])
		buddiesLi.innerHTML= buddies[i]
		ulBuddies.appendChild(buddiesLi)
		// console.log(buddies)
	}
	asTag.appendChild(ulBuddies)
	// insert your aside as a child element of `rivendell`
	document.getElementById('Rivendell').appendChild(asTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	
	// const ulHobbit = document.getElementById('ul')
	let Rivendell=document.getElementById('Rivendell')
	let shr= document.getElementById('The-Shire')
	
	const lHobbit = (shr.children[1])
	Rivendell.appendChild(lHobbit)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	let strider = document.querySelectorAll('li.buddies')[3]
	strider.innerText ='Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
// 	console.log('8: forgeTheFellowShip')
// 	// create a new div called `'the-fellowship'` within `rivendell`
// 	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// 	// after each character is added make an alert that they // have joined your party
console.log('8: forgeTheFellowShip')

// const rmHobbit = setAttribute('class', 'help' )
// document.getElementById('hobbitId').remove()
// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they 
// have joined your party

const rivendell = document.querySelector('#Rivendell')
const theFellowship = document.createElement('div')
theFellowship.setAttribute('id', 'the-fellowship')
rivendell.appendChild(theFellowship)

const ulHobbit = document.createElement('ul')
ulHobbit.setAttribute('id', 'hobbitId')
for (var i = 0; i < hobbits.length; i++){
	 const hobbitName = document.createElement('li')
	hobbitName.setAttribute('class', 'hobbit')
	hobbitName.innerHTML= hobbits[i]
	ulHobbit.appendChild(hobbitName)
	hobbitName.setAttribute('id', 'hobbit'+ [i])
}


for(let i = 0; i < hobbits.length; i++) {
	document.getElementById('hobbit' + [i]).appendChild(theFellowship)
	window.alert(`${hobbits[i]} has joined your party.`)
}

for(let i = 0; i < buddies.length; i++) {
	document.getElementById('buddies' + [i]).appendChild(theFellowship)
	window.alert(`${buddies[i]} has joined your party.`)
}

// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
// 	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
// 	document.getElementById('rivendell').appendChild(theFellowShip)


// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border

	let wiz = document.querySelectorAll('li.buddies')[0]
	wiz.innerText ='Gandolf the White'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert("The horn of gondor has been blown")
	alert("Boromir's been killed by the Uruk-hai!")
 let boromir = document.querySelectorAll('li.buddies')[4].remove()
	// document.getElementById('buddies4').remove()
	// console.log(ulBuddies)
	}
	// let horn = document.getElementById('buddies')
	// for (let i = 0; i < buddies.leghth; i++) {
	// 	if (buddies.length[i] === "boromir")
	// 	return (buddies.pop)
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
// }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')

	document.getElementById('hobbit' + [0]).remove()
	document.getElementById('hobbit' + [1]).remove()

	const hobbitList = document.createElement('ul')
	hobbitList.setAttribute('id', 'ulHobbit')
	for (let i = 0; i <= 1; i++) {
		let List = document.createElement('Li')
		List.setAttribute('class', 'hobbits')
		List.setAttribute('id', 'hobbit'[i])
		hobbitList.appendChild(List)
		List.innerText = hobbits[i]
	}
		document.getElementById(lands[2]).appendChild(hobbitList)

	let md = document.createElement('div')
	md.setAttribute('id', 'mount-doom') 
	document.getElementById(lands[2]).appendChild(md)
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	document.getElementById('h').appendChild(theRing)

	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom

	let gollum = document.createElement('div')
	gollum.setAttribute('id','gollum')
	document.getElementById(lands[2]).appendChild(gollum)
	document.getElementById('the-ring').remove()
	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	document.getElementById('gollum').appendChild(theRing)

	// document.getElementById('id', 'gollum')
	// document.setAttribute('id', 'gollum')
	document.getElementById('mount-doom').appendChild(document.getElementById('gollum'))
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	
	const ulHobbit = document.createElement('ul')
		for (var i = 0; i < hobbits.length; i++){
	 		const hobbitName = document.createElement('li')
			hobbitName.setAttribute('class', 'hobbit')
			hobbitName.innerHTML= hobbits[i]
			ulHobbit.appendChild(hobbitName)
	}
	 document.getElementById('The-Shire').appendChild(ulHobbit)

	//  document.getElementById('rivendell').appendchild(ulHobbit).remove()
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`

	document.getElementById('gollum').remove()
	document.getElementById('h').remove()
	document.getElementById('o').remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})