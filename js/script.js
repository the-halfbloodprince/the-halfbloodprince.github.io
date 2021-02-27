/* paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
};

Pace.on('done',function(){
    $('.p').delay(500).animate({
        top: '30%',
        opacity: 0
    }, 3000, $.bez([0.19,1,0.22,1]));

    $('.preloader').delay(1500).animate({
        top: '-1000'
    }, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from('.title',2,{
        delay: 1.8,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    })
});
 */

preloader = document.getElementsByClassName('preloader');

Pace.on('done',()=>{

    $('.preloader').delay(1500).animate({
        top: '-1000'
    }, 2000, $.bez([0.19,1,0.22,1]));

    $('.p').delay(500).animate({
        top: '30%',
        opacity: 0
    }, 3000, $.bez([0.19,1,0.22,1]));

    TweenMax.from('#root',2,{
        delay: 0.5,
        y: 50,
        opacity: 0,
        ease: Expo.easeInOut
    });

    setTimeout(()=>{
        document.body.style.overflow='visible';
    },3000)

    setTimeout(()=>{
        document.querySelector('#logo path:nth-child(1)')
        .classList.add('begin');
    document.querySelector('#logo path:nth-child(2)')
        .classList.add('begin');
    document.querySelector('#logo path:nth-child(3)')
        .classList.add('begin');
    document.querySelector('#logo path:nth-child(4)')
        .classList.add('begin');
    document.querySelector('#logo path:nth-child(5)')
        .classList.add('begin');
    document.querySelector('#logo path:nth-child(6)')
        .classList.add('begin');
    },3000)

    

})