const price = document.querySelector('#price')
const peoople = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')

const checkForm = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
    } else {
        countBill();
    }
}


const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2)

}



countBtn.addEventListener('click', checkForm)