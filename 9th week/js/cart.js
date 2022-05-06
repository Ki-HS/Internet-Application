function itemSum(frm) {
  var sum = 0;
  var count = frm.pd.length;
  for (var i = 0; i < count; i++) {
    if (frm.pd[i].checked == true) {
      sum += parseInt(frm.pd[i].value);
    }
  }
  frm.total_sum.value = sum;
}
