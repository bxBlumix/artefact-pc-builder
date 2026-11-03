// Specificatii hardware ARTEFACT
// Doar valorile asociate unei surse oficiale sunt marcate verified:true.
// Cheile sunt denumiri exacte din catalog; variantele/reviziile neidentificate raman necunoscute.
window.HARDWARE_SPECS = {
  schemaVersion: 1,
  checkedAt: "2026-11-04",
  byName: {
    "AMD Ryzen 5 5600": {
      category:"CPU", verified:true, sourceName:"AMD – Ryzen 5 5600", sourceUrl:"https://www.amd.com/en/support/downloads/drivers.html/processors/ryzen/ryzen-5000-series/amd-ryzen-5-5600.html",
      socket:"AM4", tdpW:65, maxTempC:90, memory:{type:"DDR4",maxJedecMTs:3200}, bios:{minimumVersion:null,minimumVersionStatus:"Nu este publicata in fisa CPU; verificati lista CPU Support a placii de baza."},
      dimensions:{packageNote:"Dimensiunile mecanice ale pachetului nu sunt publicate in fisa consultata."}
    },
    "Intel Core i5-12400F": {
      category:"CPU", verified:true, sourceName:"Intel – Core i5-12400F specifications", sourceUrl:"https://www.intel.com/content/www/us/en/products/sku/134587/intel-core-i512400f-processor-18m-cache-up-to-4-40-ghz/specifications.html",
      socket:"LGA1700", basePowerW:65, maxTurboPowerW:117, memory:{types:["DDR4","DDR5"],maxDDR4MTs:3200,maxDDR5MTs:4800,maxCapacityGB:128,channels:2}, pcie:{generations:[4,5],maxLanes:20},
      dimensions:{packageMm:{length:45,width:37.5},note:"Dimensiunea pachetului Intel; nu reprezinta dimensiunea coolerului."},
      bios:{minimumVersion:null,minimumVersionStatus:"Depinde de modelul si revizia placii de baza; verificati CPU Support."}
    },
    "MSI B550M PRO-VDH WIFI": {
      category:"MB", verified:true, sourceName:"MSI – B550M PRO-VDH WIFI specifications", sourceUrl:"https://www.msi.com/Motherboard/B550M-PRO-VDH-WIFI/Specification",
      socket:"AM4", formFactor:"mATX", dimensions:{lengthMm:244,widthMm:244}, memory:{type:"DDR4",slots:4,maxCapacityGB:128,architecture:"dual-channel",maxOCPublishedMTs:4400},
      storage:{m2:[
        {count:1,key:"M",interfaces:["PCIe 4.0 x4","PCIe 3.0 x4","SATA"],sizes:["2242","2260","2280"],sourceNote:"M2_1; viteza depinde de CPU"},
        {count:1,key:"M",interfaces:["PCIe 3.0 x4"],sizes:["2242","2260","2280"],sourceNote:"M2_2"}
      ],sataPorts:4},
      connectors:{mainPower:"24-pin ATX x1",cpuPower:"8-pin ATX12V x1",cpuFan:1,pumpFan:1,systemFan:3,internalUSB3Gen1TypeC:1,internalUSB3Gen1Header:1,internalUSB2Headers:2},
      expansion:{pcieX16:1,pcieX1:2}, bios:{supportUrl:"https://www.msi.com/Motherboard/B550M-PRO-VDH-WIFI/support",minimumVersion:null,minimumVersionStatus:"Versiunea minima pentru Ryzen 5 5600 trebuie confirmata in lista CPU Support/BIOS MSI; nu este dedusa din socket."},
      revisionRequired:false
    },
    "Gigabyte B760M DS3H DDR4": {
      category:"MB", verified:true, sourceName:"GIGABYTE – B760M DS3H DDR4 (specificatii/support revizia 1.0)", sourceUrl:"https://www.gigabyte.com/ro/Motherboard/B760M-DS3H-DDR4-rev-10/sp",
      socket:"LGA1700", formFactor:"mATX", revisionRequired:true, revisionNote:"Catalogul nu retine revizia PCB. Specificatiile BIOS de mai jos sunt doar pentru revizia 1.0.",
      memory:{type:"DDR4",slots:4,maxCapacityGB:128,architecture:"dual-channel",maxOCPublishedMTs:5333,xmp:true},
      storage:{m2:[{count:2,key:"M",interfaces:["PCIe 4.0 x4"],sizes:["2280"]}],sataPorts:4},
      connectors:{mainPower:"24-pin ATX x1",cpuPower:"8-pin ATX12V x1",cpuFan:1,systemFan:3,internalUSB3Gen1Headers:1,internalUSB2Headers:2},
      expansion:{pcieX16:1,pcieX1:2},
      bios:{supportUrl:"https://www.gigabyte.com/ro/Motherboard/B760M-DS3H-DDR4-rev-10/support",referenceRevision:"1.0",latestVersionSeen:"F24",latestVersionDate:"2026-06-12",minimumVersion:null,minimumVersionStatus:"Lista CPU Support trebuie consultata pentru versiunea minima exacta; versiunea BIOS curenta difera dupa revizie."}
    },
    "DeepCool CC560": {
      category:"CASE", verified:true, sourceName:"DeepCool – CC560 original", sourceUrl:"https://www.deepcool.com/products/Cases/CC560-Mid-Tower-ATX-PC-Case/2021/15216.shtml",
      dimensions:{lengthMm:416,widthMm:210,heightMm:477}, motherboardSupport:["Mini-ITX","mATX","ATX"],
      clearance:{gpuLengthMm:370,cpuCoolerHeightMm:163,psuLengthMm:170},
      cooling:{frontFans:["3x120","2x140"],topFans:["2x120","2x140"],rearFans:["1x120"],frontRadiatorMm:[120,140,240,280,360],topRadiatorMm:[120,240],rearRadiatorMm:[120]},
      storageBays:{2.5:3,"3.5":2}, psuFormFactor:"ATX"
    },
    "Corsair 4000D Airflow": {
      category:"CASE", verified:true, sourceName:"Corsair – 4000D Airflow (SKU CC-9011200-WW)", sourceUrl:"https://www.corsair.com/us/en/p/pc-cases/cc-9011200-ww/4000d-airflow-tempered-glass-mid-tower-atx-case-black-cc-9011200-ww",
      dimensions:{lengthMm:453,widthMm:230,heightMm:466}, motherboardSupport:["Mini-ITX","mATX","ATX","E-ATX 305x277"],
      clearance:{gpuLengthMm:360,cpuCoolerHeightMm:170,psuLengthMm:220},
      cooling:{frontFans:["3x120","2x140"],topFans:["2x120","2x140"],rearFans:["1x120"],frontRadiatorMm:[120,140,240,280,360],topRadiatorMm:[120,140,240,280],rearRadiatorMm:[120]},
      storageBays:{2.5:4,"3.5":2},psuFormFactor:"ATX",sku:"CC-9011200-WW"
    },
    "Seasonic Focus GX-650 Gold": {
      category:"PSU", verified:true, sourceName:"Seasonic – FOCUS GX series datasheet", sourceUrl:"https://seasonic.com/wp-content/uploads/2024/04/FOCUS-GX-FX.pdf",
      powerW:650,formFactor:"ATX",dimensions:{lengthMm:140,widthMm:150,heightMm:86},
      connectors:{atx24Pin:1,eps8Pin:2,pcie6plus2Pin:4,pcieCables:2,sata:10,molex:3},
      connectorNote:"Datele provin din tabelul seriei FOCUS GX. Verificati eticheta/revizia exacta a unitatii si cablurile incluse."
    }
  }
};
