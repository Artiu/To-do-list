document.getElementById("submit").addEventListener("click",function(){
    let title = document.getElementById("title");
    let task = document.getElementById("thing");
    let list = document.getElementById("list");
    list.innerHTML += "<li>"+title.value+"<button>Delete task</button></li><span>"+task.value+"</span>";
    title.value="";
    task.value="";
});