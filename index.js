function carPriceCalculator() {
    let carBrand = Number(document.getElementById('exampleFormControlSelect1').value);
    let carFuel = Number(document.getElementById('exampleRadios').value);
    let carQuipment = Number(document.getElementById('exampleFormControlSelect2').value);
    let carAge = Number(document.getElementById('exampleRadios11').value);
    let carBody = Number(document.getElementById('exampleFormControlSelect3').value);
    let sumCar = carBrand + carFuel + carQuipment + carAge + carBody;

    console.log(carBrand);
    console.log(carFuel);
    console.log(carQuipment);
    console.log(carAge);
    console.log(carBody);
    console.log(sumCar);
    console.log(Number.isNaN(sumCar));

    if(Number.isNaN(sumCar) == false){
        document.getElementById('result').innerHTML = 'Стоимость авто составляет: ' + sumCar + ' рублей';
    } else document.getElementById('result').innerHTML = 'Некорректные данные!';
}

function restartPage(){
    document.location.reload(true);
}