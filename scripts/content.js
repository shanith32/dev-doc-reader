const pageDoc = document.querySelector('#page-doc');

if (pageDoc) {
  // Get all the text within the div tag
  let text = pageDoc.innerText;

  // Split the text into words
  let words = text.split(' ');

  // Create a new span for each word
  let spans = words.map(word => {
    let span = document.createElement('span');
    span.innerText = word + ' ';
    return span;
  });

  // Replace the div's content with the new spans
  pageDoc.innerHTML = '';
  spans.forEach(span => pageDoc.appendChild(span));

  // Function to underline a word
  function underlineWord(index) {
    if (index > 0) {
      spans[index - 1].style.textDecoration = 'none';
    }
    spans[index].style.textDecoration = 'underline';
  }

  // Underline each word one by one
  let index = 0;
  let intervalId = setInterval(() => {
    underlineWord(index);
    index++;
    if (index >= spans.length) {
      clearInterval(intervalId);
    }
  }, 100);
}