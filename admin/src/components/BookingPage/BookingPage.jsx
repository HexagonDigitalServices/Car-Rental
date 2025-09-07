import React from 'react'

// Utility functions
const formatDate = (s) => {
  if (!s) return "";
  const d = new Date(s);
  return isNaN(d)
    ? ""
    : `${d.getDate()}`.padStart(2, "0") +
        "/" +
        `${d.getMonth() + 1}`.padStart(2, "0") +
        "/" +
        d.getFullYear();
};

const makeImageUrl = (filename) =>
  filename ? `${baseURL}/uploads/${filename}` : "";

const normalizeDetails = (d = {}, car = {}) => ({
  seats: d.seats ?? d.numSeats ?? car.seats ?? "",
  fuel: String(d.fuelType ?? d.fuel ?? car.fuelType ?? car.fuel ?? ""),
  mileage: d.mileage ?? d.miles ?? car.mileage ?? car.miles ?? "",
  transmission: String(d.transmission ?? car.transmission ?? d.trans ?? ""),
});

const extractCarInfo = (b) => {
  const snap =
    b.carSnapshot &&
    typeof b.carSnapshot === "object" &&
    Object.keys(b.carSnapshot).length
      ? b.carSnapshot
      : null;
  const car = snap || (b.car && typeof b.car === "object" ? b.car : null);

  if (car)
    return {
      title:
        `${car.make || ""} ${car.model || ""}`.trim() ||
        car.make ||
        car.model ||
        "",
      make: car.make || "",
      model: car.model || "",
      year: car.year ?? "",
      dailyRate: car.dailyRate ?? 0,
      seats: car.seats ?? "",
      transmission: car.transmission ?? "",
      fuel: car.fuelType ?? car.fuel ?? "",
      mileage: car.mileage ?? "",
      image: car.image || b.carImage || b.image || "",
    };

  return typeof b.car === "string"
    ? { title: b.car, image: b.carImage || b.image || "" }
    : {
        title: b.carName || b.vehicle || "",
        image: b.carImage || b.image || "",
      };
};


const BookingCardInfo = ({ booking, isEditing, newStatus, onStatusChange }) => (
  <div className={BookingPageStyles.bookingInfoGrid}>
    <div className="text-center">
      <div className={BookingPageStyles.bookingInfoLabel}>Car</div>
      <div className={BookingPageStyles.bookingInfoValue}>
        {booking.car || ""}
      </div>
    </div>
    <div className="text-center">
      <div className={BookingPageStyles.bookingInfoLabel}>Pickup</div>
      <div className={BookingPageStyles.bookingInfoValue}>
        {formatDate(booking.pickupDate)}
      </div>
    </div>
    <div className="text-center">
      <div className={BookingPageStyles.bookingInfoLabel}>Amount</div>
      <div className={BookingPageStyles.bookingAmount}>${booking.amount}</div>
    </div>
    <div className="text-center">
      <div className={BookingPageStyles.bookingInfoLabel}>Status</div>
      <StatusIndicator
        status={booking.status}
        isEditing={isEditing}
        newStatus={newStatus}
        onStatusChange={onStatusChange}
      />
    </div>
  </div>
);


