const btnAdd = document.querySelector('.btn-add-notepad');
const section = document.querySelector('.section-content');

btnAdd.addEventListener('click', function (){
    const newNotepad = document.createElement('div');
    newNotepad.classList.add('notepad')
    const textNotepad = document.createElement('textarea');
    textNotepad.classList.add('text-notepad')
    newNotepad.appendChild(textNotepad);
    section.appendChild(newNotepad);
})

const notepad = document.querySelector('.text-notepad');

notepad.addEventListener('click', function(){
    notepad.classList.add('active')
})


