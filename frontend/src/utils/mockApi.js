import emailjs from "@emailjs/browser";
// Mock API for frontend-only demonstration
export const mockApi = {
  submitContactForm: async (formData, Service_Id, template_id, public_key) => {
    try {
      // Send email via EmailJS
      const result = await emailjs.send(
        Service_Id, template_id,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
        },
        public_key
      );

      console.log("EmailJS response:", result);

      return {
        success: true,
        message: "Contact form submitted successfully via EmailJS",
        data: formData,
      };
    } catch (error) {
      console.error("EmailJS error:", error);
      return {
        success: false,
        message: "Failed to send contact form",
      };
    }
  },

  getPortfolioProjects: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      success: true,
      projects: [],
    };
  },
};