# Contact Form API Integration

This document describes the contact form API integration for the SNS Legal website.

## API Endpoint

The contact form submits data to: `https://snslegalcounsellors.com/contact.php`

## Form Fields

The form collects the following data:

- `first_name` (required) - User's first name
- `last_name` (required) - User's last name
- `email` (required) - User's email address (validated)
- `subject` (optional) - Message subject
- `message` (required) - User's message

## PHP Backend Expected Format

The PHP script should expect POST data with the following fields:

```php
$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$email = $_POST['email'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';
```

## Frontend Implementation

### Files Modified/Created:

1. **`constants.tsx`** - Added API configuration
2. **`services/contactService.ts`** - API service functions
3. **`pages/ContactPage.tsx`** - Updated with form functionality

### Features:

- **Form Validation**: Client-side validation for required fields and email format
- **Loading States**: Shows loading spinner during submission
- **Error Handling**: Comprehensive error handling for network issues, CORS, etc.
- **Success/Error Messages**: User feedback via Material-UI Alert components
- **Form Reset**: Clears form on successful submission

### API Service Features:

- **CORS Handling**: Explicitly handles cross-origin requests
- **Multiple Response Formats**: Handles both JSON and text/HTML responses
- **Error Recovery**: Provides specific error messages for different failure modes
- **Type Safety**: Full TypeScript interfaces for request/response data

## Testing the Integration

1. **Development Server**: Run `npm run dev` to start the development server
2. **Navigate to Contact Page**: Go to `/contact` route
3. **Fill Form**: Complete all required fields
4. **Submit**: Click "Submit Message" button
5. **Observe Response**: Check for success/error messages

## PHP Backend Requirements

For the integration to work properly, your PHP script should:

1. **Handle CORS** (if needed):

```php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
```

2. **Return Consistent Responses**:

```php
// Success response (JSON preferred)
echo json_encode(['success' => true, 'message' => 'Message sent successfully']);

// Or simple text response
echo 'Success: Message sent successfully';
```

3. **Handle Errors Gracefully**:

```php
// Error response
echo json_encode(['success' => false, 'message' => 'Failed to send message']);
```

## Security Considerations

- **Input Sanitization**: Sanitize all POST data in PHP
- **CSRF Protection**: Consider implementing CSRF tokens
- **Rate Limiting**: Implement rate limiting to prevent spam
- **Email Validation**: Validate email format on server side
- **SQL Injection**: Use prepared statements if storing in database

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure PHP script includes CORS headers
2. **Network Errors**: Check if the endpoint URL is accessible
3. **Form Validation**: Ensure all required fields are filled
4. **Server Errors**: Check PHP error logs for backend issues

### Debug Mode:

Check browser developer console for detailed error messages and network requests.
