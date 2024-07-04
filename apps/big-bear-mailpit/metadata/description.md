**Mailpit** is a small, fast, low memory, zero-dependency, multi-platform email testing tool & API for developers.

It acts as an SMTP server, provides a modern web interface to view & test captured emails, and includes an API for automated integration testing.

Mailpit was originally **inspired** by MailHog which is [no longer maintained](https://github.com/mailhog/MailHog/issues/442#issuecomment-1493415258) and hasn't seen active development or security updates for a few years now.

![Mailpit](https://raw.githubusercontent.com/axllent/mailpit/develop/server/ui-src/screenshot.png)


## Features

- Runs entirely from a single [static binary](https://mailpit.axllent.org/docs/install/) or multi-architecture [Docker images](https://mailpit.axllent.org/docs/install/docker/)
- Modern web UI with advanced [mail search](https://mailpit.axllent.org/docs/usage/search-filters/) to view emails (formatted HTML, highlighted HTML source, text, headers, raw source, and MIME attachments
including image thumbnails), including optional [HTTPS](https://mailpit.axllent.org/docs/configuration/http/) & [authentication](https://mailpit.axllent.org/docs/configuration/http/)
- [SMTP server](https://mailpit.axllent.org/docs/configuration/smtp/) with optional STARTTLS or SSL/TLS, authentication (including an "accept any" mode)
- A [REST API](https://mailpit.axllent.org/docs/api-v1/) for integration testing
- Real-time web UI updates using web sockets for new mail & optional [browser notifications](https://mailpit.axllent.org/docs/usage/notifications/) when new mail is received
- Optional [POP3 server](https://mailpit.axllent.org/docs/configuration/pop3/) to download captured message directly into your email client
- [HTML check](https://mailpit.axllent.org/docs/usage/html-check/) to test & score mail client compatibility with HTML emails
- [Link check](https://mailpit.axllent.org/docs/usage/link-check/) to test message links (HTML & text) & linked images
- [Spam check](https://mailpit.axllent.org/docs/usage/spamassassin/) to test message "spamminess" using a running SpamAssassin server
- [Create screenshots](https://mailpit.axllent.org/docs/usage/html-screenshots/) of HTML messages via web UI
- Mobile and tablet HTML preview toggle in desktop mode
- [Message tagging](https://mailpit.axllent.org/docs/usage/tagging/) including manual tagging or automated tagging using filtering and "plus addressing"
- [SMTP relaying](https://mailpit.axllent.org/docs/configuration/smtp-relay/) (message release) - relay messages via a different SMTP server including an optional allowlist of accepted recipients
- Fast message [storing & processing](https://mailpit.axllent.org/docs/configuration/email-storage/) - ingesting 100-200 emails per second over SMTP depending on CPU, network speed & email size,
easily handling tens of thousands of emails, with automatic email pruning (by default keeping the most recent 500 emails)
- `List-Unsubscribe` syntax validation
- Optional [webhook](https://mailpit.axllent.org/docs/integration/webhook/) for received messages
