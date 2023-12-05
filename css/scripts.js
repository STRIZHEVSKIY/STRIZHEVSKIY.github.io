function incrementCounter(card) {
    const counterElement = card.querySelector('.counter');
    const currentCount = parseInt(card.getAttribute('data-counter'));
    const newCount = currentCount + 1;
    card.setAttribute('data-counter', newCount);
    counterElement.textContent = newCount;
}
