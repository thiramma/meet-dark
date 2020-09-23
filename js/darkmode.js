function googleMeetDark(){
    var bottom = document.children[0].children[1].children[1].children[2].children[0].children[0].children[4].children[2].children[8];
    var sidebar = document.children[0].children[1].children[1].children[2].children[0].children[0].children[4].children[2].children[2]
    var topbar = document.children[0].children[1].children[1].children[2].children[0].children[0].children[4].children[2].children[5]
    sidebar.style.filter="invert(1)";
    topbar.children[2].children[0].children[1].children[4].style.display='none'
    topbar.children[2].children[0].children[1].children[0].style.display='none';
    topbar.style.opacity='0.7'
    bottom.style.background='transparent';
    bottom.children[2].children[1].style.display='none';
    bottom.children[2].children[2].style.display='none';
    topbar.children[1].children[1].children[0].children[1].style.display='none';
    topbar.children[2].children[0].children[1].children[6].style.display="none";
    topbar.children[2].children[0].children[1].style.opacity="0.8";
}

googleMeetDark()