document.addEventListener("DOMContentLoaded",()=>{
    const container=document.querySelector('.container');
    const btn=document.querySelector('#btnCopy');
    const allBorder=document.getElementById('all');
    const borderElement=document.getElementById('border');
    const colourElement=document.getElementById('colour');
    const all_Value=document.getElementById('all_value');
    const border_Value=document.getElementById('border_value');
    
    const code=document.getElementById('code');
    const border_styleElement=document.getElementById('border_style');

    var all_radius=10;
    var border_style="solid";
    var border_size="3"
    var coding="";
    var colour="red";
    


    function allBorderUpdate(){
        all_radius=allBorder.value;
        border_size=borderElement.value;
        colour=colourElement.value;
        all_Value.innerText=all_radius+"px";
        border_Value.innerText=border_size+"px";
        coding=`
        border-radius:${all_radius}px;
        border:${border_size}px ${border_style} ${colour};
        `;
        code.value=coding;
        container.style.cssText=coding;
    }


    allBorder.addEventListener("mousemove",allBorderUpdate)
    allBorder.addEventListener("change",allBorderUpdate)

    borderElement.addEventListener("mousemove",allBorderUpdate)
    borderElement.addEventListener("change",allBorderUpdate)
    colourElement.addEventListener("input", allBorderUpdate);


    btn.addEventListener('click',()=>{
        allBorderUpdate();
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert('Code Copied');
        

    });
    allBorderUpdate();


    border_styleElement.addEventListener('change',function(){
        border_style=this.value;
        allBorderUpdate();
    })

 
});