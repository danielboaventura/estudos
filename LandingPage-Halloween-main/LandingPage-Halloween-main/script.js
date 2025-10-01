const clickLink = document.querySelectorAll('header nav ul li a');

function indexLink(index){
    clickLink.forEach((item)=>{
        item.classList.remove('ativo');
    });
    clickLink[index].classList.add('ativo');
}

clickLink.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        indexLink(index)
    });
})