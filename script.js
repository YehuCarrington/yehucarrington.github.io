document.addEventListener('mousemove', function(e) {
    const trail = document.createElement('div');
    trail.className = 'mouse-trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);
    
    // Fade out the trail after a short delay
    setTimeout(() => {
      trail.style.opacity = '0';
    }, 50);
    
    // Remove the element from the DOM after it has faded out
    setTimeout(() => {
      trail.remove();
    }, 550);
  });
  