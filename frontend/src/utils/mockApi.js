// Mock API for frontend-only demonstration
export const mockApi = {
  // Simulate contact form submission
  submitContactForm: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Log the form data (in real implementation, this would be sent to backend)
    console.log("Contact form submitted:", formData);
    console.log("Email would be sent to: rub97ab@gmail.com");
    
    // Simulate success response
    return {
      success: true,
      message: "Contact form submitted successfully",
      data: formData
    };
  },

  // Simulate getting portfolio projects
  getPortfolioProjects: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      success: true,
      projects: [
        // This would normally come from a database
        // Currently using static data in PortfolioSection component
      ]
    };
  }
};