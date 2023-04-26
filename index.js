const mobileMenu = document.getElementsByClassName("mobile-menu")[0];

function toggle(){
    mobileMenu.classList.toggle("toggled");
}

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const event1 = document.getElementsByClassName('event-text1')[0];
const event2 = document.getElementsByClassName('event-text2')[0];
const event3 = document.getElementsByClassName('event-text3')[0];

function slide(dotNumber){

    if(dotNumber == 1){
        if(event1.classList.contains('slide-off') == true)
        {
            document.getElementsByClassName('active-dot')[0].classList.toggle('active-dot');
            dot1.classList.toggle('active-dot');
            event1.classList.toggle('slide-off');
            if(event2.classList.contains('slide-off') == false){
                event2.classList.toggle('slide-off');
            }
            if(event3.classList.contains('slide-off') == false){
                event3.classList.toggle('slide-off');
            }
            console.log(event1.classList.contains('slide-off'));
        }
    }
    else if(dotNumber == 2){
        if(event2.classList.contains('slide-off') == true)
        {
            document.getElementsByClassName('active-dot')[0].classList.toggle('active-dot');
            dot2.classList.toggle('active-dot');
            event2.classList.toggle('slide-off');
            if(event3.classList.contains('slide-off') == false){
                event3.classList.toggle('slide-off');
            }
            if(event1.classList.contains('slide-off') == false){
                event1.classList.toggle('slide-off');
            }
            console.log(event2.classList.contains('slide-off'));
        }

    }
    else{
        if(event3.classList.contains('slide-off') == true)
        {
            document.getElementsByClassName('active-dot')[0].classList.toggle('active-dot');
            dot3.classList.toggle('active-dot');
            event3.classList.toggle('slide-off');
            if(event2.classList.contains('slide-off') == false){
                event2.classList.toggle('slide-off');
            }
            if(event1.classList.contains('slide-off') == false){
                event1.classList.toggle('slide-off');
            }
            console.log(event3.classList.contains('slide-off'));
        }

    }
}