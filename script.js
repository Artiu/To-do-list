let isScrolled = false;
document.getElementById("submit").addEventListener("click",function(){
    let title = document.getElementById("title");
    if(title.value!="")
    {
        let task = document.getElementById("thing");
        let list = document.getElementById("list");
        list.innerHTML += "<li onmousedown='moveItem(this,event)' style='order:"+list.children.length+"'>"+title.value+"<button onClick='removeItem(this)'>Delete task</button><span>"+task.value+"</span></li>";
        title.value="";
        task.value="";
    }
});
removeItem = (e) =>
{
    e.parentElement.remove();
    fixOrderity();
}
fixOrderity = () =>
{
    let allElements = document.getElementsByTagName("li");
    for(let x=0;x<allElements.length;x++)
    {
        allElements[x].style.order = x;
    }
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
    e.style.position = "relative";
    let firstCursorPos = event.screenY;
    var moveItem2 = function(ev){
        e.style.top = ev.screenY-firstCursorPos+"px";
        let offsetMoveEl = e.getBoundingClientRect();
        let topMoveEl = offsetMoveEl.top;//getting current pos of element which is moving
        let moveElOrder = e.style.order;
        let allElements = document.getElementsByTagName("li");
        let x;
        let topNextEl;
        for(x=0;x<allElements.length;x++)
        {
            if(Number(moveElOrder)+1 == allElements[x].style.order)
            {
                let offsetNextEl = allElements[x].getBoundingClientRect();
                topNextEl = offsetNextEl.top;
                break;
            }
        }
        if(topMoveEl >= topNextEl)
        {
            e.style.order += 1;
            allElements[x].style.order -= 1;
            e.style.top = 0;
            firstCursorPos=ev.screenY;//I'm updating this value, because it's new start position
        }
    };
    e.addEventListener("mousemove",moveItem2);
    var stopItem = function(){
        e.style.position = "static";
        e.style.top = 0;
        e.removeEventListener("mousemove",moveItem2);
    };
    e.addEventListener("mouseup",stopItem);
}