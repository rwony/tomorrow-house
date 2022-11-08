const orderSelect = document.querySelectorAll('.order-inputs select')
const checkoutItemList = document.querySelectorAll(
  '.order-checkouts .checkout-list'
)
const checkoutItemLi = checkoutItemList[0].querySelector('.checkout-item')

const checkoutItems = document.querySelectorAll('.checkout-item')
const checkoutFooter = document.querySelectorAll('.checkout-footer')
const orderAmount = document.querySelectorAll('.order-summary')

function addCheckoutItem() {
  const selectedItem = this.options[this.selectedIndex]
  const name = selectedItem.text
  const price = Number(selectedItem.dataset.price)

  checkoutItemList.forEach((it) => {
    const templete = checkoutItemLi.cloneNode(true)
    templete.setAttribute('data-price', price)
    templete.querySelector('h4').innerHTML = name
    templete.querySelector('.amount').innerHTML = price.toLocaleString()
    templete.querySelector('select').addEventListener('change', changeAmount)
    it.append(templete)
  })

  getTotalAmount()
}

function changeAmount() {
  const originalPrice = Number(this.closest('.checkout-item').dataset.price)
  const amountElement =
    this.parentNode.nextElementSibling.querySelector('.amount')
  console.log(this.options[this.selectedIndex])
  const count = Number(this.options[this.selectedIndex].text)

  const amount = (originalPrice * count).toLocaleString()
  amountElement.innerHTML = amount

  getTotalAmount()
}

function getTotalAmount() {
  const checkoutLiItems = checkoutItemList[0].children
  let amount = 0

  HTMLCollection.prototype.forEach = Array.prototype.forEach
  checkoutLiItems.forEach((element) => {
    amount += Number(
      element.querySelector('.amount').innerHTML.replaceAll(',', '')
    )
  })

  orderAmount.forEach((element) => {
    element.querySelector('.amount').innerHTML = amount.toLocaleString()
  })
}

orderSelect.forEach((item) => {
  item.addEventListener('change', addCheckoutItem)
})

checkoutItemList.forEach((item) => {
  item.querySelector('select').addEventListener('change', changeAmount)
})
