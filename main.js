let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    anime({
        targets: '.master',
        rotate: '+=1turn',
        backgroundColor:'grey',
        backgroundColor: '#C4FEE4',
        duration: 2000,
        easing: 'easeInOutQuad'
      });
    
      anime({
        targets: '.box',
        // left: '240px',
        keyframes: [
           {borderRadius: ['0%', '50%'],
            duration: 1000},
            {borderRadius: ['50%', '0%'],
            duration: 1000}
        ],
        easing: 'easeInOutQuad'
      });
})