# TIL how to node service for raspberry pi

This is the next step in my journey toward raspberry pi node app delivery nirvana.

See the [previous episode](//github.com/pingortle/til-dpkg) for a simple debian package example.

## Hacking

- **macOS**: Run `brew bundle` *Hint: [install homebrew first](https://brew.sh)*
- `npm install`
- `npm run build`
- `npm run debianize`
- Copy `dist/simple-node-service_X.X.X_armhf.deb` to your device
- On the pi run `dpkg --install simple-node-service_X.X.X_armhf.deb`
- Visit your host at `<IP or hostname>:3000` *By default my raspberry pi was http://raspberrypi.local:3000*
