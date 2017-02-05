# Ukrainian Doorbell

Special Raspberry doorbell for ukrainian programmers.

## Setup audio card

I have use [the chipest USB audio card](http://www.ebay.com/itm/New-Mini-USB-2-0-3D-Virtual-12Mbps-External-7-1-Channel-Audio-Sound-Card-Adapter-/161161417325?hash=item2585f8126d:g:2LMAAOSwl8NVVVbp) that I have found at the eBay.

Checkout [this video](https://www.youtube.com/watch?v=GQDQ_Z-NmHQ) to setup audiocard. Or just follow this short manual.

Connet your audio card to the raspberry.

Check that card connected. Run `lsusb`. My card lists like this:

```
Bus 001 Device 005: ID 8086:0808 Intel Corp. 
```

Check taht system understand that it is audio card. Run: `aplay -l`. Result example:

```
card 0: ALSA [bcm2835 ALSA], device 0: bcm2835 ALSA [bcm2835 ALSA]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 0: ALSA [bcm2835 ALSA], device 1: bcm2835 ALSA [bcm2835 IEC958/HDMI]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: Device [USB PnP Sound Device], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

`card 1` - this is my audio card.

Comment or clear all records in file:

```
sudo nano /etc/modprobe.d/alsa-base.conf
```

Create file:

```
sudo nano /etc/asound.conf
```

Fill with next data:

```
defaults.ctl.card 1
defaults.pcm.card 1
defaults.timer.card 1
```

Install player:

```
sudo apt-get update && \
sudo apt-get install -y mpg123
```

Try play audo. Have to work without restart.

```
mpg123 g6.mp3
```

## Init

Clone project to the Raspberry. Go to the project folder and run:

```
npm i
```

Connect one wire of the button to `GPIO 4` pin and second to the `GND`. That's it!

## Autorun

Run:

```
sudo nano /etc/rc.local
```

and add next lines to the file:

```
#!/bin/sh -e
node /home/pi/Projects/doorbell/app.js &
```

Change `home/pi/Projects/doorbell` to your project's root

## Contacts

Jarsolav Khorishchenko

[websnipter@gmail.com](mailto:websnipter@gmail.com)

[http://fb.com/snipter](http://fb.com/snipter)