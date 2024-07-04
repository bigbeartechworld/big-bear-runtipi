# 2FAuth

A web app to manage your Two-Factor Authentication (2FA) accounts and generate their security codes

[**2FAuth Demo**](https://demo.2fauth.app/)  
Credentials (login - password) : *demo@2fauth.app* - *demo*

## Purpose

2FAuth is a web based self-hosted alternative to One Time Passcode (OTP) generators like Google Authenticator, designed for both mobile and desktop.

It aims to ease you perform your 2FA authentication steps whatever the device you handle, with a clean and suitable interface.

I created it because :

* Most of the UIs for this kind of apps show tokens for all accounts in the same time with stressful countdowns (in my opinion)
* I wanted my 2FA accounts to be stored in a standalone database I can easily backup and restore (did you already encountered a smartphone loss with all your 2FA accounts in Google Auth? I did...)
* I hate taking out my smartphone to get an OTP when I use a desktop computer
* I love coding and I love self-hosted solutions

## Main features

* Manage your 2FA accounts and organize them using Groups
* Scan and decode any QR code to add account in no time
* Add custom account without QR code thanks to an advanced form
* Edit accounts, even the imported ones
* Generate TOTP and HOTP security codes and Steam Guard codes

2FAuth is currently fully localized in English and French. See [Contributing](#contributing) if you want to help on adding more languages.

## Security

2FAuth provides several security mechanisms to protect your 2FA data as best as possible.

### Single user app

You have to create a user account and authenticate yourself to use the app. It is not possible to create more than one user account, the app is thought for personal use.

### Modern authentication

You can sign in 2FAuth using a security key like a Yubikey or a Titan key and disable the traditional login form.

### Data encryption

Sensitive data stored in the database can be encrypted to protect them against db compromise. Encryption is provided as an option which is disabled by default. It is strongly recommanded to backup the APP_KEY value of your .env file (or the whole file) when encryption is On.

### Auto logout

2FAuth automatically log you out after an inactivity period to prevent long life session. The auto logout can be deactivated or triggered when a security code is copied.

### RFC compliance

2FAuth generates OTP according to RFC 4226 (HOTP Algorithm) and RFC 6238 (TOTP Algorithm) thanks to [Spomky-Labs/OTPHP](https://github.com/Spomky-Labs/otphp) php library.
