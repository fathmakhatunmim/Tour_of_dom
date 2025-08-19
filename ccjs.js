// console.log("file connected");

const sections = document.querySelectorAll('section');
for(const section of sections){
    console.log(section);
    section.style.backgroundColor = 'lightblue'
    section.style.border = '3px solid green'
    section.style.marginBottom = '5px'
    section.style.borderRadius= '10px'
    section.style.padding='10px'


}

//create element and set innertext or innerhtml
const newChild = document.createElement('li');
newChild.innerText = 'new bord footbollar here';

//find the parent where you will add the child

const playersList = document.getElementById('player-list');

//append the child to the parent
playersList.appendChild(newChild);

