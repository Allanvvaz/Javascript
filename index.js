const control = document.getElementById('control'); 
const nome = document.getElementById('nome')
const last_nome = document.getElementById('last_nome')
const study = document.getElementById("study")
const age = document.getElementById("age")

control.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const nameValue = nome.value;
    const lastNameValue = last_nome.value;
    const studyValue = study.value;
    const ageValue = age.value;

    if (nameValue === "") {
        setErrorFor(nome, "O nome de usuário é obrigatório.");
    } else {
        setSuccessFor(nome);
    }
    
    if (lastNameValue === "") {
        setErrorFor(last_nome, "O Sobrenome é obrigatório.");
    } else {
        setSuccessFor(last_nome);
    }
    
    if (studyValue === "") {
        setErrorFor(study, "O campo é obrigatório.");
    } else {
        setSuccessFor(study);
    }
    
    if (ageValue === "") {
        setErrorFor(age, "A confirmação de idade é obrigatória.");
    } else {
        setSuccessFor(age);
    }
    
    const controls = control.querySelectorAll(".control");
    
    const controlIsValid = [...controls].every((control) => {
        return control.classname === "control success"
    });
  
    if (controlIsValid) {
        console.log("O formulário está 100% válido!");
    }
}

function setErrorFor(input, message) {
    const control = input.parentElement;
    const small = control.querySelector("small");
  
    // Adiciona a mensagem de erro
    small.innerText = message;
  
    // Adiciona a classe de erro
    control.className = "control error";
}
  
function setSuccessFor(input) {
    const control = input.parentElement;
  
    // Adiciona a classe de sucesso
    control.className = "control success";
}
  
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}
