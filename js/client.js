import { animals } from "./animals.js";
// the above is to import the animals.js file. 
let outputHTML = '';
// So what i want to do is create a variable where I can store my html.

const gallery = document.querySelector('.gallery'); //I'm just going to write this down here cus I often forget,
// queryselector is a way to select a class in CSS. In this case, I am selecting the .gallery class in CSS and making it a variable in JS too.
//Now what i want to do, is create an array with the animals within my animals.js file.
animals.forEach(function(animal) {
  output += `<figure class="figCard"> 
  <img src="assets/images/${animal.path}.jpg" alt="Lorem picsum picture: ${animal.title}" width="${animal.width}" height="${animal.height}">
  <figcaption>
    ${animal.title} by <a href="${animal.url}" target= "_blank">${animal.credit}</a>
  </figcaption>
  </figure>`           
            
});

gallery.innerHTML = `${output}`;