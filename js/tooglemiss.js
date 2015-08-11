function tooglemiss(n) {

    var ibtn1 = document.getElementById('ibtn1');
    var ibtn2 = document.getElementById('ibtn2');

    var miss_1 = document.getElementById('miss_1');
    var miss_2 = document.getElementById('miss_2');

    if (n == 1) {
        ibtn1.src = 'http://www.ecobank.com/img/miss_btn_enable.gif';
        ibtn2.src = 'http://www.ecobank.com/img/miss_btn_disable.gif';
        miss_1.style.display = '';
        miss_2.style.display = 'none';
    }

    if (n == 2) {
        ibtn1.src = 'http://www.ecobank.com/img/miss_btn_disable.gif';
        ibtn2.src = 'http://www.ecobank.com/img/miss_btn_enable.gif';
        miss_1.style.display = 'none';
        miss_2.style.display = '';
    } 
  

    return void (0);
}
