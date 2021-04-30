document.getElementById("submit").addEventListener("click",function(){
    let title = document.getElementById("title");
    let task = document.getElementById("thing");
    document.getElementById("list").innerHTML += "<li>"+title.value+"</li><span>"+task.value+"</span>";
    title.value="";
    task.value="";
});