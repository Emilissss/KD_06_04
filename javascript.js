const forma = document.getElementById('forma');
const laukas = document.getElementById('task');
const uzduotys = document.getElementById('uzduotys')

function istrinti(event) {
    event.srcElement.parentElement.remove();
}

forma.addEventListener('submit', (event) => {
    event.preventDefault();

const uzduotiesElementas = document.createElement('li');
uzduotiesElementas.innerText = laukas.value;

const trintiMygtukas = document.createElement('checkbox');
trintiMygtukas.innerText = 'Check';
trintiMygtukas.addEventListener('click', istrinti);

uzduotiesElementas.append(trintiMygtukas);
uzduotys.append(uzduotiesElementas);
});

