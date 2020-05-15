//CARDS IZQUIERDA
fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,summary,author.name,image.styles.square_circle,created,taxonomy.name&type=receta&limit=3&offset=8')
.then(response => response.json())
.then(object => { //object es la respuesta del fetch de arriba y es un objeto 
  array = object.data; 
  let left = document.getElementById('left');
  for(let i = 0; i < array.length; i++) { //En este ciclo imprimo todos los elementos del array 
    left.innerHTML += `
      <div class="two-columns">
        <div class="first" id="image">
          <img src="${array[i].image.styles.square_circle}"/>
        </div>
        <div class="second-container" id="no">
          <p>${array[i].taxonomy.name}</p>
          <span class="green">${array[i].title}</span>
          <time>${array[i].created} ${array[i].author.name}</time>
          <p class="gray">${array[i].summary}</p>
        </div>
      </div>
    `;
  };
})
.catch(error => console.log('Hay un error'))

//CARDS DERECHA
fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=title,created,author.name,image.styles.square_circle&type=receta&limit=5&offset=11')
.then(response => response.json())
.then(object => {
  array = object.data;
  let right = document.getElementById('right');
  for(let i = 0; i < array.length; i++) {
    right.innerHTML += `
      <div class="two-columns">
        <div class="one" id="yes">
          <img src="${array[i].image.styles.square_circle}"/>
        </div>
        <div class="two" id="content">
          <span class="green">${array[i].title}</span>
          <time>${array[i].created} ${array[i].author.name}</time>
        </div>
      </div>
    `;
  };
})
.catch(error => console.log('Hay un error'))