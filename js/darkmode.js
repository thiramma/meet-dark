function googleMeetDark(){
document.body.style.transition="1s ease";
if(!document.querySelector('[aria-label="Leave call"]')){
    console.log("Not Joined Call!");
    var status=document.querySelector('[aria-label="Leave call"]');
    var listening = setInterval(()=>{
        if(status){
            setTimeout(()=>{DoMagic();},2000);
            clearInterval(listening);
        }else{
            status=document.querySelector('[aria-label="Leave call"]');
            console.log("Waiting to Join Call");
        }
    },3000)
}else{
    console.log("Joined Call");
    setTimeout(()=>{DoMagic();},2000);
}

function DoMagic(){
    var mic = document.querySelector('[data-is-muted]');
    var parent = mic.parentElement.parentElement.parentElement.parentElement.parentElement;
    var bottom = parent.children[8];
    bottom.style.background='transparent';
    bottom.children[2].children[1].style.display='none';
    //bottom.children[2].children[2].style.display='none';

    var sidebar = parent.children[2]
    sidebar.style.filter="invert(0.9)";

    var rightnotif=parent.children[10];
    rightnotif.style.opacity=0.4;
    rightnotif.style.filter="invert(0.9)";
    
    parent.children[5].children[2].children[0].children[1].children[4].style.display='none'
    parent.children[5].children[2].children[0].children[1].children[0].style.display='none';
    parent.children[5].style.opacity='0.7';
    parent.children[5].children[2].children[0].children[1].children[6].style.display="none";
    parent.children[5].children[2].children[0].children[1].style.opacity="0.5";
    console.log("Successfully Customized!")
}
}
googleMeetDark()
