document.getElementById('diposit-btn').addEventListener('click',function(){
    const dipositInput=document.getElementById('diposit-input');
    const dipositAmount=dipositInput.value;
    
    const dipositTotal=document.getElementById('diposit-total');

    const previusdiposit=dipositTotal.innerText;
    const totalDiposit=parseFloat(previusdiposit)+parseFloat(dipositAmount);

    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previusbalance=parseFloat(balanceTotalText);
    const newBalanceTotal= previusbalance+parseFloat(dipositAmount);
    balanceTotal.innerText=newBalanceTotal;

    dipositTotal.innerText=totalDiposit;
    
    dipositInput.value='';
})


document.getElementById('withdrow-btn').addEventListener('click',function(){
    const withdrowInput=document.getElementById('withdrow-input')
    const withdrowInputText=withdrowInput.value;
    const newWithdrowInput=parseFloat(withdrowInputText)

    const withdrowTotalText=document.getElementById('withdrow-total');
    const previuswithdrowText=withdrowTotalText.innerText;
    const previuswithdrowTotal=parseFloat(previuswithdrowText);
    const newWithdrowTotal=previuswithdrowTotal+newWithdrowInput;
    withdrowTotalText.innerText=newWithdrowTotal;

    const balanceTotal=document.getElementById('balance-total');
    const previusBalanceText=balanceTotal.innerText;
    const previusBalanceTotal=parseFloat(previusBalanceText);

    const newBalanceTotal=previusBalanceTotal-newWithdrowTotal;

    balanceTotal.innerText=newBalanceTotal;
    
    
   

    withdrowInput.value='';
})