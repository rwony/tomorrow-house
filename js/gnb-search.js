const gnbSearch = document.querySelector('.gnb-search')
const gnbSearchInput = gnbSearch.querySelector('input')
const gnbSearchHistory = gnbSearch.querySelector('.search-history')
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol')

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
)

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active')
    window.removeEventListener('click', closeGnbSearchHistory)
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length !== 0) {
    // 최근 검색어가 없는 경우에는 검색 내역을 보여주지 않도록 한다.
    if (!gnbSearchHistory.classList.contains('is-active')) {
      window.addEventListener('click', closeGnbSearchHistory)
    }
    gnbSearchHistory.classList.toggle('is-active')
  }
}

function deleteAllSearchHistoryItems() {
  gnbSearchHistoryList.innerHTML = ''
  gnbSearchHistory.classList.remove('is-active')
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory)
deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems)
