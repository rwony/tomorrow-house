const orderSelect = document.querySelectorAll('.order-inputs select')
const checkoutItemList = document.querySelectorAll(
  '.order-checkouts .checkout-list'
)
const checkoutItemLi = checkoutItemList[0].querySelector('.checkout-item')

const checkoutItems = document.querySelectorAll('.checkout-item')
const checkoutFooter = document.querySelectorAll('.checkout-footer')
const orderAmount = document.querySelector('.order-summary')

function addCheckoutItem() {
  const selectedItem = this.options[this.selectedIndex]
  const name = selectedItem.text
  const price = Number(selectedItem.dataset.price)

  checkoutItemList.forEach((it) => {
    const templete = checkoutItemLi.cloneNode(true)
    templete.setAttribute('data-price', price)
    templete.querySelector('h4').innerHTML = name
    templete.querySelector('.amount').innerHTML = price.toLocaleString()
    it.append(templete)
  })
}

function changeAmount() {
  const originalPrice = Number(this.closest('.checkout-item').dataset.price)
  const amountElement =
    this.parentNode.nextElementSibling.querySelector('.amount')
  const count = Number(this.options[this.selectedIndex].text)

  const amount = (originalPrice * count).toLocaleString()
  amountElement.innerHTML = amount
}

orderSelect.forEach((item) => {
  item.addEventListener('change', addCheckoutItem)
})

checkoutItems.forEach((item) => {
  item.querySelector('select').addEventListener('change', changeAmount)
})
