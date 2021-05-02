let isScrolled = false;
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