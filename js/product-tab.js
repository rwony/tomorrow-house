const TOP_HEADER_DESKTOP = 80 + 50 + 54
const TOP_HEADER_MOBILE = 50 + 40 + 40

const productTab = document.querySelector('.product-tab')
const productTabButtonList = productTab.querySelectorAll('button')

const productTablPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
]
const productTablPanelList = productTablPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`)
  return tabPanel
})
const productTablPanelPositionMap = {}

let currentActiveTab = productTab.querySelector('.is-active')
let disableUpdating = false

/*
 * name: toggleActiveTab()
 * desc: 탭 클릭 시 해당 탭에 is-active 클래스를 추가한다.
 */
function toggleActiveTab() {
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    disableUpdating = true

    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem

    setTimeout(() => {
      disableUpdating = false
    }, 1000)
  }
}

/*
 * name: scrollTabPanel()
 * desc: 탭 클릭 시 해당 탭의 위치로 스크롤이 이동한다.
 */
function scrollTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby')
  const tabPanel = document.querySelector(`#${tabPanelId}`)
  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE)

  window.scrollBy({ top: scrollAmount, behavior: 'smooth' })
}

/*
 * name: detectTablPanelPosition()
 * desc: 각각의 tabPanel의 y축 위치를 찾고, productTablPanelPositionMap 객체에 그 값을 업데이트한다.
 */
function detectTablPanelPosition() {
  productTablPanelList.forEach((panel) => {
    const id = panel.getAttribute('id')
    const position = window.scrollY + panel.getBoundingClientRect().top
    productTablPanelPositionMap[id] = position
  })

  updateActiveTabOnScroll()
}

/*
 * name: updateActiveTabOnScroll()
 * desc: 스크롤 위치에 따라서 activeTab 업데이트
 */
function updateActiveTabOnScroll() {
  if (disableUpdating) {
    return
  }

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP + 80 : TOP_HEADER_MOBILE + 8)

  let newActiveTab
  if (scrolledAmount >= productTablPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4] // 추천
  } else if (
    scrolledAmount >= productTablPanelPositionMap['product-shipment']
  ) {
    newActiveTab = productTabButtonList[3] // 배송/환불
  } else if (scrolledAmount >= productTablPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2] // 문의
  } else if (scrolledAmount >= productTablPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1] // 리뷰
  } else {
    newActiveTab = productTabButtonList[0] // 상품정보
  }

  // 페이지를 끝까지 스크롤 한 경우
  // 태블릿 이하의 사이즈인 경우 footer의 margin-bottom 56을 더해줘야 한다.
  const bodyHeight =
    document.body.offsetHeight + (window.innerHeight < 1200 ? 56 : 0)

  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4] // 추천
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active')
      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active')
      }
      currentActiveTab = newActiveTab
    }
  }
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
  button.addEventListener('click', scrollTabPanel)
})

window.addEventListener('load', detectTablPanelPosition)
window.addEventListener('resize', detectTablPanelPosition)
window.addEventListener('scroll', updateActiveTabOnScroll)
