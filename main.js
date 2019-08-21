let btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    anime({
        targets: '.master',
        rotate: '+=1turn',
        backgroundColor:'grey',
        backgroundColor: '#C4FEE4',
        duration: 3000,
        easing: 'easeInOutQuad'
      });
    
      anime({
        targets: '.box',
        keyframes: [
           {borderRadius: ['0%', '50%'],
            duration: 800},
            {borderRadius: ['50%', '0%'],
            duration: 800}
        ],
        easing: 'easeInOutQuad'
      });
});