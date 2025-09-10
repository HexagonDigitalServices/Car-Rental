
  const handleSubmit = async (e) => {


        // Show a success toast and navigate to /login when it closes
        toast.success("Account created successfully! Redirecting to Home...", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          autoClose: 1200,
          onClose: () => navigate("/login"),
        });

        setLoading(false);
        return;
      }

      // Unexpected non-2xx without throwing (rare with axios)
      toast.error("Unexpected server response during registration.", {
        theme: "dark",
      });

    
    catch (err) {
      // Detailed axios error handling
      console.error("Signup error (frontend):", err);

      if (err.response) {
        // Server responded with a status outside 2xx
        console.log(
          "Server response (debug):",
          err.response.status,
          err.response.data
        );
        const serverMessage =
          err.response.data?.message ||
          err.response.data?.error ||
          `Server error: ${err.response.status}`;
        toast.error(serverMessage, { theme: "dark" });
      } else if (err.request) {
        // Request made but no response
        console.log("No response received (debug):", err.request);
        toast.error(
          "No response from server — ensure backend is running and CORS is configured.",
          {
            theme: "dark",
          }
        );
      } else {
        // Something else happened
        toast.error(err.message || "Registration failed", { theme: "dark" });
      }
    } 