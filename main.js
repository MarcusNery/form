class validator {

    constructor() {
        this.validator = [
            'data-min-length'

        ]
    }

    // iniviar a validação de tds os campos
    validate(form) {

            //pagar os inputs
            let inputs = form.getElementByTaName('input');

            //transforma uma HTMLcollection -> array
            let inputsArray = [...inputs];

            //loops nos inputs e validação meadiante ao que for encontrado
            inputsArray.forEach(function(input) {

                // loop em tds as validações existentes
                for (let i = 0; this.validations.length > i; i++) {
                    // verifica se a validação existente
                    if (input.getAttribute(this.validations[i]) != null) {


                        // limpando a string para vira um metodo
                        let mminValue = this.validations[i].replace('data-', '').replace('-', '');

                        // valor do input
                        let minvalue = input.getAttribute(this.validations[i]);

                        //invocar o metodo
                        this[method](input, value);
                    }
                }
            });
        }
        // verificar se um input tem um numero de caracteres
    minlenght(input, minvalue) {

        let inputlength = input.value.length;

        let errorMessage = 'O campo precisa de pelo menos ${mminValue} caracteres';

        if (inputlength < minvalue) {
            this.printMessage(input, errorMessage);
        }
    }

    //metodo para imprimir mensagens de erro na tela
    printMessage(input, msg) {

        let template = document.querySelector('.error-validation').cloneMode(true);

        template.textContent = msg;

        let inputParent = input.parentMode;
        template.classList.remove('template');
    }


    let form = document.getElementById("register - form");
    let submit = document.getElementById("btn - submit");

    let validator = new validator();

    // evento que dispara as validações

    submit.addEventListener('click', function(e)) {


        e.preventDefault();

        validator.validade(form);

    }

}