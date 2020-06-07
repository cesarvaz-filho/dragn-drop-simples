const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

function dragstart() {
    //console.log('> CARD: Start dragging');   
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
    this.classList.add('is-dragging');
}

function drag() {
    //console.log('> CARD: Is dragging');
}

function dragend() {
    //console.log('> CARD: End drag');
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragenter() {
    //console.log('> DROPZONE: Drop enter');   
}

function dragover() {
    //console.log('> DROPZONE: Drop over');
    this.classList.add('over');
}

function dragleave() {
    //console.log('> DROPZONE: Drop leave');
    this.classList.remove('over');
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function drop() {
    //console.log('> DROPZONE: Drop');
    this.classList.remove('over');
}