const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)
const deleteButton = gnbSearchHistory.querySelectorAll('.delete-button')

function closeGnbSearchHistory() {
  gnbSearchHistory.classList.remove('is-active')
  window.removeEventListener('click', closeGnbSearchHistory)
}

function closeGnbSearchHistoryOnClickingOutside(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory()
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length !== 0) {
    // 최근 검색어가 없는 경우에는 검색 내역을 보여주지 않도록 한다.

    if (!gnbSearchHistory.classList.contains('is-active')) {
      window.addEventListener('click', closeGnbSearchHistoryOnClickingOutside)
    }
    gnbSearchHistory.classList.toggle('is-active')
  }
}

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  closeGnbSearchHistory()
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation() // 이벤트 전파 막기

  gnbSearchHistoryList.removeChild(this.parentNode)
  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory()
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)

deleteButton.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem)
})
