function carPriceCalculator() {
    let carBrand = Number(document.getElementById('carBrand').value); //марка машины
    let carQuipment = Number(document.getElementById('carQuipmentSelect').value);//оснащенность
    let carBody = Number(document.getElementById('carBodySelect').value);//тип кузова

    //получаем value для топлива
    let checkedValueCarFuel = null; 
    let inputElements1 = document.getElementsByName('cheak1');
    for(let i=0; inputElements1[i]; ++i){
        if(inputElements1[i].checked){
            checkedValueCarFuel = inputElements1[i].value;
            break;
        }
    }
    
    //получаем value для возраста машины
    let checkedValueCarAge = null; 
    let inputElements2 = document.getElementsByName('cheak2');
    for(let i=0; inputElements2[i]; ++i){
        if(inputElements2[i].checked){
            checkedValueCarAge = inputElements2[i].value;
            break;
        }
    }
    
    let sumCar = carBrand + Number(checkedValueCarFuel) + carQuipment + Number(checkedValueCarAge) + carBody;

    console.log("value марки машины " + carBrand);
    console.log("value топлива " + checkedValueCarFuel);
    console.log("value оснащенности " + carQuipment);
    console.log("value возраста машины " + checkedValueCarAge);
    console.log("value типа кузова " + carBody);
    console.log("Общая сумма " + sumCar);
    console.log("Проверка на корректность (false - данные корректные, true - данные не корректные) " + Number.isNaN(sumCar));

    if(Number.isNaN(sumCar) == false){
        document.getElementById('result').innerHTML = 'Стоимость авто составляет: ' + sumCar + ' рублей';
    } else document.getElementById('result').innerHTML = 'Некорректные данные!';
}

function restartPage(){
    document.location.reload(true);
}