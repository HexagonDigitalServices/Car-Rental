
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
