const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementById('list');
toggleButton.addEventListener("click",onClick);
function onClick()
{
    navbarLinks.classList.toggle('active');
}