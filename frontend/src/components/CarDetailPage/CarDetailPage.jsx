// today's date for date inputs
  const [today, setToday] = useState('');
  useEffect(() => {
    setToday(new Date().toISOString().split('T')[0]);
  }, []);

  // get car from router state or fallback to data
  const car =
    location.state?.car ||
    carsData.find((c) => String(c.id) === id);
  if (!car) return <div className="p-4 text-white">Car not found.</div>;

  // safe transmission label
  const transmissionLabel = car.transmission
    ? car.transmission.toLowerCase()
    : 'standard';

  // carousel
  const [currentImage, setCurrentImage] = useState(0);
  const carImages = [car.image, ...(car.images || [])];

  // booking form state
  const initialForm = {
    pickupDate: '',
    returnDate: '',
    pickupLocation: '',
    name: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Data:', formData);
    toast.success('Booking confirmed!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setFormData(initialForm);
  };
₹
[
                { Icon: FaUserFriends, label: 'Seats', value: car.seats, color: 'text-orange-400' },
                { Icon: FaGasPump, label: 'Fuel', value: car.fuel, color: 'text-green-400' },
                { Icon: FaTachometerAlt, label: 'Mileage', value: car.mileage, color: 'text-yellow-400' },
                { Icon: FaCheckCircle, label: 'Transmission', value: transmissionLabel, color: 'text-purple-400' },
              ]


<div className={carDetailStyles.priceBreakdown}>
                  <div className={carDetailStyles.priceRow}>
                    <span>Rate/day</span>
                    <span>₹{car.price}</span>
                  </div>
                  {formData.pickupDate && formData.returnDate && (
                    <div className={carDetailStyles.priceRow}>
                      <span>Days</span>
                      <span>{Math.max(1, Math.ceil((new Date(formData.returnDate) - new Date(formData.pickupDate))/(1000*60*60*24)))}</span>
                    </div>
                  )}
                  <div className={carDetailStyles.totalRow}>
                    <span>Total</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>
