# offline-LightningATM-esp32

Tags: #esp32 #bitcoin #lightningnetwork #hardware #iot #embedded

---

Offline ESP32-based Bitcoin ATM (coins only) that supports the Lightning Network.  
The Lightning Network enables instant, trustless Bitcoin transactions with minimal fees.  
This project demonstrates how to run such an ATM entirely **offline**, combining hardware, embedded programming, and cryptography.

---

## Material List 

| ITEM | NUMBER OF PARTS OR OTHER NOTES | ~price |
| ---- | ------------------------------ | ------ |
| ESP32 NodeMCU Dev Board | 1 | $10 |
| LM2587S 5V → 12V Boost Converter | 1 | $5 |
| Waveshare 1.54" e-Paper Display (SPI) | 1 | $20 |
| Programmable Coin Acceptor (HX-616) | 1 | $25 |
| 10mm Metal Push Button (LED, 3–6V) | 1 | $3 |
| USB Type-C Power Socket | 1 | $2 |
| MOSFET Trigger Module (15A 400W) | 2 | $5 |
| Orange PLA Filament (3D printing) | – | $10 |
| Jumper Wires | several | $3 |
| Heat-Set Threaded Inserts (M3) | several | $2 |

---

## Content

### Major Steps 

1. Assemble the ESP32, coin acceptor, display, and MOSFET modules.  
2. Flash the provided firmware using PlatformIO (`platformio.ini` provided).  
3. Connect the power system (12V for coin acceptor, 5V for ESP32).  
4. Calibrate coin inputs and Lightning transactions.  

### Minor Steps

- Mount all parts in the 3D-printed case.  
- Test offline payment flow.  
- Adjust display timing or layout if necessary.  

---

## Relevant Stuff 

| what it is | links to other file |
| ----------- | ------------------ |
| GitHub Repository | [f321x/offline-LightningATM-esp32](https://github.com/f321x/offline-LightningATM-esp32) |
| Assembly Guide (German) | [Ereignishorizont Blog](https://ereignishorizont.xyz) |
| Related Repo | [21isenough/LightningATM](https://github.com/21isenough/LightningATM) |
| Lightning Libraries | [LNBits](https://lnbits.com) / [uBitcoin](https://github.com/lnbits/ubitcoin) |

---

## Helping Material (optional)
- [Axel Hamburch’s detailed assembly guide (DE)](https://ereignishorizont.xyz)  
- [Fossa ATM project reference](https://github.com/lnbits/fossa)  
- [PlatformIO setup documentation](https://docs.platformio.org/en/latest/)  
