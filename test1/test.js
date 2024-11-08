async function fetchadata() {
    try{
        let response=await fetch("https://api.github.com/users?per_page=10")
        let data =await response.json();
        data.forEach(Element=>{
           
            let h1=document.createElement('h1');
            h1.textContent=Element.username;
            let a=document.createElement('a');
            a.textContent=Element.node_id;
            a.setAttribute("href",Element.html_url);
            let top=document.getElementById('top');
            top.appendChild(h1);
            top.appendChild(a);
            
        });
              

    }catch(error){
        console.log(error);

    }
    
    
}