const BookingCardDetails = ({ booking }) => (
  <div className={BookingPageStyles.bookingDetails}>
    <div className={BookingPageStyles.bookingDetailsGrid}>
      <Panel
        title="Customer Details"
        icon={<FaUser className={BookingPageStyles.panelIcon} />}
      >
        <Detail icon={<FaUser />} label="Full Name" value={booking.customer} />
        <Detail icon={<FaEnvelope />} label="Email" value={booking.email} />
        <Detail icon={<FaPhone />} label="Phone" value={booking.phone} />
      </Panel>

      <Panel
        title="Booking Details"
        icon={<FaCalendarAlt className={BookingPageStyles.panelIcon} />}
      >
        <Detail
          icon={<FaCalendarAlt />}
          label="Pickup Date"
          value={formatDate(booking.pickupDate)}
        />
        <Detail
          icon={<FaCalendarAlt />}
          label="Return Date"
          value={formatDate(booking.returnDate)}
        />
        <Detail
          icon={<FaCalendarAlt />}
          label="Booking Date"
          value={formatDate(booking.bookingDate)}
        />
        <Detail
          icon={<FaCreditCard />}
          label="Total Amount"
          value={`$${booking.amount}`}
        />
      </Panel>

      <Panel
        title="Address Details"
        icon={<FaMapMarkerAlt className={BookingPageStyles.panelIcon} />}
      >
        <Detail
          icon={<FaMapMarkerAlt />}
          label="Street"
          value={booking.address.street}
        />
        <Detail icon={<FaCity />} label="City" value={booking.address.city} />
        <Detail
          icon={<FaGlobeAsia />}
          label="State"
          value={booking.address.state}
        />
        <Detail
          icon={<FaMapPin />}
          label="ZIP Code"
          value={booking.address.zipCode}
        />
      </Panel>

      <Panel
        title="Car Details"
        icon={<FaCar className={BookingPageStyles.panelIcon} />}
      >
        <div className="flex items-center mb-4">
          <div className={BookingPageStyles.carImageContainer}>
            <img
              src={makeImageUrl(booking.carImage)}
              alt={booking.car || "car image"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <div className={BookingPageStyles.bookingCustomer}>
              {booking.car || ""}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Spec
            icon={<FaUserFriends />}
            label="Seats"
            value={booking.details.seats}
          />
          <Spec
            icon={<FaGasPump />}
            label="Fuel"
            value={booking.details.fuel}
          />
          <Spec
            icon={<FaTachometerAlt />}
            label="Mileage"
            value={booking.details.mileage}
          />
          <Spec
            icon={<FaCheckCircle />}
            label="Transmission"
            value={booking.details.transmission}
          />
        </div>
      </Panel>
    </div>
  </div>
);


const SearchFilterBar = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  totalBookings,
}) => (
  <div className={BookingPageStyles.searchFilterContainer}>
    <div className={BookingPageStyles.searchFilterGrid}>
      <div>
        <label className={BookingPageStyles.filterLabel}>Search Bookings</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by customer, car, or email..."
            value={searchTerm}
            onChange={onSearchChange}
            className={BookingPageStyles.filterInput}
          />
          <div className={BookingPageStyles.filterIconContainer}>
            <FaSearch />
          </div>
        </div>
      </div>

      <div>
        <label className={BookingPageStyles.filterLabel}>
          Filter by Status
        </label>
        <div className="relative">
          <select
            value={statusFilter}
            onChange={onStatusChange}
            className={BookingPageStyles.filterInput}
          >
            <option value="all">All Statuses</option>
            {Object.keys(statusConfig)
              .filter((k) => k !== "default")
              .map((opt) => (
                <option key={opt} value={opt}>
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </option>
              ))}
          </select>
          <div className={BookingPageStyles.filterIconContainer}>
            <FaFilter />
          </div>
        </div>
      </div>

      <div className={BookingPageStyles.totalBookingsContainer}>
        <div className="text-center">
          <div className={BookingPageStyles.totalBookingsLabel}>
            Total Bookings
          </div>
          <div className={BookingPageStyles.totalBookingsValue}>
            {totalBookings}
          </div>
        </div>
      </div>
    </div>
  </div>
);


const BookingPage = () => {
    const [bookings, setBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedBooking, setExpandedBooking] = useState(null);
  const [editingStatus, setEditingStatus] = useState(null);
  const [newStatus, setNewStatus] = useState("");

   const fetchBookings = useCallback(async () => {
    try {
      const res = await api.get("/api/bookings?limit=200");
      const raw = Array.isArray(res.data)
        ? res.data
        : res.data.data || res.data.bookings || [];
      const mapped = raw.map((b, i) => {
        const id = b._id || b.id || `local-${i + 1}`;
        const carInfo = extractCarInfo(b);
        const details = normalizeDetails(b.details || {}, carInfo);
        return {
          id,
          _id: b._id || b.id || null,
          customer: b.customer || b.customerName || "",
          email: b.email || "",
          phone: b.phone || "",
          car: carInfo.title || "",
          carImage: carInfo.image || "",
          pickupDate: b.pickupDate || b.pickup || b.startDate || "",
          returnDate: b.returnDate || b.return || b.endDate || "",
          bookingDate: b.bookingDate || b.createdAt || "",
          status: (b.status || "pending").toString(),
          amount: b.amount ?? b.total ?? 0,
          details,
          address: {
            street:
              (b.address && (b.address.street || b.address.addressLine)) || "",
            city: (b.address && (b.address.city || "")) || "",
            state: (b.address && (b.address.state || "")) || "",
            zipCode:
              (b.address && (b.address.zipCode || b.address.postalCode)) || "",
          },
        };
      });
      setBookings(mapped);
    } catch (err) {
      console.error("Failed to fetch bookings:", err);
      window.alert("Failed to load bookings from server.");
    }
  }, []);


       !q ||
        stringForSearch(b.customer).includes(q) ||
        stringForSearch(b.car).includes(q) ||
        stringForSearch(b.email).includes(q);
  return (
    <div>
      
    </div>
  )
}

export default BookingPage
