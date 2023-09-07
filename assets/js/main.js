const btnAdd = document.querySelector('.btn-add-notepad');
const section = document.querySelector('.section-content');

btnAdd.addEventListener('click', function (){
    const newNotepad = document.createElement('div');
    newNotepad.classList.add('notepad')
    const textNotepad = document.createElement('textarea');
    textNotepad.classList.add('text-notepad')
    newNotepad.appendChild(textNotepad);
    section.appendChild(newNotepad);

    const notepad = document.querySelectorAll('.text-notepad');
        notepad.forEach( cadaNotepad => {
            cadaNotepad.addEventListener('click', function(){
                const modalNotepad = document.querySelector('.modal-notepad');
                modalNotepad.classList.add('active-notepad')
                const notepadEdit = document.createElement('div');
                const btnExitNotepad = document.createElement('i');
                btnExitNotepad.classList.add('fa-solid', 'fa-x', 'btn-exit');
                notepadEdit.classList.add('content-notepad-edit');
                notepadEdit.appendChild(cadaNotepad, btnExitNotepad);
                modalNotepad.appendChild(notepadEdit);
        })
    })
})











