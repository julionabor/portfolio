const menu= document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
menu.addEventListener('click', ()=> {
  menu.classList.toggle('activo');
  NavMenu.classList.toggle('activo');
})

let corpo = document.getElementById('home-text');

//<h4 class="text-h4">Bem vindo a Hamburgaria</h4>
function home(){
corpo.innerHTML = `
  <div class="home-text" id="home-text">
    <h4 class="text-h4">Bem vindo a Hamburgaria</h4>
    <h1 class="text-h1"> Differente space for different tastes</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus voluptates, inventore ratione repellat at impedit id perspiciatis minus expedita dolor fugit ad quae incidunt! Quia doloribus vel minima officiis.</p>
    <a href="#" class="home-btn" onclick="cardapio()">Peça já o seu</a></div>
  <div class="home-img">
    <img src="img/hamb.jpeg">
  </div>`;
}
function cardapio(){
   corpo.innerHTML = `<section class="produtos">
    <div class="header"> <h1>Cardapio</h1></div>
      <ul>
      <li>
       <img src="./img/hamburguer (1).jpg" alt="produto">
       <p><strong>Cheese Hamburguer</strong></p>
       <legend>6,50€<a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
      </li>
      <li>
        <img src="./img/hamburguer (2).jpg" alt="produto">
        <p><strong>Double Cheese Hamburguer</strong></p>
        <legend>8,50€<a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
     </li>
     <li>
        <img src="./img/hamburguer (3).jpg" alt="produto">
       <p><strong>King Hamburguer</strong></p>
       <legend>9,50€<a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
     </li>
     <li>
     <img src="./img/hamburguer (4).jpg" alt="produto">
       <p><strong>Master Burguer</strong></p>
       <legend>10,50€ <a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
     </li>
     <li>
     <img src="./img/hamburguer (5).jpg" alt="produto">
       <p><strong>Hamburguer Angus 200gr</strong></p>
       <legend>11,50€<a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
     </li>
     <li>
     <img src="./img/hamburguer.jpg" alt="produto">
       <p><strong>Picanha's Hamburguer</strong></p>
       <legend>16,50€<a href="#"> <img src="./img/carrinho.png" class="carrinho"></a></legend>
     </li>
   </ul>
 </section>`;
  
  }
  function about(){
    corpo.innerHTML = `
      <div class="sobrenos" id="home-text"><h1 class="text-h1">Sobre nós</h1><br>
        <p> Differente space for different tastes<p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloribus voluptates, inventore ratione repellat at impedit id perspiciatis minus expedita dolor fugit ad quae incidunt! Quia doloribus vel minima officiis.</p>
        </div>
        <div class="home-img">
        <img src="./img/massa-pizza.jpg" alt="Massa Pizza">
      </div>
    `;
  }
  function contacto(){
    corpo.innerHTML = `
    <div class="container">
    <h1 class="text-h1">Contacto</h1>
    <br>
    <form action="action_page.php">
  
      <label for="fname">Nome</label>
      <input type="text" id="nome" name="nome" placeholder="Preencha seu nome">
  
      <label for="lname">Contacto</label>
      <input type="text" id="contact" name="contact" placeholder="Digite seu telemovel.">
  
      <label for="country">Cidade</label>
      <select id="cidade" name="cidade">
        <option value="sjm">Sao Joao da Madeira</option>
        <option value="smf">Santa Maria da Feira</option>
        <option value="oaz">Oliveira de Azemeis</option>
      </select>
  
      <label for="subject">Texto</label>
      <textarea id="subject" name="subject" placeholder="Deixe a sua mensagem.." style="height:200px"></textarea>
  
      <input type="submit" value="Enviar">
  
    </form>
  </div>`;
  }

     