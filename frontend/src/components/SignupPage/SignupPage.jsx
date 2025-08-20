<>
    toast.success('Account created successfully! Welcome to PremiumDrive', {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
      onClose: () => navigate('/login')
    });



  {/* Animated Background */}
  <div className={signupStyles.animatedBackground.base}>
    <div
      className={`${signupStyles.animatedBackground.orb1} ${
        isActive
          ? "translate-x-10 sm:translate-x-20 translate-y-5 sm:translate-y-10"
          : ""
      }`}
    ></div>
    <div
      className={`${signupStyles.animatedBackground.orb2} ${
        isActive
          ? "-translate-x-10 sm:-translate-x-20 -translate-y-5 sm:-translate-y-10"
          : ""
      }`}
    ></div>
    <div
      className={`${signupStyles.animatedBackground.orb3} ${
        isActive
          ? "-translate-x-5 sm:-translate-x-10 translate-y-10 sm:translate-y-20"
          : ""
      }`}
    ></div>
  </div>

  <ToastContainer
    position="top-right"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    toastStyle={{
      backgroundColor: "#fb923c",
      color: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 20px rgba(245,124,0,0.18)",
      fontFamily: "'Montserrat', sans-serif",
    }}
  />

  {/* Font Import */}
  <style>
    {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
          body { font-family: 'Montserrat', sans-serif; }
        `}
  </style>
</>;
