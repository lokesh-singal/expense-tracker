let main_balance = document.querySelector('.main-balance');
let income_balance = document.querySelector('.income-balance');
let expence_balance = document.querySelector('.expense-balance');

let input_amount = document.getElementById('amount')
let input_details = document.getElementById('details')

let expense_btn = document.querySelector('.expense-btn')
let income_btn = document.querySelector('.income-btn')



// Add Income
const addIncome = () => {
    let amount = input_amount.value;
    main_balance.textContent = Number(main_balance.textContent) + Number(amount);
    if (main_balance.textContent > 0) {
        main_balance.classList.remove('expense')
        main_balance.classList.add('income')
    }
    income_balance.textContent = Number(income_balance.textContent) + Number(amount)

    // adding transaction list
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'income-div list')
    newDiv.textContent = `income ${input_amount.value} by ${input_details.value}`;
    document.querySelector(".transactions").append(newDiv)

    input_amount.value = ""
    input_details.value = ""
}

// subtract Expence
const subtractExpence = () => {
    let amount = input_amount.value;
    main_balance.textContent = Number(main_balance.textContent) - Number(amount);
    if (main_balance.textContent < 0) {
        main_balance.classList.remove('income')
        main_balance.classList.add('expense')
    }
    expence_balance.textContent = Number(expence_balance.textContent) + Number(amount)

    // adding transaction list
    let newDiv = document.createElement('div')
    newDiv.setAttribute('class', 'expense-div list')
    newDiv.textContent = `expense ${input_amount.value} for ${input_details.value}`;
    document.querySelector(".transactions").append(newDiv)

    input_amount.value = ""
    input_details.value = ""
}

// button functionality
income_btn.addEventListener('click', (e) => {
    e.preventDefault();
    addIncome()
})

expense_btn.addEventListener("click", (e) => {
    e.preventDefault()
    subtractExpence()
})