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