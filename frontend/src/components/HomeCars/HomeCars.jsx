  const handleImageError = (e) => {
    const wrapper = e.target.parentNode;
    e.target.remove();
    const placeholder = document.createElement('div');
    placeholder.className = styles.placeholder;
    placeholder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="48" height="48"><path d="M3 6.75C3 5.78 3.78 5 4.75 5h14.5c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H4.75A1.75 1.75 0 0 1 3 17.25V6.75zM8.5 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>';
    wrapper.appendChild(placeholder);
  };

            const patternStyle = styles.cardPatterns[idx % styles.cardPatterns.length];
          const borderStyle = styles.borderGradients[idx % styles.borderGradients.length];
          const shapeStyle = styles.cardShapes[idx % styles.cardShapes.length];


             <div
              key={car.id}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${styles.card} ${patternStyle} border ${borderStyle} ${
                animateCards ? 'opacity-100' : 'opacity-0 translate-y-10'
              } hover:shadow-2xl hover:-translate-y-3`}
              style={{ 
                clipPath: 'polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                transformStyle: 'preserve-3d',
                transitionDelay: `${animateCards ? idx * 100 : 0}ms`
              }}
            >
              ₹
            </div>

            [  
                    { icon: Users, value: car.seats, label: 'Seats' },
                    { icon: Fuel, value: car.fuel, label: 'Fuel' },
                    { icon: Gauge, value: car.mileage, label: 'Mileage' },
                    { icon: CheckCircle, value: car.transmission, label: 'Trans' },
                  ]
