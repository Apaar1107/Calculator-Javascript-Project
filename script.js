(function(){

    let screen =document.querySelector('.screen');
    let buttons =document.querySelectorAll('.btn');
    let equal =document.querySelector('.btn-equal');
    let clear =document.querySelector('.btn-clear');
    let back=document.querySelector('.back');
    let percent=document.querySelector('.percent');

    buttons.forEach(function(button)
    {
        button.addEventListener('click',function(e){
          
           let value=e.target.dataset.num;
            screen.value+=value;
        })
    })
    equal.addEventListener('click',function(e)
    {
        console.log(screen.value);
       if(screen.value===""){
        screen.value="";
       }else{
        let ans=eval(screen.value);
        screen.value=ans;
       }
    })
    clear.addEventListener('click',function(){
        screen.value="";
    })
    back.addEventListener('click',function()
    {
        let str=String(screen.value);
        decStr= str.slice(0,str.length-1);
        console.log(decStr);
        screen.value=decStr;
       
    })
    percent.addEventListener('click',function(){
        let str1 =String(screen.value);
        let percentValue="";
        for(let i=str1.length-1;i>0;i--)
        {
            var opr;
            if(str1[i]== '+' || str1[i]=='-'|| str1[i]=='*' || str1[i]=='/')
            {
                opr=str1[i];
                str1= str1.slice(0,i);
                cal(opr);
                break;
            }
            percentValue=(percentValue+str1[i]);
            str1= ( str1.slice(0,i));
            
        }
         function cal(opr)
         {
            let reversedStr = percentValue.split('').reverse().join('');
            percentValue=parseInt(reversedStr);
            str1=parseInt(str1);
            answer=(str1*percentValue)/100;
            if(opr==='+')
            {
              output=str1+answer;
            }
            else if(opr==='-')
            {
                output=str1-answer;
            }
            else if(opr==='*')
            {
                output=str1*answer;
            }
            else if(opr==='/')
            {
                output=str1/answer;
            }
        }
        screen.value=output;
       
    })

})();