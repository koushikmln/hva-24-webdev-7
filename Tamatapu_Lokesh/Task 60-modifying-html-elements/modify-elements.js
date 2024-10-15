let event = document.getElementById("button");

const eve = event.addEventListener('click',function(){
  
    let textParagraph = document.getElementById('textParagraph');
    
    textParagraph.textContent = 'Text has been changed!';
    
});

let event1 = document.getElementById("hover");

const eve1 = event1.addEventListener('mouseover',function(){
  
    event1.style.backgroundColor = 'yellow';
    
    event1.style.color = 'blue';
    
});

let insertHtmlButton = document.getElementById('insertHtmlButton'); 

let htmlContentDiv = document.getElementById('htmlContentDiv');

const eve2 = insertHtmlButton.addEventListener('click',function(){
  
    htmlContentDiv.innerHTML = '<h2>New Heading</h2><p>This is dynamically added content</p>';
    
});