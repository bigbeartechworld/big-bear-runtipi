# Conduit
### A Matrix homeserver written in Rust

#### What is Matrix?
[Matrix](https://matrix.org) is an open network for secure and decentralized
communication. Users from every Matrix homeserver can chat with users from all
other Matrix servers. You can even use bridges (also called Matrix appservices)
to communicate with users outside of Matrix, like a community on Discord.

#### What is the goal?

An efficient Matrix homeserver that's easy to set up and just works. You can install
it on a mini-computer like the Raspberry Pi to host Matrix for your family,
friends or company.

#### Can I try it out?

Yes! You can test our Conduit instance by opening a Matrix client (<https://app.element.io> or Element Android for
example) and registering on the `conduit.rs` homeserver.

*Registration is currently disabled because of scammers. For an account please
  message us (see contact section below).*

Server hosting for conduit.rs is donated by the Matrix.org Foundation.

#### What is the current status?

Conduit is Beta, meaning you can join and participate in most
Matrix rooms, but not all features are supported and you might run into bugs
from time to time.

There are still a few important features missing:

- E2EE emoji comparison over federation (E2EE chat works)
- Outgoing read receipts, typing, presence over federation (incoming works)

Check out the [Conduit 1.0 Release Milestone](https://gitlab.com/famedly/conduit/-/milestones/3).

#### How can I deploy my own?

- Simple install (this was tested the most): [DEPLOY.md](DEPLOY.md)
- Debian package: [debian/README.Debian](debian/README.Debian)
- Nix/NixOS: [nix/README.md](nix/README.md)
- Docker: [docker/README.md](docker/README.md)

If you want to connect an Appservice to Conduit, take a look at [APPSERVICES.md](APPSERVICES.md).

#### How can I contribute?

1. Look for an issue you would like to work on and make sure it's not assigned
   to other users
2. Ask someone to assign the issue to you (comment on the issue or chat in
   [#conduit:fachschaften.org](https://matrix.to/#/#conduit:fachschaften.org))
3. Fork the repo and work on the issue.[#conduit:fachschaften.org](https://matrix.to/#/#conduit:fachschaften.org) is happy to help :)
4. Submit a MR

#### Thanks to

Thanks to FUTO, Famedly, Prototype Fund (DLR and German BMBF) and all individuals for financially supporting this project.

Thanks to the contributors to Conduit and all libraries we use, for example:

- Ruma: A clean library for the Matrix Spec in Rust
- axum: A modular web framework

#### Contact

If you run into any question, feel free to
- Ask us in `#conduit:fachschaften.org` on Matrix
- Write an E-Mail to `conduit@koesters.xyz`
- Send an direct message to `timo@fachschaften.org` on Matrix
- [Open an issue on GitLab](https://gitlab.com/famedly/conduit/-/issues/new)

#### Donate

Liberapay: <https://liberapay.com/timokoesters/>\
Bitcoin: `bc1qnnykf986tw49ur7wx9rpw2tevpsztvar5x8w4n`

#### Logo

Lightning Bolt Logo: https://github.com/mozilla/fxemoji/blob/gh-pages/svgs/nature/u26A1-bolt.svg \
Logo License: https://github.com/mozilla/fxemoji/blob/gh-pages/LICENSE.md