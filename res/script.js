
const menuItems = [
    {
      name: "Chettinad Chicken",
      price: "₹320",
      description: "Spicy chicken curry with aromatic Chettinad spices",
      image:
        "images/chettinad-chicken-curry-hot-spicy-600nw-600874184.webp",
    },
    {
      name: "Karaikudi Pepper Chicken",
      price: "₹380",
      description: "Dry chicken roast with black pepper and Karaikudi spices",
      image:
        "images/Low-res-Andhra-Pepper-Chicken-2.jpg",
    },
    {
      name: "Dindigul Thalappakatti Biryani",
      price: "₹480",
      description: "Seeraga Samba rice biryani from Dindigul, Tamil Nadu",
      image:
        "images/kabobs-3-thalapakattu-chicken-biryani.jpg",
    },
    {
      name: "Kongu Nadu Chicken Kuzhambu",
      price: "₹350",
      description: "Chicken curry from the Kongu region with unique spices",
      image:
        "images/ChettinadChicken2-1280x720.jpg",
    },
    {
      name: "Nagercoil Fish Curry",
      price: "₹380",
      description: "Tangy and spicy fish curry from Nagercoil",
      image:
        "images/thumb__1200_0_0_0_auto.jpg",
    },
    {
      name: "Chettinad Mutton Chukka",
      price: "₹400",
      description: "Dry mutton roast with Chettinad spices and onions",
      image:
        "images/hq720.jpg",
    },
  ]
  
  
  function loadMenu() {
    const menuContainer = document.getElementById("menuItems")
    if (!menuContainer) return
  
    menuContainer.innerHTML = menuItems
      .map(
        (item) => `
          <div class="col-lg-4 col-md-6 mb-4">
              <div class="card menu-card h-100">
                  <img src="${item.image}" class="card-img-top" alt="${item.name}">
                  <div class="card-body d-flex flex-column">
                      <h5 class="card-title fw-bold">${item.name}</h5>
                      <p class="price mb-2 fs-5">${item.price}</p>
                      <p class="card-text flex-grow-1">${item.description}</p>
                  </div>
              </div>
          </div>
      `,
      )
      .join("")
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    loadMenu()
  
    
    const reserveBtn = document.getElementById("reserveBtn")
    if (reserveBtn) {
      reserveBtn.addEventListener("click", () => {
        const modalElement = document.getElementById("reservationModal")
        const modal = new bootstrap.Modal(modalElement)
        modal.show()
      })
    }
  
    
    const confirmBtn = document.getElementById("confirmReservation")
    if (confirmBtn) {
      confirmBtn.addEventListener("click", () => {
        const form = document.getElementById("reservationForm")
  
        const name = document.getElementById("resName").value
        const phone = document.getElementById("resPhone").value
        const date = document.getElementById("resDate").value
        const time = document.getElementById("resTime").value
        const guests = document.getElementById("resGuests").value
  
        if (name && phone && date && time && guests) {
          alert(
            `Reservation confirmed for ${name}!\n\nDetails:\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\n\nWe'll call you to confirm within 2 hours.`,
          )
  
          form.reset()
          const modalInstance = bootstrap.Modal.getInstance(document.getElementById("reservationModal"))
          modalInstance.hide()
        } else {
          alert("Please fill in all required fields (marked with *)")
        }
      })
    }
  
    
    const submitBtn = document.getElementById("submitBtn")
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        const name = document.getElementById("nameInput").value
        const email = document.getElementById("emailInput").value
        const message = document.getElementById("messageInput").value
  
        if (name && email && message) {
          alert(`Thanks for your message, ${name}! We'll contact you at ${email} within 24 hours.`)
          document.getElementById("nameInput").value = ""
          document.getElementById("emailInput").value = ""
          document.getElementById("messageInput").value = ""
        } else {
          alert("Please fill in all fields.")
        }
      })
    }
  
    
    const dateInput = document.getElementById("resDate")
    if (dateInput) {
      const today = new Date().toISOString().split("T")[0]
      dateInput.setAttribute("min", today)
    }
  })
  