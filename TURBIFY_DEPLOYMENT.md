# Turbify Deployment Guide

This guide explains how to deploy your Minnesota Chapter website to Turbify hosting.

## Prerequisites

- Node.js and npm installed on your computer
- FTP/SFTP access to your Turbify account
- Turbify account with PHP support enabled

## Step 1: Build the React Application

Run the following command in your project directory:

```bash
npm run build
```

This creates a `dist` folder containing all optimized static files.

## Step 2: Configure Admin Settings

Before uploading, configure these files:

### Email Recipients:
1. **public/contact-submit.php** - Line 42
2. **public/registration-submit.php** - Line 60

Change `info@mnchapter.org` to your actual email address.

### Admin Download Password:
**public/admin-download.php** - Line 4

Change the password from `MNChapter2024!` to your own secure password:
```php
define('ADMIN_PASSWORD', 'YourSecurePassword123!');
```

## Step 3: Upload Files to Turbify

Using your FTP client (FileZilla, Cyberduck, etc.), upload these files to your Turbify `public_html` directory:

### From the `dist` folder:
- Upload **ALL** contents of the `dist` folder to the root of `public_html`
- This includes: `index.html`, `assets/` folder, etc.

### From the `public` folder:
- Upload `registration.html` to `public_html/registration.html`
- Upload `registration-submit.php` to `public_html/registration-submit.php`
- Upload `contact-submit.php` to `public_html/contact-submit.php`
- Upload `admin-download.php` to `public_html/admin-download.php`

### Directory structure on Turbify:
```
public_html/
├── index.html (from dist)
├── assets/ (from dist)
├── registration.html
├── registration-submit.php
├── contact-submit.php
├── admin-download.php
├── registrations.csv (created automatically)
└── robots.txt
```

## Step 4: Set File Permissions

Set the following permissions via FTP:
- PHP files: `644` or `755` (depends on your server)
- HTML files: `644`
- Folders: `755`

## Step 5: Test Your Website

### Test the main site:
1. Visit `https://yoursite.com`
2. Navigate through all pages using the menu
3. URLs should look like: `https://yoursite.com/#/about`

### Test the registration form:
1. Visit `https://yoursite.com/registration.html`
2. Fill out and submit the form
3. Check that you receive the email (optional)

### Download registration data:
1. Visit `https://yoursite.com/admin-download.php`
2. Enter the password you set in Step 2
3. Download the CSV file with all registrations
4. Open in Excel, Google Sheets, or any spreadsheet program

### Test the contact form:
1. Navigate to the Contact page: `https://yoursite.com/#/contact`
2. Fill out and submit the form
3. Check that you receive the email

## Troubleshooting

### Forms not sending emails:
1. Check that PHP mail() function is enabled on your Turbify account
2. Verify email addresses in the PHP files are correct
3. Check spam/junk folders
4. Contact Turbify support to enable email sending

### Hash URLs not working:
- Hash routing (`#/about`) should work on all hosting
- If issues persist, check browser console for errors

### 404 Errors:
1. Ensure all files are in the correct directories
2. Check file permissions (644 for files, 755 for folders)
3. Verify the index.html is in the root of public_html

### PHP errors:
1. Check PHP error logs in your Turbify control panel
2. Ensure PHP version is 7.4 or higher
3. Verify PHP files have correct permissions

## Updating Your Site

When making changes:

1. Make changes to your local code
2. Run `npm run build` again
3. Upload **only the changed files** from the `dist` folder
4. If you modified PHP or registration.html, upload those as well

## Managing Registrations

### How Registration Data is Stored:
- All registrations are saved to `registrations.csv` on your server
- Each submission is appended as a new row
- The CSV file is created automatically on first submission

### Downloading Registrations:
1. Go to `https://yoursite.com/admin-download.php`
2. Login with your admin password
3. See total registration count
4. Click "Download CSV File" to get all data
5. The file includes: submission date, name, email, phone, address, membership type, etc.

### Managing the Data:
- **Download regularly** to keep backups
- **Clear data** button permanently deletes all registrations (use with caution!)
- CSV files can be opened in Excel, Google Sheets, or imported into other systems

### Security:
- Admin page is password-protected
- Change the default password in `admin-download.php` before deploying
- Keep your admin URL private
- Download and backup data regularly

## Important Notes

- **Hash routing**: URLs will have `#` in them (e.g., `yoursite.com/#/about`)
- **CSV Storage**: Registrations are saved to a CSV file on your server - download regularly for backups
- **Email notification**: Optional email notifications are still sent, but CSV is the primary data storage
- **Form validation**: Both client-side (JavaScript) and server-side (PHP) validation are in place
- **Security**: PHP files sanitize all user input to prevent injection attacks
- **Admin access**: Keep your admin password secure and don't share the admin URL publicly

## Need Help?

- Check Turbify's documentation: https://help.turbify.com
- Contact Turbify support for server-specific issues
- For code issues, refer to the project README.md

## Alternative: Third-Party Form Services

If PHP email sending doesn't work well, consider these alternatives:

1. **FormSpree** (https://formspree.io) - Free tier available
2. **Formkeep** (https://formkeep.com) - Simple form backend
3. **Basin** (https://usebasin.com) - Form handling service

These services provide form endpoints that can replace the PHP files.