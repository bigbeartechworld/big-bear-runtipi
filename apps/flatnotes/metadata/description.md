A self-hosted, database-less note taking web app that utilises a flat folder of markdown files for storage.


## Design Principle

flatnotes is designed to be a distraction free note taking app that puts your note content first. This means:

* A clean and simple user interface.
* No folders, notebooks or anything like that. Just all of your notes, backed by powerful search and tagging functionality.
* Quick access to a full text search from anywhere in the app (keyboard shortcut "/").

Another key design principle is not to take your notes hostage. Your notes are just markdown files. There's no database, proprietary formatting, complicated folder structures or anything like that. You're free at any point to just move the files elsewhere and use another app.

Equally, the only thing flatnotes caches is the search index and that's incrementally synced on every search (and when flatnotes first starts). This means that you're free to add, edit & delete the markdown files outside of flatnotes even whilst flatnotes is running.

See the [Environment Variables](https://github.com/Dullage/flatnotes/wiki/Environment-Variables) article in the wiki for a full list of configuration options.


## Q&A

### Where is the database?
There is no database, only a single folder of markdown files (and the .flatnotes sub-folder).

### What is the .flatnotes sub-folder for?
This stores a full text index of your note content allowing for rapid search times.

### Can I delete the .flatnotes sub-folder?
As long as flatnotes isn't running, sure! It'll just get rebuilt then next time flatnotes is run.

### Can I add, edit & delete the markdown files outside of flatnotes?
Yup. The only thing flatnotes caches is the search index and that's synced on every search (and when flatnotes first starts).

### Can I perform advanced searches?
Yes! See the [Advanced Searching](https://github.com/Dullage/flatnotes/wiki/Advanced-Searching) wiki page.

### How do I get my notes out of flatnotes?
They're just markdown files.  You're free to just move the files elsewhere and use another app.

### Is there an API?
Yes. The docs are available at the `/docs` endpoint. See [demo.flatnotes.io/docs](https://demo.flatnotes.io/docs) as an example.

### If there aren't any folders, how to I organise my notes?
The first option is to choose not to. This frees you from the burden of organisation. You can then rely on flatnotes' powerful search functionality to find the note you are looking for. 

Additionally you are able to tag notes by using a hashtag anywhere in the note content e.g. #work. Tags are indexed separately from the rest of the content and so can be searched separately either by using the field prefix e.g. "tags:work" or using the hashtag shortcut e.g. "#work".

### What types of authentication are supported?
There are 3 types:

- None = No authentication, the site is open to anyone with access.
- Password = The site is protected by a username and password.
- TOTP = In addition to a username and password, the site is also protected by a time based one-time-password.

See the [Environment Variables](https://github.com/Dullage/flatnotes/wiki/Environment-Variables) article in the wiki for more information.


## Roadmap

I want to keep flatnotes as simple and distraction free as possible which means limiting new features. This said, I welcome feedback and suggestions.

One feature I do plan to implement is the ability to *share* a note. In the spirit of simple and database-less, the current plan is to generate temporary pre-signed URLs but this needs to be explored.


## Sponsorship

If you find this project useful, please consider buying me a coffee. It would make my day.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/dullage)


## Thanks

A special thanks to 2 fantastic open source projects that make flatnotes possible.

* [Whoosh](https://whoosh.readthedocs.io/en/latest/intro.html) - A fast, pure Python search engine library.
* [TOAST UI Editor](https://ui.toast.com/tui-editor) - A GFM Markdown and WYSIWYG editor for the browser.
