const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
)

function showFullSection() {
  const section = this.parentNode.parentNode
  section.classList.toggle('is-open')
}

sectionHeaderIconButton.addEventListener('click', showFullSection)
