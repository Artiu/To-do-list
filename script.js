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
    let itemOrder = e.parentElement.style.order;
    e.parentElement.remove();
    fixOrderity(itemOrder);
}
fixOrderity = (deletedItem) =>
{
    let allElements = document.getElementsByTagName("li");
    if(deletedItem == 0)
    {
        for(let x=0;x<allElements.length;x++)
        {
            allElements[x].style.order -= 1;
        }
    }
    else
    {
        for(let x=0;x<allElements.length;x++)
        {
            if(allElements[x].style.order >= deletedItem)
            {
                allElements[x].style.order -= 1;
            }
        }
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
        let y;
        let topPrevEl;
        for(y=0;y<allElements.length;y++)
        {
            if(Number(moveElOrder)-1 == allElements[y].style.order)
            {
                let offsetPrevEl = allElements[y].getBoundingClientRect();
                topPrevEl = offsetPrevEl.top;
                break;
            }
        }
        if(topMoveEl >= topNextEl)
        {
            e.style.order = Number(e.style.order)+1;
            allElements[x].style.order = Number(allElements[x].style.order)-1;
            e.style.top = 0;
            firstCursorPos=ev.screenY;//I'm updating this value, because it's new start position
        }
        if(topMoveEl <= topPrevEl)
        {
            e.style.order = Number(e.style.order)-1;
            allElements[y].style.order = Number(allElements[y].style.order)+1;
            e.style.top = 0;
            firstCursorPos=ev.screenY;
        }
    };
    e.addEventListener("mousemove",moveItem2);
    var stopItem = function(){
        e.style.position = "static";
        e.style.top = 0;
        e.removeEventListener("mousemove",moveItem2);
    };
    e.addEventListener("mouseup",stopItem);
    e.addEventListener("mouseleave",stopItem);
}