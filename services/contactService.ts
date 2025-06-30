import { API_CONFIG } from "../constants";

export interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  error?: string;
}

const parseResponse = async (response: Response) => {
  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    return await response.json();
  }
  return await response.text();
};

const determineSuccess = (data: any, response: Response): boolean => {
  if (typeof data === "object") {
    return data.success === true || data.status === "success";
  }

  const dataStr = data.toLowerCase();
  return (
    dataStr.includes("success") ||
    dataStr.includes("sent") ||
    dataStr.includes("thank") ||
    response.status === 200
  );
};

const getErrorData = (data: any, isSuccess: boolean): string | undefined => {
  if (isSuccess) {
    return undefined;
  }
  return typeof data === "string" ? data : JSON.stringify(data);
};

export const submitContactForm = async (
  formData: ContactFormData
): Promise<ContactFormResponse> => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await parseResponse(response);
    const isSuccess = determineSuccess(data, response);
    const defaultMessage = "Message sent successfully!";
    const message =
      (typeof data === "object" ? data.message : null) ?? defaultMessage;

    return {
      success: isSuccess,
      message: isSuccess
        ? message
        : "Failed to send message. Please try again.",
      error: getErrorData(data, isSuccess),
    };
  } catch (error) {
    console.error("Contact form submission error:", error);

    let errorMessage = "Failed to send message. Please try again later.";

    if (error instanceof TypeError && error.message.includes("fetch")) {
      errorMessage =
        "Network error. Please check your internet connection and try again.";
    } else if (error instanceof Error && error.message.includes("CORS")) {
      errorMessage =
        "Unable to connect to server. This may be a temporary issue.";
    }

    return {
      success: false,
      message: errorMessage,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};
