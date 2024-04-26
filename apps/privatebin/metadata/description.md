# [![PrivateBin](https://cdn.rawgit.com/PrivateBin/assets/master/images/preview/logoSmall.png)](https://privatebin.info/)

**PrivateBin** is a minimalist, open source online
[pastebin](https://en.wikipedia.org/wiki/Pastebin)
where the server has zero knowledge of pasted data.

Data is encrypted and decrypted in the browser using 256bit AES in
[Galois Counter mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode).

This is a fork of ZeroBin, originally developed by
[Sébastien Sauvage](https://github.com/sebsauvage/ZeroBin). PrivateBin was
refactored to allow easier and cleaner extensions and has many additional
features. It is, however, still fully compatible to the original ZeroBin 0.19
data storage scheme. Therefore, such installations can be upgraded to PrivateBin
without losing any data.

## What PrivateBin provides

+ As a server administrator you don't have to worry if your users post content
  that is considered illegal in your country. You have plausible deniability of
  any of the pastes content. If requested or enforced, you can delete any paste
  from your system.

+ Pastebin-like system to store text documents, code samples, etc.

+ Encryption of data sent to server.

+ Possibility to set a password which is required to read the paste. It further
  protects a paste and prevents people stumbling upon your paste's link
  from being able to read it without the password.

## What it doesn't provide

- As a user you have to trust the server administrator not to inject any
  malicious code. For security, a PrivateBin installation *has to be used over*
  *HTTPS*! Otherwise you would also have to trust your internet provider, and
  any jurisdiction the traffic passes through. Additionally the instance should
  be secured by
  [HSTS](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security). It can
  use traditional certificate authorities and/or use a
  [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions)
  protected
  [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities)
  record.

- The "key" used to encrypt the paste is part of the URL. If you publicly post
  the URL of a paste that is not password-protected, anyone can read it.
  Use a password if you want your paste to remain private. In that case, make
  sure to use a strong password and share it privately and end-to-end-encrypted.

- A server admin can be forced to hand over access logs to the authorities.
  PrivateBin encrypts your text and the discussion contents, but who accessed a
  paste (first) might still be disclosed via access logs.

- In case of a server breach your data is secure as it is only stored encrypted
  on the server. However, the server could be absused or the server admin could
  be legally forced into sending malicious code to their users, which logs
  the decryption key and sends it to a server when a user accesses a paste.
  Therefore, do not access any PrivateBin instance if you think it has been
  compromised. As long as no user accesses this instance with a previously
  generated URL, the content can't be decrypted.
