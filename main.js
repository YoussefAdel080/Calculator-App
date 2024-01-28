let calcNums = document.getElementsByClassName  ("calc-btn");
let operators = document.getElementsByClassName ("operator");
let delBtn = document.getElementById("delete-btn");
let resetBtn = document.getElementById("reset-btn");
let equalBtn = document.getElementById("equal-btn");
let result = document.getElementById("result");
let calcNumsArr = [];
let operatorsArr = [];
let formula = '';

//converting htmlcollection into an array
for( number of calcNums )
{
    calcNumsArr.push(number);
};

for(op of operators)
{
    operatorsArr.push(op);
};


for( number of calcNumsArr)
{
    number.addEventListener("click" , function(e)
    {  
        if('0123456789'.includes(e.target.innerText) || e.target.innerText == '.' && '0123456789'.includes(formula[formula.length - 1]) && formula != '')
        {
            formula += e.target.innerText;
            result.innerHTML = formula;   
        }
        else if((e.target.innerText) == '.' && formula == '')
        {
            formula = '0.';
            result.innerHTML = formula;
        };
    });
};

for(op of operatorsArr)
{
    op.addEventListener('click' , function(e)
    {
        if('+-/'.includes(e.target.innerText) && formula != '' && !('./+-*'.includes(formula[formula.length - 1])))
        {
            formula += e.target.innerText;
            result.innerHTML = formula;
        }
        else if(e.target.innerText == 'x' && formula && !('*./+-'.includes(formula[formula.length - 1])))
        {
            formula += '*';
            result.innerHTML = formula;
        };
    });
};




// reset button  
resetBtn.addEventListener('click' , function(){
    formula = '';
    result.innerHTML = formula;
});

delBtn.addEventListener('click' , function()
{
    formula = formula.slice(0 , -1);
    result.innerHTML = formula;
});

equalBtn.addEventListener("click" , function()
{

    formula = eval(formula).toString();
    result.innerHTML = formula;    
});

