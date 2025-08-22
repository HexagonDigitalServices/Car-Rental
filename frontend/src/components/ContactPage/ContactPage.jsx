 const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage =
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Car Type: ${formData.carType}%0A` +
      `Message: ${formData.message}`;
    window.open(`https://wa.me/+918299431275?text=${whatsappMessage}`, '_blank');

    setFormData({ name: '', email: '', phone: '', carType: '', message: '' });
  };

    <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(30deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(150deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(30deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(150deg, rgba(249,115,22,0.08) 12%, transparent 12.5%, transparent 87%, rgba(249,115,22,0.08) 87.5%, rgba(249,115,22,0.08)),
            linear-gradient(60deg, rgba(234,88,12,0.08) 25%, transparent 25.5%, transparent 75%, rgba(234,88,12,0.08) 75%, rgba(234,88,12,0.08)),
            linear-gradient(60deg, rgba(234,88,12,0.08) 25%, transparent 25.5%, transparent 75%, rgba(234,88,12,0.08) 75%, rgba(234,88,12,0.08))`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }}></div>

     {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className={styles.triangle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#fb923c' : '#fdba74',
              transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.5 + 0.5})`
            }}
          ></div>
        ))}

[
                  { icon: FaWhatsapp, label: 'WhatsApp', value: '+91 8299431275', color: 'bg-green-900/30' },
                  { icon: FaEnvelope, label: 'Email', value: 'contact@hexagonsservices.com', color: 'bg-orange-900/30' },
                  { icon: FaClock, label: 'Hours', value: 'Mon-Sat: 8AM-8PM', color: 'bg-orange-900/30' },
                ]

   {['name', 'email', 'phone', 'carType'].map((field) => {
                  const icons = { 
                    name: FaUser, 
                    email: FaEnvelope, 
                    phone: FaPhone, 
                    carType: FaCar 
                  };

                  const placeholders = { 
                    name: 'Full Name', 
                    email: 'Email Address', 
                    phone: 'Phone Number', 
                    carType: 'Select Car Type' 
                  };

         ['Economy', 'SUV', 'Luxury', 'Van', 'Sports Car', 'Convertible']


      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeIn { 
          from { opacity:0; transform:translateY(10px);} 
          to { opacity:1; transform:translateY(0);} 
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
   
