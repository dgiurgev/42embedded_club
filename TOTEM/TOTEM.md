# TOTEM Keyboard Project

Tags:  #keyboard #electronics #programming #firmware #mechanical

---

Description:  
TOTEM is a 38-key column-staggered split keyboard designed to be used with the Seeed Studio XIAO nRF52840 BLE or XIAO RP2040. This project includes the PCB, case design, and firmware for QMK and ZMK.

---

Material List 

| ITEM | NUMBER OF PARTS OR OTHER MENTIONING OF QUANTITY | ~price |
| ---- | ----------------------------------------------- | ------ |
| Seeed Studio XIAO BLE or RP2040 | 2 | ~$10 each |
| Mechanical switches | 38 | ~$0.5 each |
| Keycaps | 38 | ~$0.2 each |
| PCB | 1 | ~$20 |
| Case (3D printed or resin) | 2 | ~$10 |
| Wires / connectors | As needed | ~$5 |

---

Content

Informations about TOTEM design, build process, and firmware configuration.

## Major Steps

1. Assemble the PCB and solder all components.  
2. Connect microcontrollers to each half of the split keyboard.  
3. Flash firmware (QMK or ZMK) onto the microcontrollers.  
4. Test each key and the BLE/wired connection.  

### Minor Steps

- Configure key mapping in QMK/VIAL or ZMK.  
- Assemble the case and fit PCB into the case.  
- Set up tenting system if desired for ergonomics.  
- Optional: customize keycaps or RGB lighting if available.  

---

## Relevant Stuff

| What it is | Links to other file |
| ---------- | ----------------- |
| TOTEM GitHub repo | [https://github.com/GEIGEIGEIST/TOTEM](https://github.com/GEIGEIGEIST/TOTEM) |
| PCB files | [TOTEM PCB directory](https://github.com/GEIGEIGEIST/TOTEM/tree/main/PCB) |
| Case files | [TOTEM case directory](https://github.com/GEIGEIGEIST/TOTEM/tree/main/case) |
| Firmware (QMK) | [TOTEM QMK firmware](https://github.com/GEIGEIGEIST/TOTEM/tree/main/firmware/QMK) |
| Firmware (ZMK) | [TOTEM ZMK firmware](https://github.com/GEIGEIGEIST/TOTEM/tree/main/firmware/ZMK) |

---

Helping material (optional):

- [TOTEM build guide](https://github.com/GEIGEIGEIST/TOTEM/blob/main/docs/buildguide.md)  
- [TOTEM layout diagram](https://github.com/GEIGEIGEIST/TOTEM/blob/main/docs/images/TOTEM_layout.svg)  
- [Video of tenting system in action](https://youtu.be/rvM2BthjEI4?si=mTJVdPeZstshnDyo)
