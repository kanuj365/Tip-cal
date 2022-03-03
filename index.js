const cal=()=>{
    var amount=document.getElementById('bill_amount').value;
    alert(amount)
    var perc=document.getElementById('tip_price').value;
    alert(perc)
    var tip=amount*(perc/100);
    alert(tip)
    var total=tip+Number(amount);
    document.getElementById('tip_total').value=tip;
    document.getElementById('total_billed').value=total;

}
//
