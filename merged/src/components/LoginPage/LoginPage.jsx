
  const handleSubmit = async (e) => {


        toast.success(message || "Login Successful! Welcome back", {
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          onClose: () => {
            const redirectPath = "/";
            navigate(redirectPath, { replace: true });
          },
          autoClose: 1000,
        });
      } else {
        toast.error("Unexpected response from server", { theme: "colored" });
      }
  
    
    catch (err) {
      console.error("Login error (frontend):", err);
      if (err.response) {
        const serverMessage =
          err.response.data?.message ||
          err.response.data?.error ||
          `Server error: ${err.response.status}`;
        toast.error(serverMessage, { theme: "colored" });
      } else if (err.request) {
        toast.error("No response from server — is backend running?", {
          theme: "colored",
        });
      } else {
        toast.error(err.message || "Login failed", { theme: "colored" });
      }
    }
