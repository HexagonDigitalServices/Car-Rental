

const carBookingSubSchema = new Schema(
  {
    status: {
      type: String,
      enum: ['pending', 'active', 'completed', 'cancelled', 'upcoming'],
      default: 'pending',
    },
  },
  { _id: false }
);

const carSchema = new Schema({
  make: { type: String, required: true, trim: true },
  model: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  color: { type: String, default: '' },
  category: { type: String, default: 'Sedan' },
  seats: { type: Number, default: 4 },
  transmission: { type: String, default: 'Automatic' },
  fuelType: { type: String, default: 'Gasoline' },
  mileage: { type: Number, default: 0 },
  dailyRate: { type: Number, required: true },
  status: { type: String, enum: ['available','rented','maintenance'], default: 'available' },
  image: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },

  bookings: { type: [carBookingSubSchema], default: [] },
});


 blockingStatuses = ['pending','active','upcoming']


carSchema.methods.getAvailabilitySummary = function (nowDate = new Date()) {
  const now = new Date(nowDate);

  const blockable = (this.bookings || [])
    .filter(b => ['pending','active','upcoming'].includes(b.status))
    .map(b => ({ ...b, pickupDate: new Date(b.pickupDate), returnDate: new Date(b.returnDate) }))
    .sort((x, y) => x.pickupDate - y.pickupDate);

  const active = blockable.find(b => b.pickupDate <= now && now <= b.returnDate);
  if (active) {
    const msLeft = active.returnDate - now;
    const daysRemaining = Math.ceil(msLeft / (1000 * 60 * 60 * 24));
    return { state: 'booked', daysRemaining: Math.max(daysRemaining, 0), until: active.returnDate, bookingId: active.bookingId };
  }

  const next = blockable.find(b => b.pickupDate > now);
  if (next) {
    const msAvailable = next.pickupDate - now;
    const daysAvailable = Math.floor(msAvailable / (1000 * 60 * 60 * 24));
    return { state: 'available_until_reservation', daysAvailable: Math.max(daysAvailable, 0), nextBookingStarts: next.pickupDate, bookingId: next.bookingId };
  }

  return { state: 'fully_available' };
};

carSchema.statics.computeAvailabilityForCars = function (cars, nowDate = new Date()) {
  const now = new Date(nowDate);
  return cars.map(car => {
    const bookings = (car.bookings || [])
      .filter(b => ['pending','active','upcoming'].includes(b.status))
      .map(b => ({ ...b, pickupDate: new Date(b.pickupDate), returnDate: new Date(b.returnDate) }))
      .sort((x, y) => x.pickupDate - y.pickupDate);

    const active = bookings.find(b => b.pickupDate <= now && now <= b.returnDate);
    if (active) {
      const msLeft = active.returnDate - now;
      const daysRemaining = Math.ceil(msLeft / (1000 * 60 * 60 * 24));
      car.availability = { state: 'booked', daysRemaining: Math.max(daysRemaining, 0), until: active.returnDate, bookingId: active.bookingId };
      return car;
    }

    const next = bookings.find(b => b.pickupDate > now);
    if (next) {
      const msAvailable = next.pickupDate - now;
      const daysAvailable = Math.floor(msAvailable / (1000 * 60 * 60 * 24));
      car.availability = { state: 'available_until_reservation', daysAvailable: Math.max(daysAvailable, 0), nextBookingStarts: next.pickupDate, bookingId: next.bookingId };
      return car;
    }

    car.availability = { state: 'fully_available' };
    return car;
  });
};
