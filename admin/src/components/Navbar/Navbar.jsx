

const navLinks = [
  { path: "/", icon: PlusCircle, label: "Add Car" },
  { path: "/manage-cars", icon: Car, label: "Manage Cars" },
  { path: "/bookings", icon: CalendarCheck, label: "Bookings" },
];


  useEffect(() => {
    const onDocClick = (e) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [isOpen]);

