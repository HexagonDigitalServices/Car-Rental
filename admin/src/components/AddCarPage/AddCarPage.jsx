

const AddCarPage = () => {
  const initialFormData = {
    carName: "",
    dailyPrice: "",
    seats: "",
    fuelType: "Petrol",
    mileage: "",
    transmission: "Automatic",
    year: "",
    model: "",
    description: "",
    category: "Sedan",
    image: null,
    imagePreview: null,
  };

  const [data, setData] = useState(initialFormData);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) =>
      setData((prev) => ({
        ...prev,
        image: file,
        imagePreview: evt.target.result,
      }));
    reader.readAsDataURL(file);
  }, []);



  const showToast = useCallback((type, title, message, icon) => {
    const toastConfig = {
      position: "top-right",
      className: toastStyles[type].container,
      bodyClassName: toastStyles[type].body,
    };

    if (type === "success") {
      toastConfig.autoClose = 3000;
    } else {
      toastConfig.autoClose = 4000;
    }

    toast[type](
      <div className="flex items-center">
        {icon}
        <div>
          <p
            className={
              type === "success" ? "font-bold text-lg" : "font-semibold"
            }
          >
            {title}
          </p>
          <p>{message}</p>
        </div>
      </div>,
      toastConfig
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carNameForToast = data.carName || "";

    try {
      const formData = new FormData();
      const fieldMappings = {
        make: data.carName,
        dailyRate: data.dailyPrice,
        seats: data.seats,
        fuelType: data.fuelType,
        mileage: data.mileage,
        transmission: data.transmission,
        year: data.year,
        model: data.model,
        description: data.description || "",
        color: "",
        category: data.category,
      };

      Object.entries(fieldMappings).forEach(([key, value]) => {
        formData.append(key, value);
      });

      if (data.image) formData.append("image", data.image);

      await api.post("/api/cars", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      showToast(
        "success",
        "Congratulations!",
        `Your ${carNameForToast} has been listed successfully`,
        <svg
          className={AddCarPageStyles.iconLarge}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      );

      resetForm();
    } catch (err) {
      console.error("Failed to submit car:", err);
      const msg =
        err.response?.data?.message || err.message || "Failed to list car";

      showToast(
        "error",
        "Error",
        msg,
        <svg
          className={AddCarPageStyles.iconMedium}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      );
    }
  };




  const leftColumnFields = [
    {
      type: "input",
      config: {
        name: "carName",
        label: "Car Name",
        required: true,
        placeholder: "e.g., Toyota Camry",
        icon: (
          <svg
            className={AddCarPageStyles.iconSmall}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        ),
      },
    },
    {
      type: "input",
      config: {
        name: "dailyPrice",
        label: "Daily Price ($)",
        type: "number",
        required: true,
        min: "1",
        placeholder: "45",
        props: { className: "pl-8" },
        prefix: <span className="absolute left-3 top-3 text-gray-400">$</span>,
      },
    },
    {
      type: "select",
      config: {
        name: "seats",
        label: "Seats",
        required: true,
        options: [2, 4, 5, 6, 7, 8].map((n) => ({
          value: n,
          label: `${n} seats`,
        })),
      },
    },
    {
      type: "select",
      config: {
        name: "fuelType",
        label: "Fuel Type",
        required: true,
        options: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
      },
    },
    {
      type: "input",
      config: {
        name: "mileage",
        label: "Mileage (MPG)",
        type: "number",
        required: true,
        min: "1",
        placeholder: "28",
      },
    },
    {
      type: "select",
      config: {
        name: "category",
        label: "Category",
        required: true,
        options: ["Sedan", "SUV", "Sports", "Coupe", "Hatchback", "Luxury"],
      },
    },
  ];

  const rightColumnFields = [
    {
      type: "input",
      config: {
        name: "year",
        label: "Year",
        type: "number",
        required: true,
        min: "1990",
        max: new Date().getFullYear(),
        placeholder: "2020",
      },
    },
    {
      type: "input",
      config: {
        name: "model",
        label: "Model",
        required: true,
        placeholder: "e.g., XLE",
      },
    },
  ];
   
   
                        <svg
                          className={AddCarPageStyles.iconUpload}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>
              
      


              <svg
                className={AddCarPageStyles.iconInline}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>


      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
        theme="dark"
      />
