const btnAdd = document.querySelector('.btn-add-notepad');
const section = document.querySelector('.section-content');

btnAdd.addEventListener('click', function (){
    const newNotepad = document.createElement('div');
    newNotepad.classList.add('notepad')
    const textNotepad = document.createElement('textarea');
    textNotepad.classList.add('text-notepad')
    newNotepad.appendChild(textNotepad);
    section.appendChild(newNotepad);
    textNotepad.addEventListener('click', function(){
        let valueBDNotepad = textNotepad.value;
        const modalNotepad = document.querySelector('.modal-notepad');
        modalNotepad.classList.add('active-notepad')
        const notepadEdit = document.createElement('div');
        const btnExitNotepad = document.createElement('i');
        btnExitNotepad.classList.add('fa-solid', 'fa-x', 'btn-exit');
        notepadEdit.classList.add('content-notepad-edit');
        notepadEdit.appendChild(btnExitNotepad);
        modalNotepad.appendChild(notepadEdit);
        
        const textAreaNew = document.createElement('textarea');
        notepadEdit.appendChild(textAreaNew);
        textAreaNew.classList.add('text-notepad-edit')
        textAreaNew.value = valueBDNotepad;


        btnExitNotepad.addEventListener('click', function(){
            let saveEdit = textAreaNew.value
            textNotepad.value = saveEdit;
            modalNotepad.classList.remove('active-notepad')
            modalNotepad.removeChild(notepadEdit)
            console.log(saveEdit);
        })
    })
})










