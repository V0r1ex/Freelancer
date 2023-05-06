const loader = $('<div class="loader"><div class="spinner"></div></div>')
$('body').append(loader)

window.onload = () => { $('.dark-fon, .loader').remove() }
