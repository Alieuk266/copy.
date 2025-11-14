<?php
// Simple password protection for CSV download
// IMPORTANT: Change this password before deploying!
define('ADMIN_PASSWORD', 'MNChapter2024!');

session_start();

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: admin-download.php');
    exit();
}

// Handle login
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if ($_POST['password'] === ADMIN_PASSWORD) {
        $_SESSION['admin_logged_in'] = true;
    } else {
        $error = "Incorrect password";
    }
}

// Check if logged in
$is_logged_in = isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === true;

// Handle CSV download
if ($is_logged_in && isset($_GET['download'])) {
    $csv_file = 'registrations.csv';
    
    if (file_exists($csv_file)) {
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="registrations_' . date('Y-m-d') . '.csv"');
        header('Pragma: no-cache');
        header('Expires: 0');
        readfile($csv_file);
        exit();
    } else {
        $download_error = "No registrations file found";
    }
}

// Handle delete/clear
if ($is_logged_in && isset($_GET['clear']) && $_GET['clear'] === 'confirm') {
    $csv_file = 'registrations.csv';
    if (file_exists($csv_file)) {
        unlink($csv_file);
        $success_message = "Registrations file cleared successfully";
    }
}

// Count registrations
$registration_count = 0;
if ($is_logged_in && file_exists('registrations.csv')) {
    $lines = file('registrations.csv');
    $registration_count = count($lines) - 1; // Subtract header row
    if ($registration_count < 0) $registration_count = 0;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Admin - Download CSV</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, hsl(220, 70%, 40%) 0%, hsl(220, 80%, 25%) 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            max-width: 500px;
            width: 100%;
            background: white;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            padding: 40px;
        }

        h1 {
            color: hsl(220, 70%, 35%);
            margin-bottom: 10px;
            font-size: 28px;
        }

        .subtitle {
            color: hsl(220, 15%, 40%);
            margin-bottom: 30px;
            font-size: 14px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: hsl(220, 15%, 20%);
            font-size: 14px;
        }

        input[type="password"] {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid hsl(220, 15%, 88%);
            border-radius: 8px;
            font-size: 16px;
            font-family: inherit;
        }

        input[type="password"]:focus {
            outline: none;
            border-color: hsl(220, 70%, 35%);
            box-shadow: 0 0 0 3px hsla(220, 70%, 35%, 0.1);
        }

        .btn {
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .btn-primary {
            background: hsl(220, 70%, 35%);
            color: white;
        }

        .btn-primary:hover {
            background: hsl(220, 70%, 30%);
        }

        .btn-success {
            background: hsl(142, 71%, 45%);
            color: white;
            margin-bottom: 10px;
        }

        .btn-success:hover {
            background: hsl(142, 71%, 40%);
        }

        .btn-danger {
            background: hsl(0, 84%, 60%);
            color: white;
        }

        .btn-danger:hover {
            background: hsl(0, 84%, 50%);
        }

        .btn-secondary {
            background: hsl(220, 15%, 85%);
            color: hsl(220, 15%, 20%);
        }

        .btn-secondary:hover {
            background: hsl(220, 15%, 75%);
        }

        .error {
            background: hsl(0, 84%, 95%);
            color: hsl(0, 84%, 40%);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .success {
            background: hsl(142, 71%, 95%);
            color: hsl(142, 71%, 30%);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-size: 14px;
        }

        .info-box {
            background: hsl(210, 15%, 96%);
            padding: 16px;
            border-radius: 8px;
            margin-bottom: 20px;
        }

        .info-box strong {
            color: hsl(220, 70%, 35%);
            font-size: 24px;
        }

        .info-box p {
            margin-top: 5px;
            color: hsl(220, 15%, 40%);
            font-size: 14px;
        }

        .button-group {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }

        .button-group .btn {
            flex: 1;
        }

        .warning {
            background: hsl(38, 92%, 95%);
            color: hsl(38, 92%, 30%);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            font-size: 13px;
        }
    </style>
</head>
<body>
    <div class="container">
        <?php if (!$is_logged_in): ?>
            <h1>Admin Access</h1>
            <p class="subtitle">Enter password to download registrations</p>

            <?php if (isset($error)): ?>
                <div class="error"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>

            <form method="POST">
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required autofocus>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        <?php else: ?>
            <h1>Registration Downloads</h1>
            <p class="subtitle">Download or manage registration data</p>

            <?php if (isset($success_message)): ?>
                <div class="success"><?php echo htmlspecialchars($success_message); ?></div>
            <?php endif; ?>

            <?php if (isset($download_error)): ?>
                <div class="error"><?php echo htmlspecialchars($download_error); ?></div>
            <?php endif; ?>

            <div class="info-box">
                <strong><?php echo $registration_count; ?></strong>
                <p>Total Registrations</p>
            </div>

            <?php if ($registration_count > 0): ?>
                <a href="?download=1" class="btn btn-success">Download CSV File</a>
                
                <div class="warning">
                    <strong>⚠️ Warning:</strong> Clearing will permanently delete all registration data. Make sure you've downloaded the file first!
                </div>
                
                <a href="?clear=confirm" class="btn btn-danger" onclick="return confirm('Are you sure you want to DELETE all registrations? This cannot be undone!');">Clear All Data</a>
            <?php else: ?>
                <div class="info-box">
                    <p>No registrations yet. Check back after users submit the form.</p>
                </div>
            <?php endif; ?>

            <div style="margin-top: 20px;">
                <a href="?logout=1" class="btn btn-secondary">Logout</a>
            </div>
        <?php endif; ?>
    </div>
</body>
</html>