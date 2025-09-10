
// Utility functions
const makeImageUrl = (img) => {
  if (!img) return "";
  const s = String(img).trim();
  return /^https?:\/\//i.test(s)
    ? s
    : `${BASE}/uploads/${s.replace(/^\/+/, "").replace(/^uploads\//, "")}`;
};

const sanitizeImageForBackend = (img) => {
  if (!img) return "";
  let s = String(img).trim();
  if (/^https?:\/\//i.test(s)) {
    const idx = s.lastIndexOf("/uploads/");
    s =
      idx !== -1
        ? s.slice(idx + "/uploads/".length)
        : s.slice(s.lastIndexOf("/") + 1);
  }
  return s.replace(/^\/+/, "").replace(/^uploads\//, "");
};

const buildSafeCar = (raw = {}, idx = 0) => {
  const _id = raw._id || raw.id || null;
  return {
    _id,
    id: _id || raw.id || raw.localId || `local-${idx + 1}`,
    make: raw.make || "",
    model: raw.model || "",
    year: raw.year ?? "",
    category: raw.category || "Sedan",
    seats: raw.seats ?? 4,
    transmission: raw.transmission || "Automatic",
    fuelType: raw.fuelType || raw.fuel || "Gasoline",
    mileage: raw.mileage ?? 0,
    dailyRate: raw.dailyRate ?? raw.price ?? 0,
    status: raw.status || "available",
    _rawImage: raw.image ?? raw._rawImage ?? "",
    image: raw.image
      ? makeImageUrl(raw.image)
      : raw._rawImage
      ? makeImageUrl(raw._rawImage)
      : "",
  };
};

// Sub-components

const CarCard = ({ car, onEdit, onDelete }) => {
  const getStatusStyle = (status) => {
    const styles = {
      available: "bg-green-900/30 text-green-400",
      rented: "bg-yellow-900/30 text-yellow-400",
      maintenance: "bg-red-900/30 text-red-400",
    };
    return styles[status] || "bg-gray-700 text-gray-200";
  };
};






const EditModal = ({ car, onClose, onSubmit, onChange }) => {
  const mapToBackend = (c) => ({
    make: c.make,
    model: c.model,
    year: Number(c.year || 0),
    category: c.category || "Sedan",
    seats: Number(c.seats || 0),
    transmission: c.transmission || "Automatic",
    fuelType: c.fuelType,
    mileage: Number(c.mileage || 0),
    dailyRate: Number(c.dailyRate || 0),
    status: c.status || "available",
    image: sanitizeImageForBackend(c.image || c._rawImage || ""),
  });



  const inputField = (label, name, type = "text", options = {}) => (
    <div>
      <label className={`block ${styles.textGray} text-sm mb-1`}>{label}</label>
      {type === "select" ? (
        <select
          name={name}
          value={car[name] || ""}
          onChange={handleInputChange}
          className={styles.inputField}
          required={options.required}
        >
          {options.items?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={car[name] || ""}
          onChange={handleInputChange}
          className={styles.inputField}
          required={options.required}
          min={options.min}
          max={options.max}
          step={options.step}
        />
      )}
    </div>
  );

  return (
    <div className={styles.modalOverlay}>
      <div
        className={`${styles.gradientGrayToGray} ${styles.rounded2xl} ${styles.modalContainer} ${styles.borderOrange}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center border-b border-orange-800/30 pb-4">
            <h2 className="text-2xl font-bold text-white">
              {car._id ? `Edit: ${car.make} ${car.model}` : "Add New Car"}
            </h2>
            <button onClick={onClose} className={styles.textGray}>
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inputField("Make", "make", "text", { required: true })}
              {inputField("Model", "model", "text", { required: true })}
              {inputField("Year", "year", "number", {
                required: true,
                min: 1900,
                max: 2099,
              })}
              {inputField("Category", "category", "select", {
                required: true,
                items: [
                  "Sedan",
                  "SUV",
                  "Sports",
                  "Coupe",
                  "Hatchback",
                  "Luxury",
                ],
              })}
              {inputField("Status", "status", "select", {
                required: true,
                items: ["available", "rented", "maintenance"],
              })}
              {inputField("Daily Rate ($)", "dailyRate", "number", {
                required: true,
                min: 1,
                step: 0.01,
              })}
              {inputField("Mileage", "mileage", "number", {
                required: true,
                min: 0,
              })}
              {inputField("Transmission", "transmission", "select", {
                required: true,
                items: ["Automatic", "Manual", "CVT"],
              })}
              {inputField("Fuel Type", "fuelType", "select", {
                required: true,
                items: ["Gasoline", "Diesel", "Hybrid", "Electric"],
              })}
            </div>

            {inputField("Number of Seats", "seats", "number", {
              required: true,
              min: 1,
              max: 12,
            })}
            {inputField("Image (filename or URL)", "image", "text", {
              required: true,
            })}

            {car.image && (
              <div className="flex justify-center">
                <img
                  src={makeImageUrl(car.image)}
                  alt="preview"
                  className="h-40 object-contain rounded-md border border-orange-800/30"
                />
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className={styles.buttonSecondary}
              >
                Cancel
              </button>
              <button type="submit" className={styles.buttonPrimary}>
                {car._id ? "Save Changes" : "Add Car"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );





const FilterSelect = ({ value, onChange, categories }) => (
  <div
    className={`${styles.gradientGray} ${styles.rounded2xl} ${styles.filterSelect} ${styles.borderGray} ${styles.borderHoverOrange}`}
  >
    <label className={`block text-sm font-medium ${styles.textGray} mb-2`}>
      Filter by Category
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${styles.inputField} focus:outline-none focus:ring-2 focus:ring-orange-500`}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c === "all" ? "All Categories" : c}
          </option>
        ))}
      </select>
      <div className="absolute left-1 top-4 text-orange-500">
        <FaFilter />
      </div>
    </div>
  </div>
);


// Main component
const ManageCarPage = () => {
    setCars(
        raw.map((c, i) => ({
          ...buildSafeCar(c, i),
          image: c.image ? makeImageUrl(c.image) : buildSafeCar(c, i).image,
          _rawImage: c.image ?? c._rawImage ?? "",
        }))
      );

    const car = cars.find((c) => c._id === identifier || c.id === identifier);
    if (!car) return toast.error("Car not found");
    if (!window.confirm("Are you sure you want to delete this car?")) return;


   const openEdit = (car) => {
    setEditingCar({
      ...car,
      image: car._rawImage ?? car.image ?? "",
      _id: car._id ?? null,
    });
    setShowEditModal(true);
  };
};

export default ManageCarPage;
