const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

let bookmarkToastList = document.querySelectorAll('.bookmark-toast')
const bookmarkToast = bookmarkToastList[0]
const bookmarkToastRemove = bookmarkToastList[1]
const bookmarkToastCloseButtonList = document.querySelectorAll(
  '.bookmark-toast .close-button'
)

// bookmark-toast lg-only
const bookmarkButtonDesktop = document.querySelector(
  '.product-info .button-group.lg-only .bookmark-button'
)
const bookmarkFloatingOrderFormButtonDesktop = document.querySelector(
  '.floating-order-form .button-group .bookmark-button'
)

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
  const toastList = [
    orderCtaBookmarkButton,
    bookmarkButtonDesktop,
    bookmarkFloatingOrderFormButtonDesktop,
  ]

  toastList.forEach((toast, idx) => {
    const [icon, countSpan] = toast.children

    if (idx !== 2) {
      const count = parseInt(countSpan.innerHTML.replaceAll(',', ''))

      let newCount = count
      if (toast.classList.contains('is-active')) {
        icon.classList = 'ic-bookmark'
        newCount--
      } else {
        icon.classList = 'ic-bookmark-filled'
        newCount++
      }

      toast.classList.toggle('is-active')
      countSpan.setAttribute(
        'aria-label',
        `북마크 ${newCount.toLocaleString()}회`
      )
      countSpan.textContent = newCount.toLocaleString()
    } else {
      toast.classList.toggle('is-active')

      if (!toast.classList.contains('is-active')) {
        icon.classList = 'ic-bookmark'
      } else {
        icon.classList = 'ic-bookmark-filled'
      }
    }
  })

  showBookmarkToast()
}

/*
 * name: showBookmarkToast()
 * desc: 북마크 여부에 따른 스크랩 모달을 보여준다.
 */
function showBookmarkToast() {
  const item =
    window.innerWidth < 1200 ? orderCtaBookmarkButton : bookmarkButtonDesktop

  if (item.classList.contains('is-active')) {
    bookmarkToast.classList.add('is-active')
    bookmarkToastRemove.classList.remove('is-active')
  } else {
    bookmarkToast.classList.remove('is-active')
    bookmarkToastRemove.classList.add('is-active')
  }

  setTimeout(() => {
    bookmarkToastList.forEach((item) => {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active')
      }
    })
  }, 3500)
}

function closeBookmarkToast() {
  this.parentNode.classList.remove('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)
orderModalOverlay.addEventListener('click', closeOrderModal)
orderCtaBookmarkButton.addEventListener('click', checkBookmark)
bookmarkToastCloseButtonList.forEach((button) => {
  button.addEventListener('click', closeBookmarkToast)
})

bookmarkButtonDesktop.addEventListener('click', checkBookmark)
bookmarkFloatingOrderFormButtonDesktop.addEventListener('click', checkBookmark)
