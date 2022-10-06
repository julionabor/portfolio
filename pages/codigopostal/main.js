'use strict';
const limpaFormulario = () => {
  document.getElementById('endereco').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('estado').value = "";
  document.getElementById('freguesia').value = "";
  document.getElementById('cep').value = "";
}
  const preencherFormulario = (endereco,endereco2) => {
    
    document.getElementById('endereco').value = endereco.ruas;
    document.getElementById('bairro').value = endereco.Localidade;
    document.getElementById('cidade').value = endereco.Concelho;
    document.getElementById('freguesia').value = endereco2.freguesia;
    document.getElementById('estado').value = endereco.Distrito;
}

  const pesquisarCep = async () => {
  const cp = document.getElementById('cep').value;
  //busca o endereço
  const url = `https://geoapi.pt/cp/${cp}?json=1`;
  if(cp != ''){
      //outra alternativa é : fetch(url).then(response => response.json).then(console.log)
      //aguarda a promessa ser efetuada c/ await
      const dados = await fetch(url);
      
      //pega a promessa e transforma em objeto, mas se tirar o await fica pendente
      const endereco = await dados.json();

      //pega a freguesia
      const coordenadas = endereco.centro;
      const url2 = `https://geoapi.pt/gps/${coordenadas}?json=1`;
      const dados2 = await fetch(url2);
      //pega a promessa e transforma em objeto, mas se tirar o await fica pendente
      const endereco2 = await dados2.json();
      //se esse atributo tem a propriedade erro
      if(endereco.hasOwnProperty('erro')){
        alert('Codigo Postal nao existe');
        limpaFormulario();
      }else{
        preencherFormulario(endereco,endereco2);
      }
    }else{
      alert("Preencha o Codigo Postal")
      limpaFormulario();
    }
}  

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);

     
      