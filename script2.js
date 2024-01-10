let modal = document.querySelector('.modal');
let prev = document.querySelectorAll('.prev');

document.querySelectorAll('.image').forEach(image =>{
    image.onclick = () =>{
        modal.style.display = 'flex';
        let name = image.getAttribute('data-name');
        prev.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});

prev.forEach(close =>{
    close.querySelector('.exit').onclick = () =>{
        close.classList.remove('active');
        modal.style.display = 'none';
    }
})