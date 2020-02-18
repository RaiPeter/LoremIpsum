document.getElementById('btn').addEventListener('click',()=>{
    var inputValue=document.getElementById('txt').value;
    generatePara(inputValue);


    
})
function generatePara(inputValue){
    var rand="Peter eatsum iai asf sger  gdg df gs sg dfgergs fdsg gsg df rgsg sds gsg dfg df."+
    " Hsdf sf s sdf sd f sdfs d h tu ui p fb sdvs sdf s dfs dfs df s g e q wes dvxbf nr tjt yd xvs ddsfg,sf dfgdfg."+
    " Gsdf dfgd ergdf rth dfbdfb rdgd fgdghdh dgr thd fgdfbd. Gsfg sdf ew qqgdf brthe, sgerg sdsg.";
     
    document.getElementById("paragraph").innerHTML="";   
    document.getElementById("paragraphDiv").style.boxShadow= "0px 2px 15px black"; 
        for(let i=1; i<=inputValue;i++){
             
            document.getElementById('paragraph').innerHTML += "<br/>"+i+"."+"<br>"+rand;
            
        }
    console.log(inputValue);
    console.log(rand);
}
