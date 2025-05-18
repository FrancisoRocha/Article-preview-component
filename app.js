

document.addEventListener('DOMContentLoaded', () => {

    const shareBtn = document.querySelector('.btn__share');
    const infoActive = document.querySelector('.user__info--active');


    if (shareBtn && infoActive) {

        shareBtn.addEventListener('click', () => {
            const isVisible = infoActive.style.display === 'flex';

            if (isVisible) {
                infoActive.classList.remove('animate__fadeInDown');
                infoActive.classList.add('animate__fadeOutDown');
            } else {
                infoActive.style.display = 'flex';
                infoActive.classList.remove('animate__fadeOutDown');
                infoActive.classList.add('animate__animated', 'animate__fadeInDown');
            }
        });
    }

})
