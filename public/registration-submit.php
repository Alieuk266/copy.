<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set content type
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// CSV file configuration
$csv_file = 'registrations.csv';
$csv_directory = __DIR__;
$csv_path = $csv_directory . '/' . $csv_file;

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode', 'membershipType', 'terms'];
$errors = [];

foreach ($required as $field) {
    if (empty($data[$field])) {
        $errors[] = "$field is required";
    }
}

// Validate email
if (!empty($data['email']) && !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email address";
}

// Validate ZIP code
if (!empty($data['zipCode']) && !preg_match('/^\d{5}(-\d{4})?$/', $data['zipCode'])) {
    $errors[] = "Invalid ZIP code";
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Validation failed', 'details' => $errors]);
    exit();
}

// Sanitize input
$firstName = htmlspecialchars(trim($data['firstName']));
$lastName = htmlspecialchars(trim($data['lastName']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone']));
$address = htmlspecialchars(trim($data['address']));
$city = htmlspecialchars(trim($data['city']));
$state = htmlspecialchars(trim($data['state']));
$zipCode = htmlspecialchars(trim($data['zipCode']));
$membershipType = htmlspecialchars(trim($data['membershipType']));
$occupation = isset($data['occupation']) ? htmlspecialchars(trim($data['occupation'])) : 'Not provided';
$organization = isset($data['organization']) ? htmlspecialchars(trim($data['organization'])) : 'Not provided';
$interests = isset($data['interests']) ? htmlspecialchars(trim($data['interests'])) : 'Not provided';
$dateOfBirth = isset($data['dateOfBirth']) ? htmlspecialchars(trim($data['dateOfBirth'])) : 'Not provided';

// Configure email settings
$to = "info@mnchapter.org"; // Change to your email
$subject = "New Member Registration: $firstName $lastName";
$message = "New member registration submission:\n\n";
$message .= "=== Personal Information ===\n";
$message .= "Name: $firstName $lastName\n";
$message .= "Email: $email\n";
$message .= "Phone: $phone\n";
$message .= "Date of Birth: $dateOfBirth\n\n";
$message .= "=== Address Information ===\n";
$message .= "Address: $address\n";
$message .= "City: $city\n";
$message .= "State: $state\n";
$message .= "ZIP Code: $zipCode\n\n";
$message .= "=== Membership Information ===\n";
$message .= "Membership Type: $membershipType\n";
$message .= "Occupation: $occupation\n";
$message .= "Organization: $organization\n";
$message .= "Interests: $interests\n";

// Save to CSV file
$csv_success = false;
try {
    // Check if file exists, if not create with headers
    $file_exists = file_exists($csv_path);
    
    // Open file for appending
    $fp = fopen($csv_path, 'a');
    
    if ($fp) {
        // Lock file to prevent simultaneous write issues
        if (flock($fp, LOCK_EX)) {
            // Add headers if file is new
            if (!$file_exists || filesize($csv_path) == 0) {
                fputcsv($fp, [
                    'Submission Date',
                    'First Name',
                    'Last Name',
                    'Email',
                    'Phone',
                    'Date of Birth',
                    'Address',
                    'City',
                    'State',
                    'ZIP Code',
                    'Membership Type',
                    'Occupation',
                    'Organization',
                    'Interests'
                ]);
            }
            
            // Add the data
            fputcsv($fp, [
                date('Y-m-d H:i:s'),
                $firstName,
                $lastName,
                $email,
                $phone,
                $dateOfBirth,
                $address,
                $city,
                $state,
                $zipCode,
                $membershipType,
                $occupation,
                $organization,
                $interests
            ]);
            
            // Release lock
            flock($fp, LOCK_UN);
            $csv_success = true;
        }
        fclose($fp);
    }
} catch (Exception $e) {
    error_log("CSV Error: " . $e->getMessage());
}

// Send email notification (optional)
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();
$email_sent = mail($to, $subject, $message, $headers);

// Return response
if ($csv_success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Registration submitted successfully',
        'email_sent' => $email_sent
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to save registration',
        'message' => 'Please try again later or contact us directly'
    ]);
}
?>