///create a new to-do
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addToDo();
});

function addToDo() {
    const createNewtodo = document.getElementById("create-text")
    const createForm = document.getElementById('create-form').value;
    // const text = document.createTextNode("creatForm");

    const li = document.createElement("li");
    li.className = "list-group-item";

    const btnText = document.createElement("button");
    btnText.className = "btn btn-text";

    const inputText = document.createElement("input");
    inputText.className = "input-text";
    inputText.tabIndex = "-1";
    inputText.disabled = true;
    inputText.value = createForm;

    // const span = document.createElement("span");
    // span.appendChild(text);


    if (createForm === "") {
        return
    } else {
        createNewtodo.appendChild(li);
        li.appendChild(btnText);
        btnText.appendChild(inputText);
        // btnText.appendChild(span)
    }

    document.getElementById('create-form').value = '';

    const btnEdit = document.createElement("button");
    btnEdit.className = "btn btn-edit";
    li.appendChild(btnEdit);

    const iconEdit = document.createElement("i");
    iconEdit.className = "fas fa-edit";
    btnEdit.appendChild(iconEdit);

    const btnTrash = document.createElement("button");
    btnTrash.className = "btn btn-trash";
    li.appendChild(btnTrash);

    const iconTrash = document.createElement("i");
    iconTrash.className = "fas fa-trash";
    btnTrash.appendChild(iconTrash);

    const trash = document.getElementsByClassName('btn-trash');
    for (let i = 0; i < trash.length; i++) {
        trash[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    const edit = document.getElementsByClassName('btn-edit');
    for (let i = 0; i < edit.length; i++) {
        edit[i].onclick = function () {
            
            list.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'INPUT') {
                    ev.target.classList.toggle('completed');
                }
            }, true)
    
            const inputs = document.querySelectorAll(".input-text");
    
            // console.log(inputs[i].classList);
    
            inputs[i].classList.add('editing');
            inputs.forEach(input => input.disabled = false);
    
            document.querySelectorAll(".input-text")[i].focus();
        }
    }
    
    const editBlur = document.getElementsByClassName("input-text");
    for (let i = 0; i < editBlur.length; i++) {
        editBlur[i].onblur = function () {
    
            const inputs = document.querySelectorAll(".input-text");
    
            inputs[i].classList.remove('editing')
    
            inputs.forEach(input => input.disabled = true);
    
            list.addEventListener('click', function (ev) {
                if (ev.target.tagName === 'INPUT') {
                    ev.target.classList.toggle('completed');
                } 
            }, false)
        }
    }

}