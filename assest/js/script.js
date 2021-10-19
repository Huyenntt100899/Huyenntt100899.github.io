
const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'INPUT') {
        ev.target.classList.toggle('completed');
    }
}, false)

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

