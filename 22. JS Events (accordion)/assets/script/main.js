document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.querySelectorAll('.accordion');

    accordion.forEach((item) => {
        const header = item.querySelector('.accordion-header');
        const descr = item.querySelector('.accordion-descr');

        header.addEventListener('click', function () {
            if (descr.style.display === 'block') {
              descr.style.display = 'none';
            } 
            else {
              descr.style.display = 'block';
            }
            this.classList.toggle('active');
          });
    });
});