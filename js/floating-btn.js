// FAB (Floating Action Button) functionality for all pages
let isFabOpen = false;

function toggleFAB() {
  const mainBtn = document.querySelector('.fab-main');
  const options = document.getElementById('fabOptions');
  const contactIcon = document.querySelector('.contact-icon');
  const closeIcon = document.querySelector('.close-icon');
  const hiText = document.querySelector('.hi-text');
  const closeText = document.querySelector('.close-text');
  const fabContainer = document.querySelector('.fab-container');
  
  isFabOpen = !isFabOpen;
  
  if (isFabOpen) {
    mainBtn.classList.add('rotate');
    options.classList.add('show');
    fabContainer.classList.add('manually-opened');
    // Switch text
    hiText.style.display = 'none';
    closeText.style.display = 'block';
    // Smooth icon transition
    contactIcon.style.opacity = '0';
    contactIcon.style.transform = 'scale(0.8)';
    setTimeout(() => {
      contactIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      closeIcon.style.opacity = '0';
      closeIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'scale(1)';
      }, 50);
    }, 200);
  } else {
    mainBtn.classList.remove('rotate');
    options.classList.remove('show');
    fabContainer.classList.remove('manually-opened');
    // Switch text
    closeText.style.display = 'none';
    hiText.style.display = 'block';
    // Smooth icon transition
    closeIcon.style.opacity = '0';
    closeIcon.style.transform = 'scale(0.8)';
    setTimeout(() => {
      closeIcon.style.display = 'none';
      contactIcon.style.display = 'block';
      contactIcon.style.opacity = '0';
      contactIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        contactIcon.style.opacity = '1';
        contactIcon.style.transform = 'scale(1)';
      }, 50);
    }, 200);
  }
  
  // Hide WhatsApp chat if open
  const whatsappChat = document.getElementById("whatsapp-chat-box");
  if (whatsappChat) {
    whatsappChat.style.display = "none";
    whatsappChat.classList.remove('show');
  }
}

function toggleWhatsAppChat() {
  const chatBox = document.getElementById("whatsapp-chat-box");
  if (!chatBox) return;
  
  if (chatBox.style.display === "flex") {
    // Hide with animation
    chatBox.classList.remove('show');
    setTimeout(() => {
      chatBox.style.display = "none";
    }, 400); // Match the transition duration
  } else {
    // Show with animation
    chatBox.style.display = "flex";
    // Small delay to ensure display is set before adding class
    setTimeout(() => {
      chatBox.classList.add('show');
    }, 10);
  }
}

function sendWhatsAppMessage() {
  const messageInput = document.getElementById("whatsapp-user-msg");
  if (!messageInput) return;
  
  const message = messageInput.value.trim();
  if (message !== "") {
    const phoneNumber = "919979959364"; // Your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    messageInput.value = "";
  }
}

// Initialize FAB functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const fabContainer = document.querySelector('.fab-container');
  const fabMain = document.querySelector('.fab-main');
  const fabOptions = document.getElementById('fabOptions');
  const contactIcon = document.querySelector('.contact-icon');
  const closeIcon = document.querySelector('.close-icon');
  const hiText = document.querySelector('.hi-text');
  const closeText = document.querySelector('.close-text');
  
  // Check if FAB elements exist
  if (!fabContainer || !fabMain || !fabOptions) {
    console.log('FAB elements not found on this page');
    return;
  }
  
  let hoverTimeout;
  
  // Show options initially after 1 second
  setTimeout(() => {
    fabMain.classList.add('rotate');
    fabOptions.classList.add('show');
    fabContainer.classList.add('manually-opened');
    hiText.style.display = 'none';
    closeText.style.display = 'block';
    
    // Smooth icon transition
    contactIcon.style.opacity = '0';
    contactIcon.style.transform = 'scale(0.8)';
    setTimeout(() => {
      contactIcon.style.display = 'none';
      closeIcon.style.display = 'block';
      closeIcon.style.opacity = '0';
      closeIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        closeIcon.style.opacity = '1';
        closeIcon.style.transform = 'scale(1)';
      }, 50);
    }, 200);
    
    isFabOpen = true;
    
    // Hide options after 3 seconds
    setTimeout(() => {
      fabMain.classList.remove('rotate');
      fabOptions.classList.remove('show');
      fabContainer.classList.remove('manually-opened');
      closeText.style.display = 'none';
      hiText.style.display = 'block';
      
      // Smooth icon transition
      closeIcon.style.opacity = '0';
      closeIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        closeIcon.style.display = 'none';
        contactIcon.style.display = 'block';
        contactIcon.style.opacity = '0';
        contactIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
          contactIcon.style.opacity = '1';
          contactIcon.style.transform = 'scale(1)';
        }, 50);
      }, 200);
      
      isFabOpen = false;
    }, 3000);
  }, 1000);
  
  fabMain.addEventListener('mouseenter', function() {
    clearTimeout(hoverTimeout);
    if (!isFabOpen) {
      fabMain.classList.add('rotate');
      fabOptions.classList.add('show');
      hiText.style.display = 'none';
      closeText.style.display = 'block';
      
      // Smooth icon transition
      contactIcon.style.opacity = '0';
      contactIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        contactIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
          closeIcon.style.opacity = '1';
          closeIcon.style.transform = 'scale(1)';
        }, 50);
      }, 200);
    }
  });
  
  fabOptions.addEventListener('mouseenter', function() {
    clearTimeout(hoverTimeout);
    if (!isFabOpen) {
      fabMain.classList.add('rotate');
      fabOptions.classList.add('show');
      hiText.style.display = 'none';
      closeText.style.display = 'block';
    }
  });
  
  fabContainer.addEventListener('mouseleave', function() {
    if (!isFabOpen) {
      hoverTimeout = setTimeout(function() {
        fabMain.classList.remove('rotate');
        fabOptions.classList.remove('show');
        closeText.style.display = 'none';
        hiText.style.display = 'block';
        
        // Smooth icon transition
        closeIcon.style.opacity = '0';
        closeIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
          closeIcon.style.display = 'none';
          contactIcon.style.display = 'block';
          contactIcon.style.opacity = '0';
          contactIcon.style.transform = 'scale(0.8)';
          setTimeout(() => {
            contactIcon.style.opacity = '1';
            contactIcon.style.transform = 'scale(1)';
          }, 50);
        }, 200);
      }, 300); // Small delay to prevent flickering
    }
  });
  
  // Close FAB when clicking outside
  document.addEventListener('click', function(event) {
    if (isFabOpen && !fabContainer.contains(event.target)) {
      mainBtn.classList.remove('rotate');
      fabOptions.classList.remove('show');
      fabContainer.classList.remove('manually-opened');
      
      // Switch text
      closeText.style.display = 'none';
      hiText.style.display = 'block';
      
      // Smooth icon transition
      closeIcon.style.opacity = '0';
      closeIcon.style.transform = 'scale(0.8)';
      setTimeout(() => {
        closeIcon.style.display = 'none';
        contactIcon.style.display = 'block';
        contactIcon.style.opacity = '0';
        contactIcon.style.transform = 'scale(0.8)';
        setTimeout(() => {
          contactIcon.style.opacity = '1';
          contactIcon.style.transform = 'scale(1)';
        }, 50);
      }, 200);
      
      isFabOpen = false;
    }
  });
}); 