const wrapper = document.getElementById('create-text');

data.map((item) => {
    wrapper.innerHTML += `
        <li class="list-group-item">
            <button class="btn btn-text">
            <input class="input-text" type="text" value="${item.value}" tabindex="-1" disabled></input>
            </button>
            <button class="btn btn-edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="btn btn-trash">
                <i class="fas fa-trash"></i>
            </button>
        </li>
        `
})