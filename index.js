// Your code here
function saturdayFun(activity="roller-skate"){
return "This Saturday, I want to "+activity+"!";}
saturdayFun();
saturdayFun("bath my dog");

function mondayWork(activity="go to the office"){return "This Monday, I will "+activity+"."}
mondayWork("work from home");

function wrapAdjective(bb="*"){return function(dd="special"){return "You are " + bb+dd+bb+"!"}}

const Calculator= {add: function(a,b){return a+b}, subtract: function(a,b){return a-b}, multiply: function (a,b){return a*b}, divide: function(a,b){return a/b}}
function actionApplyer(a,b){let startPoint=a
  for(let i=0; i<b.length; i++){startPoint=b[i](startPoint)}
  return startPoint
}