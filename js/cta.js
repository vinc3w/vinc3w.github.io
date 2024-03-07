const cta = document.getElementById('cta');
const closeBtn = document.getElementById('close-cta-btn');

closeBtn.onclick = () => {

    cta.style.opacity = '0';
    setTimeout(() => {

        cta.style.display = 'none';

    }, 100);

    localStorage.hide_cta = true;

}

if (localStorage.hide_cta) {
    cta.style.display = 'none';
}
