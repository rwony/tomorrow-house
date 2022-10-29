const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

function checkBookmark() {
  const [icon, countSpan] = this.children
  const count = parseInt(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    icon.classList = 'ic-bookmark'
    newCount--
  } else {
    icon.classList = 'ic-bookmark-filled'
    newCount++
  }

  this.classList.toggle('is-active')
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  countSpan.textContent = newCount.toLocaleString()
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
orderCtaBookmarkButton.addEventListener('click', checkBookmark)
