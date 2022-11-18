function meuEscopo () {


    const form  =  document.querySelector('.form');
    

//Função principal, pegando o formulário
    form.addEventListener('submit', function(e){
        //barrando o envio do form
        e.preventDefault();
       
        //pegando o valor nos campos de texto
        const inputPeso = e.target.querySelector('#peso');
        const inputAltura = e.target.querySelector('#altura');

        //criando a varivel e transformando em Number 
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        //verificando se o valor digitado é valido
        if (!peso || peso <=20 || peso >=400) {
        
            setResultado('Peso inválido', false);
            return;

        } 
        if (!altura || altura >=3){
            setResultado('Altura Inválida', false);
            return;
        }

        //chamando a função que calculao imc
        const imc = getImc(peso, altura);

        //chamando a função que mostra o indice de gravidade
        const indiceImc = getIndiceImc(imc);
        
        //chamando a função que mostra o resultado
        const msg = `Seu IMC é de: ${imc} | ${indiceImc}`;
        setResultado(msg, true);
        

    });

        function getImc(peso, altura){

            const imc = peso /(altura*altura);
            return imc.toFixed(2);

        }
        
        function criarP (){
            const p = document.createElement('p');
            return p;
            
        }
        function setResultado (msg, isValid){
            const resultado = document.querySelector('.resultado');

            resultado.innerHTML = ` ` ;
            const p = criarP();
            if (isValid){
                p.classList.add('indice-bom');
            }else{
                p.classList.add('alerta');
            }
            p.innerHTML = msg;
            resultado.appendChild(p);

        
        }
        function getIndiceImc (imc){
            const indices = ['Abaixo do peso', 'Peso adequado', 'Sobrepeso',
             'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

            if(imc >= 39.9){
               return indices[5]
            } 
            if (imc >= 34){
                return indices[4]
            }
            if (imc >= 29.9){
                return indices [3]
            }
             if ( imc >= 24.9){
                return indices[2]
            } 
            if ( imc >= 18.5){
                return indices[1]
            } 
            if ( imc < 18.5){
                return indices [0]
            }
        }
        
}


meuEscopo();