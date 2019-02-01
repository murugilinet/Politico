function openPage(pageName,elmnt){
    //Hide all elements with class="tabcontent" by default*/
    var i,tabcontent,tablinks; 
    tabcontent = document.getElementsByClassName("container");
    for (i =0;i < tabcontent.length;i++){
        tabcontent[i].style.display = "none";
    }
    //Show the specific tabcontent
    document.getElementById(pageName).style.display ="flex";  
}