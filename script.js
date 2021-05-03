let isScrolled = false;
document.getElementById("submit").addEventListener("click",function(){
    let title = document.getElementById("title");
    if(title.value!="")
    {
        let task = document.getElementById("thing");
        let list = document.getElementById("list");
        list.innerHTML += "<li onmousedown='moveItem(this,event)'>"+title.value+"<button onClick='removeItem(this)'>Delete task</button><span>"+task.value+"</span></li>";
        title.value="";
        task.value="";
    }
});
removeItem = (e) =>
{
    e.parentElement.remove();
}
window.addEventListener("scroll",function(){
let str = window.scrollY;
    if(str>150&&isScrolled == false)
    {
        document.getElementById("input-div").animate(
        [
            {background:'none'},
            {background:'#3f37c9'}
        ],
        {
            duration:1000
        });
        document.getElementById("input-div").style.backgroundColor = "#3f37c9";
        isScrolled = true;
    }
    if(str<150&&isScrolled == true)
    {
        document.getElementById("input-div").animate(
            [
                {background:'#3f37c9'},
                {background:'none'}
            ],
            {
                duration:1000
            });
            document.getElementById("input-div").style.background = "none";
            isScrolled = false;
    }
});
moveItem = (e,event) =>
{
    e.style.userSelect = "none";
    e.style.position = "relative";
    let firstCursorPos = event.screenY;
    var moveItem2 = function(ev){
        e.style.top = ev.screenY-firstCursorPos+"px";
    };
    e.addEventListener("mousemove",moveItem2);
    var stopItem = function(){
        e.removeEventListener("mousemove",moveItem2);
    };
    e.addEventListener("mouseup",stopItem);
}