document.getElementById("submit").addEventListener("click",function(){
    let title = document.getElementById("title");
    if(title.value!="")
    {
        let task = document.getElementById("thing");
        let list = document.getElementById("list");
        let l = list.children.length;
        list.innerHTML += "<li id='"+l+"'>"+title.value+"<button onClick='removeItem("+l+")'>Delete task</button><span>"+task.value+"</span></li>";
        title.value="";
        task.value="";
    }
});
removeItem = (i) =>
{
    document.getElementById(i).remove();
}