 
import './css/style.css';
import Modal from './components/Modal';
import '@fortawesome/fontawesome-free/css/all.css';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
 
const modal = new Modal();
const ideaForm = new IdeaForm();
const ideaList = new IdeaList();


ideaForm.render();
//  this is the vrsion not using classes
// const modal = document.querySelector('#modal');
// const modalBtn = document.querySelector('#modal-btn');

// function open() {
//     modal.style.display = 'block';
// }
// function close() {
//     modal.style.display = 'none';
// }
// function outsideClick(e){
//     if(e.target === modal){
//         close();
//     }
// }
// modalBtn.addEventListener('click', open)
// window.addEventListener('click', outsideClick)