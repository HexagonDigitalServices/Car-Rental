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
