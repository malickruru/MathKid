//-------------le loader ----
const loader = document.querySelector('.loader');

window.addEventListener('load',() => {
    setTimeout(()=>{
        loader.classList.add('fadeOut');
        setTimeout(()=>{
            loader.classList.add('hidden');
        }, 700)//disparition
        
}, 2000)//opacité reduite
});
