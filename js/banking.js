document.getElementById('diposit-btn').addEventListener('click',function(){
    const dipositInput=document.getElementById('diposit-input');
    const dipositAmount=dipositInput.value;
    
    const dipositTotal=document.getElementById('diposit-total');

    const previusdiposit=dipositTotal.innerText;
    const totalDiposit=parseFloat(previusdiposit)+parseFloat(dipositAmount);

    const balanceTotal=document.getElementById('balance-total');
    const balanceTotalText=balanceTotal.innerText;
    const previusbalance=parseFloat(balanceTotalText);
    

    dipositTotal.innerText=totalDiposit;
    
    dipositInput.value='';
})