const gst = require("../../apis/gst");
let data = [
  {
      "Customer Number": "CUS-1",
      "GST Number": "",
      "Billing Address": "Shaberi Village, Greater Noida, Uttar Pradesh, 201009",
      "location": "Shaberi Village, Greater Noida, Uttar Pradesh, 201009",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-2",
      "GST Number": "",
      "Billing Address": "Q96F+67F, Bashratpur, Gorakhpur, Uttar Pradesh 273001, India",
      "location": "Q96F+67F, Bashratpur, Gorakhpur, Uttar Pradesh 273001, India",
      "Billing City": "Gorakhpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "273001"
  },
  {
      "Customer Number": "CUS-3",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-4",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-5",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-6",
      "GST Number": "",
      "Billing Address": "Sector 18, Noida, Uttar Pradesh, 201301",
      "location": "Sector 18, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-7",
      "GST Number": "",
      "Billing Address": "sec9 shop number -8",
      "location": "E-57, near Bank of India, E Block, Sector 9, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-9",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-10",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-11",
      "GST Number": "",
      "Billing Address": "15, Ghazipur Village, Ghazipur, New Delhi, Delhi, 110092, India",
      "location": "15, Ghazipur Village, Ghazipur, New Delhi, Delhi, 110092, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110092"
  },
  {
      "Customer Number": "CUS-12",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-13",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-15",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-16",
      "GST Number": "",
      "Billing Address": "B 25 3rd Floor, B Block Sector 2",
      "location": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-17",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-18",
      "GST Number": "",
      "Billing Address": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "location": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-19",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-20",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-21",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-22",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-23",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-24",
      "GST Number": "",
      "Billing Address": "25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "location": "25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-25",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-26",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-27",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-28",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-29",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-30",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-31",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-32",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-33",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-34",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-35",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-36",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-37",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-38",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-39",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-40",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-41",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-42",
      "GST Number": "",
      "Billing Address": "Sec 63, Noida",
      "location": "Sec 63, Noida",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-43",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-44",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-45",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-46",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-47",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-48",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-49",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-50",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-51",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-52",
      "GST Number": "",
      "Billing Address": "Link Road, Sector 51, Noida, Uttar Pradesh, 201303",
      "location": "Link Road, Sector 51, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-53",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-54",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-55",
      "GST Number": "",
      "Billing Address": "D1 panchvati adersh nagar Delhi ",
      "location": "D2, Indra Nagar, A Block, Block A, Panchawati, New Delhi, Delhi, 110033, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110033"
  },
  {
      "Customer Number": "CUS-00004",
      "GST Number": "09ADUFS8385F1Z4",
      "Billing Address": "Sain bihar crossings republic shop number 507, 5th floor, shop number 5  Pancheel square mall Ghaziabad uttar pradesh",
      "location": "BLOCK-N, VVIP ADDRESSES, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201017, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201017"
  },
  {
      "Customer Number": "CUS-57",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00006",
      "GST Number": "09AEXFS7192G1Z2",
      "Billing Address": "Christ university Nandgram Rd, Marium Nagar, Sewa Nagar Ghaziabad uttar pardesh",
      "location": "36, Marium Nagar, Ghukna, Ghaziabad, Uttar Pradesh 201003, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201003"
  },
  {
      "Customer Number": "CUS-59",
      "GST Number": "09AEXFS7192G1Z2",
      "Billing Address": "Christ University, Nandgaram road, Marium nagar, sewa nagar, Ghaziabad,",
      "location": "36, Marium Nagar, Ghukna, Ghaziabad, Uttar Pradesh 201003, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201003"
  },
  {
      "Customer Number": "CUS-60",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-61",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-62",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-63",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00007",
      "GST Number": "09AJUPD4404E2ZA",
      "Billing Address": "GF-32, Ground Floor, Omaxe Connaught Place Mall, Beta Sector 2 Rd, Greater Noida, Uttar Pradesh 201308",
      "location": "Beta 2, Greater Noida, Uttar Pradesh, 201310",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201308"
  },
  {
      "Customer Number": "CUS-65",
      "GST Number": "",
      "Billing Address": "Khasta no. 700,800 Dundas hera Crossing Republic Ghaziabad",
      "location": "JCHM+J8Q, Crossings Republik, Ghaziabad, Uttar Pradesh 201016, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201016"
  },
  {
      "Customer Number": "CUS-66",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-67",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00002",
      "GST Number": "09BDLPN1662E1ZG",
      "Billing Address": "Harpal enclave, Nh91, Lal Kuan, Ghaziabad, Uttar Pradesh 201009",
      "location": "Sector 27, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-69",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-70",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-71",
      "GST Number": "",
      "Billing Address": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "location": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-72",
      "GST Number": "",
      "Billing Address": "Label",
      "location": "Label",
      "Billing City": "Label",
      "Billing State": "Label",
      "Billing Code": "201213"
  },
  {
      "Customer Number": "CUS-73",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00010",
      "GST Number": "09CMSPK0642L1ZJ",
      "Billing Address": "Sec-46 Shop number-10 Gardania glory market noida",
      "location": "Sector 46, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-75",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00011",
      "GST Number": "09MMQPS9469H1ZL",
      "Billing Address": "Swaroop singh D170 First floor, sec 63 noida",
      "location": "D169, Block D, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-77",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-78",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-79",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-80",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-81",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-82",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-83",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-84",
      "GST Number": "",
      "Billing Address": "P5CJ+FR4, Arihant Marg, Block EE, Model Town, Delhi, 110033, India",
      "location": "P5CJ+FR4, Arihant Marg, Block EE, Model Town, Delhi, 110033, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110033"
  },
  {
      "Customer Number": "CUS-00012",
      "GST Number": "09AAOFA2900P1Z4",
      "Billing Address": "Shop Number -8 Royal Paradise Hotel ,Y -349 Near H.P Petrol Pump  Sector -12 ",
      "location": "Jamna Lal Bajaj Marg, Sector 12, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00031",
      "GST Number": "",
      "Billing Address": "Shop Number -12, X-Block Market Sector 12 Noida ",
      "location": "2, Vyapar Marg, Sector 12, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-87",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-88",
      "GST Number": "",
      "Billing Address": "J-175'sec-141, Noida",
      "location": "J177, J Block, Block J, Sector 41, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-00003",
      "GST Number": "09BOGPG5823L1ZN",
      "Billing Address": "4th flore Galaxy blue sapphire sec - 4 Greater Noida",
      "location": "JC4P+XP9, Haibatpur, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-00008",
      "GST Number": "09AAVFS5522L1ZF",
      "Billing Address": "Standeerd sweets D-319 sec10  Noida ",
      "location": "Sector 10, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00013",
      "GST Number": "",
      "Billing Address": "Asharam gate Kumar bilder sec 63 A",
      "location": "J9GM+65Q, D Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301, India",
      "Billing City": "Hazratpur Wajidpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-92",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00014",
      "GST Number": "",
      "Billing Address": "D-22 ,Omaxe India Trade Center ,HB Cafe Alpha 2 ,Grater Noida ",
      "location": "20, 11th Cross Street, Alpha 2, Greater Noida, Uttar Pradesh, 201310",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-94",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-95",
      "GST Number": "",
      "Billing Address": "Shop no. 22 food court, 4th floor galaxy blue sapphire sec 4 noida",
      "location": "1F/F1A, Haibatpur, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-96",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-97",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00015",
      "GST Number": "09AAECK7256K1Z1",
      "Billing Address": "325-A, Third Floor, The Great India Place Mall, Sector 38-A, Near Sector 38, Noida",
      "location": "Sector 18, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-99",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-100",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-101",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-102",
      "GST Number": "",
      "Billing Address": "Gheja Road Bhangel",
      "location": "Gejha Road, Bhangel Begampur, Noida, Uttar Pradesh, 201304",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-103",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-104",
      "GST Number": "09AACFZ4376L1ZH",
      "Billing Address": "Plot No. H1A/19 Noida Sector 63",
      "location": "Sector 63, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-105",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-106",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-107",
      "GST Number": "",
      "Billing Address": "Sector 21A, Noida, Uttar Pradesh, 201301",
      "location": "Sector 21A, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-108",
      "GST Number": "",
      "Billing Address": "B1, Road Number 19, Wadala West, Mumbai, Maharashtra, 400031",
      "location": "B1, Road Number 19, Wadala West, Mumbai, Maharashtra, 400031",
      "Billing City": "Mumbai",
      "Billing State": "Maharashtra",
      "Billing Code": "400031"
  },
  {
      "Customer Number": "CUS-109",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-110",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-111",
      "GST Number": "",
      "Billing Address": "B 25 3rd Floor, B Block Sector 2",
      "location": "B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-112",
      "GST Number": "",
      "Billing Address": "B1, Road Number 19, Wadala West, Mumbai, Maharashtra, 400031",
      "location": "B1, Road Number 19, Wadala West, Mumbai, Maharashtra, 400031",
      "Billing City": "Mumbai",
      "Billing State": "Maharashtra",
      "Billing Code": "400031"
  },
  {
      "Customer Number": "CUS-113",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-114",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00029",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00022",
      "GST Number": "",
      "Billing Address": "Ground Floor, C-27, Market, RDC, Sector 15, Sector 10, Raj Nagar, Ghaziabad, Uttar Pradesh 201002   ",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201020"
  },
  {
      "Customer Number": "CUS-00016",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-118",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00069",
      "GST Number": "09AAJCG2707N1Z8",
      "Billing Address": "A-41 The Corenthum Tower",
      "location": "Sector 62, Noida, Uttar Pradesh, 201309",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201309"
  },
  {
      "Customer Number": "CUS-00112",
      "GST Number": "07AAFCT9384C1Z3",
      "Billing Address": "H9GJ+WP7, Sector 75, Noida, Uttar Pradesh, India",
      "location": "H9GJ+WP7, Sector 75, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-121",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00021",
      "GST Number": "",
      "Billing Address": "fc-12 4th floor food court galaxy blue sapphire plaza",
      "location": "34A, Haibatpur, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-00018",
      "GST Number": "",
      "Billing Address": "Sec -12 Y Block Near Veer Ji Mali Chap ",
      "location": "Jamna Lal Bajaj Marg, Sector 12, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00017",
      "GST Number": "",
      "Billing Address": "shop no. 59 opposite cleo county gate no. 1 sector 121 Noida",
      "location": "H9XR+HJG, Sector 121, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-125",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00037",
      "GST Number": "",
      "Billing Address": "Shop no. A-18 AVJ HEIGHTS MARKET ZETA-1",
      "location": "Zeta 1, AVG Heights Market, Gulistanpur, Greater Noida, Uttar Pradesh 201306, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-127",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-128",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-129",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-130",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00019",
      "GST Number": "09ABFFP4642R1ZH",
      "Billing Address": "C 98/26, C block market, Sector 41, Noida",
      "location": "Swami Vivekananda Marg, Sector 41, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-132",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-133",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-134",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00020",
      "GST Number": "09AOTPT4429D1ZF",
      "Billing Address": "Shop Number - 140-142 Jaipurai Plaza Sec -26 Noida",
      "location": "Sector 26, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-136",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00009",
      "GST Number": "",
      "Billing Address": "Anjali, D Block, Pocket D, Sector 27, Noida, Uttar Pradesh 201301",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201020"
  },
  {
      "Customer Number": "CUS-138",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-139",
      "GST Number": "",
      "Billing Address": "Eco, GF-30, Bhangel, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "location": "Eco, GF-30, Bhangel, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-140",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-141",
      "GST Number": "",
      "Billing Address": "Shop No.39 Rise Palm Street Near ATS Chowk Bisrakh Sec 1 Gr Noida West",
      "location": "HCGH+GVV, Samrat Ashok Rd, Sector 1, Bisrakh Jalalpur, Greater Noida, Bisrakh Jalalpur, Uttar Pradesh 201009, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-142",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-143",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-144",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-145",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00023",
      "GST Number": "",
      "Billing Address": "Shop No-8, Y-349C, near Sabji Mandi, Block Y, Sector 12, Noida, Uttar Pradesh 201301",
      "location": "Azadpur, New Delhi, Delhi, 110033",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00026",
      "GST Number": "09AAMCS0422R1ZT",
      "Billing Address": "g-274, sector-63,  noida",
      "location": "G-274, G Block, Sector 65, Noida, Chotpur, Uttar Pradesh 201301, India",
      "Billing City": "Chotpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-148",
      "GST Number": "09AAJCG2707N1Z8",
      "Billing Address": "304 2nd Floor sector 15 Vasundhara",
      "location": "M935+676, Sector 15, Vasundhara, Ghaziabad, Uttar Pradesh 201012, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201012"
  },
  {
      "Customer Number": "CUS-149",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-150",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00025",
      "GST Number": "",
      "Billing Address": "Sec 10noida  Anand biknari  near wine shop sec 10 noida c 233",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-152",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-153",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00024",
      "GST Number": "",
      "Billing Address": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-155",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-156",
      "GST Number": "09AAZFK7978E1ZA",
      "Billing Address": "ra 12.  raipur khadar",
      "location": "G8RP+W3Q, Raipur Khadar Main Rd, Raipur Khadar, Sector 126, Noida, Uttar Pradesh 201313, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201313"
  },
  {
      "Customer Number": "CUS-157",
      "GST Number": "09awtpg0457g1za",
      "Billing Address": "Christ University Nandgram marium nagar",
      "location": "36, Marium Nagar, Ghukna, Ghaziabad, Uttar Pradesh 201003, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201003"
  },
  {
      "Customer Number": "CUS-158",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-159",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00035",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-161",
      "GST Number": "",
      "Billing Address": "Jagat farm market opp, Gurabaksh plaza",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00030",
      "GST Number": "",
      "Billing Address": "Guru baksh Plaza 1st Floor Jagat Farm Greater Noida ",
      "location": "Gamma 1, Greater Noida, Uttar Pradesh, 201310",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-163",
      "GST Number": "",
      "Billing Address": "Shop D-10 Omaxe ITC Aloha-2",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00027",
      "GST Number": "09AKVPT6434E1ZI",
      "Billing Address": "c-2Ground floor omax india trade center alfa 2 greater noida",
      "location": "FGGC+MCH, Alpha-II Commercial Belt, Block I, Sector Alpha II, Greater Noida, Brahmpur Rajraula Urf Nawada, Uttar Pradesh 201308, India",
      "Billing City": "Brahmpur Rajraula Urf Nawada",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201308"
  },
  {
      "Customer Number": "CUS-165",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00028",
      "GST Number": "",
      "Billing Address": "Zeta 1 AVJ height market greter Noida ",
      "location": "Main Road, Zeta 1, Greater Noida, Uttar Pradesh, 201310",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-167",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-168",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-169",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-170",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-171",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-172",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-173",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-174",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-175",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-176",
      "GST Number": "09AAHFU7433L1ZL",
      "Billing Address": "Shop 9, Second floor, Shopping complex, Kendriya vihar, CGEWHO, Phi-2, Greater Noida",
      "location": "07, Pocket 4, Phi II, Greater Noida, Uttar Pradesh 201307, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-177",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-178",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00033",
      "GST Number": "",
      "Billing Address": "Shop 1 Basai Market Sector 70 Noida ",
      "location": "Basi, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-180",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-181",
      "GST Number": "",
      "Billing Address": "shop no.7,the coffee cat , antriksh Forest society,sector77,Noida",
      "location": "Antriksh Forest Society Sector 77 Dollu Clinic , Dr. Bhavna, Jaiswal, Gen. Physician & Pathologist, near PRATEEK WISTERIA, Antriksh Forest, Sec 77, Sector 77, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-182",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-183",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-184",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-185",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-186",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-187",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-188",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-189",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-190",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-191",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-192",
      "GST Number": "",
      "Billing Address": "C 68, Sector 47, noida ",
      "location": "Sector 47, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-193",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00042",
      "GST Number": "",
      "Billing Address": "Aero Business Tower, HIG Flats, Chander Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011, India",
      "location": "Aero Business Tower, HIG Flats, Chander Nagar, Surya Nagar, Ghaziabad, Uttar Pradesh 201011, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201011"
  },
  {
      "Customer Number": "CUS-195",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00034",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00039",
      "GST Number": "",
      "Billing Address": "plot-457 Main road near SRS Hospital noida 70",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-198",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-199",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-200",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-201",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-202",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-203",
      "GST Number": "",
      "Billing Address": "Shop 16 sundar farm  house  sarfabad",
      "location": "8, Sector 73, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-204",
      "GST Number": "",
      "Billing Address": "B-107, Block B, Sector 51, Noida, Uttar Pradesh 201303, India",
      "location": "B-107, Block B, Sector 51, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-205",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-206",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-207",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-208",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-209",
      "GST Number": "",
      "Billing Address": "A - 4 Noida Sector 68 ",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-210",
      "GST Number": "",
      "Billing Address": "Block1, Sector 22, Noida UP",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-211",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-212",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-213",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-214",
      "GST Number": "",
      "Billing Address": "8, Sector 73, Noida, Uttar Pradesh 201301, India",
      "location": "8, Sector 73, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-215",
      "GST Number": "09AANCP5339B1ZA",
      "Billing Address": "2nd Floor  Plot no 82,  Ecotech 12, Greater Noida west",
      "location": "116C, Roza Yakubpur, Greater Noida, Ithaira, Uttar Pradesh 201009, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-216",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-217",
      "GST Number": "09AALCP2994G1ZV",
      "Billing Address": "D 340/C, Sector 63, Noida 201301",
      "location": "342, Block D, Sector 63, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-218",
      "GST Number": "09AFEFS3187H1ZM",
      "Billing Address": "LGF5 VEDANTAM RAJNAGAR EXT",
      "location": "5, Raj Nagar Extention Morti Rd, Raj Nagar Extension, Ghaziabad, Uttar Pradesh 201011, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201011"
  },
  {
      "Customer Number": "CUS-219",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-220",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-221",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-222",
      "GST Number": "09ADSFS9003L1ZC",
      "Billing Address": "Shop No. 15GF, Parsvnath Majestic Arcade, Vaibhav Khand, Indirapuram, Ghaziabad",
      "location": "Parsvnath Majestic Indirapuram Ghaziabad, mo. 9 two 89 five 86 355, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201014"
  },
  {
      "Customer Number": "CUS-223",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-224",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-225",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-226",
      "GST Number": "",
      "Billing Address": "sector 46 garden Gloria market shop 18",
      "location": "Shop No. 43, Ist Floor, I Square, Market, B Block, Gardenia Glory, Sector 46, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-227",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-228",
      "GST Number": "",
      "Billing Address": "shop - 104plot number no-22 Assotech business cresterra sector 135 Noida",
      "location": "Sea view Special Economic Zone,Building No. 4,Plot No. 20 & 21, INFOSPACE, Sector 135, Noida, Bajidpur, Uttar Pradesh 201304, India",
      "Billing City": "Bajidpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-229",
      "GST Number": "",
      "Billing Address": "Sector 18, Noida, Uttar Pradesh, 201301",
      "location": "Sector 18, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-230",
      "GST Number": "",
      "Billing Address": "Assotech buisness cresterra noida sector 135 Shop number 104,105,106",
      "location": "FCW2+XRV, Sector 135, Noida, Bajidpur, Uttar Pradesh 201304, India",
      "Billing City": "Bajidpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-231",
      "GST Number": "",
      "Billing Address": "Azadpur, New Delhi, Delhi, 110033",
      "location": "Azadpur, New Delhi, Delhi, 110033",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110033"
  },
  {
      "Customer Number": "CUS-232",
      "GST Number": "09ABNFM7445H2ZP",
      "Billing Address": "D 15 Sector 3 Noida ",
      "location": "D 15 Sector 3 Noida ",
      "Billing City": "D 15 Sector 3 Noida",
      "Billing State": "D 15 Sector 3 Noida",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-233",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-234",
      "GST Number": "",
      "Billing Address": "Prem market gali no. 1 basai sector 70 noida",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-235",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-236",
      "GST Number": "",
      "Billing Address": "Near By Parthla Flyover Sector 123 Ambadkarcity ",
      "location": "Noida Greater Noida Link Road, Ambedkar City, Noida, Uttar Pradesh, 201318",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-237",
      "GST Number": "",
      "Billing Address": "shop number - G35 ,sky plaza ,sky garden sec 26B Greater noida",
      "location": "Eco, GF-34, Bhangel, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-238",
      "GST Number": "",
      "Billing Address": "D-155 Chotpur Colony Sector 63 Noida ",
      "location": "Chotpur, Noida, Uttar Pradesh, 201009",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-239",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-240",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-241",
      "GST Number": "",
      "Billing Address": "Shop No - G 9 SKY GARDEN GREATER NOIDA",
      "location": "1F-13, Eco, Greater Noida, Ithaira, Uttar Pradesh 201009, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-242",
      "GST Number": "",
      "Billing Address": "g5 Shri Radha SKY GARDEN",
      "location": "Plot No.GH-05, Sector 16B Rd, Greater Noida West, Bhangel, Greater Noida, Ithaira, Uttar Pradesh 201318, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-243",
      "GST Number": "",
      "Billing Address": "Sharma Market Near SKS school sector 16B greater Noida",
      "location": "Jf62+Jh, Mahagun Mywoods Phase 2, Bhangel, Delhi NCR, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-244",
      "GST Number": "",
      "Billing Address": "112 Gulshan Bellina Market Sector 16 b",
      "location": "GF-107, Panchsheel Greens 2, Greater Noida, Ithaira, Uttar Pradesh 201009, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-245",
      "GST Number": "",
      "Billing Address": "br 24 , barola sector 49 noida",
      "location": "H96H+WQF, 1, Vishwakarma Rd, Natthu Colony, Baraula, Sector 49, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-246",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-247",
      "GST Number": "",
      "Billing Address": "shop à¥§à¥¨à¥­ Gilsan bellina street",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-248",
      "GST Number": "",
      "Billing Address": "shop no. 21 panchsheel green 2 greater Noida",
      "location": "2, Panchsheel Greens 2, Greater Noida, Ithaira, Uttar Pradesh 201009, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-249",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-250",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-251",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-252",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-253",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-254",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-255",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-256",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-257",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-258",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-259",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-260",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-261",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-262",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-263",
      "GST Number": "",
      "Billing Address": "sector 70 basai bhagwati garden pream apartment",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-264",
      "GST Number": "09AIVPA7846F1ZT",
      "Billing Address": "Shop no. SG-1, Aditya City Centre, Vaibhav Khand",
      "location": "14-15, Dr Sushila Naiyar Marg, Indirapuram, Ghaziabad, Uttar Pradesh, 201014",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201014"
  },
  {
      "Customer Number": "CUS-266",
      "GST Number": "",
      "Billing Address": "ug11 avantika retail street lotus sristi socity",
      "location": "Lotus Shristi, LG-14, Crossings Republik, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-267",
      "GST Number": "",
      "Billing Address": "I -71 Delta 2 near Sharma hospital",
      "location": "I 358, Block K, Delta II, Greater Noida, Uttar Pradesh, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-268",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-269",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-270",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-271",
      "GST Number": "",
      "Billing Address": "sector 70 Basai Prema apartment",
      "location": "73, Desai Village, Basai, Sector 70, Basi Bahuddin Nagar, Noida, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-272",
      "GST Number": "",
      "Billing Address": "Main DADRI road pillor no 108 sector 102",
      "location": "107, Dadri Main Rd, Goyal Colony, Salarpur Khadar, Sector 102, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-273",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-274",
      "GST Number": "09KAGPS3391G1Z3",
      "Billing Address": "Sarfabad, Sectore 73, Near Yadu Public School, Near Sector 72, Noida",
      "location": "Sarfabad, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-275",
      "GST Number": "09AARFK8294P1Z0",
      "Billing Address": "Gali No.-6, Parthala Khanjarpur, Sector -122, Noida, 201301",
      "location": "Parthala Khanjarpur, Noida, Uttar Pradesh, 201316",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201316"
  },
  {
      "Customer Number": "CUS-276",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-277",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-278",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-279",
      "GST Number": "",
      "Billing Address": "gali no 4 hoshiyarpur sector 51 Noida",
      "location": "425, Hoshiyarpur, Hoshiarpur Village, Sector 51, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-280",
      "GST Number": "",
      "Billing Address": "B/13 East And Public School Pillor No - 168 New Ashok Nagar",
      "location": "Main Road, New Ashok Nagar, New Delhi, Delhi, 110096",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110096"
  },
  {
      "Customer Number": "CUS-281",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-282",
      "GST Number": "09AATHM1239G1ZW",
      "Billing Address": "H39, sector 70,Noida near sapphire sapphire school Gautam  Buddha nager",
      "location": "249, Sector 70, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201305, India",
      "Billing City": "Basi Bahuddin Nagar",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-283",
      "GST Number": "",
      "Billing Address": "Greater noida west Take zone - 4",
      "location": "5, opposite D-Mart, Amrapali Leisure Valley, Greater Noida, Uttar Pradesh 201009, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-284",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-285",
      "GST Number": "",
      "Billing Address": "G426 Saya Zion gaur city 1 greater Noida",
      "location": "Sector 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-286",
      "GST Number": "",
      "Billing Address": "B2-05 Mehak Eco City",
      "location": "JG75+R39 Mehak Eco City, Mehak Eco City, Uttar Pradesh 203207, India",
      "Billing City": "Mehak Eco City",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "203207"
  },
  {
      "Customer Number": "CUS-287",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-288",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-289",
      "GST Number": "",
      "Billing Address": "Shop 1 plot no 843 Karhara mohan nagar near Punjab National Bank",
      "location": "M9QJ+289, NCR, Karhera colony, Karera, Mohan Nagar, Region, Ghaziabad, Uttar Pradesh 201004, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201004"
  },
  {
      "Customer Number": "CUS-290",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-291",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-292",
      "GST Number": "",
      "Billing Address": "Gautam Mudh Nagar West greater Noida Take zone 4 near D Mart",
      "location": "HCVP+4CF, आम्रपाली ड्रीम वैली, ग्रेटर नोएडा, उत्तर प्रदेश 201009, भारत",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-293",
      "GST Number": "09aakcc3680m1z3",
      "Billing Address": "05 rohelapur gali no 1 noida sector 132",
      "location": "Sec 132, near STEP BY STEP SCHOOL, Rohillapur, Block B, Sector 132, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-294",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-295",
      "GST Number": "09DGAPS3929F1Z6",
      "Billing Address": "Gali No- 03, near Yaduvanshi Pg, Hazipur, Sector 104, Noida, Uttar Pradesh 201301",
      "location": "G9Q8+5F8, Hazipur, Sector 104, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-296",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-297",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-298",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-299",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-300",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-301",
      "GST Number": "09ABDFP6076D1Z4",
      "Billing Address": "A-44, Sector 69 , TP Nagar",
      "location": "Sector 69, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-302",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-303",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-304",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-305",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-306",
      "GST Number": "09AARFC0238R1ZS",
      "Billing Address": "Aditya mall  Indrapuram opposite Bombay bazar",
      "location": "740-A, Nyay Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201014"
  },
  {
      "Customer Number": "CUS-307",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-308",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-309",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-310",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-311",
      "GST Number": "",
      "Billing Address": "height hights tau ji samose bale",
      "location": "BLOCK-5, AASHIYANA HOMES, Basai, Sector 70, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201307, India",
      "Billing City": "Basi Bahuddin Nagar",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-312",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-313",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-314",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-315",
      "GST Number": "",
      "Billing Address": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-316",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-317",
      "GST Number": "",
      "Billing Address": "shop no 1 4/12, Plot 4,  Sector 5, Rajendra Nagar, Ghaziabad, Uttar Pradesh 201005",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201005"
  },
  {
      "Customer Number": "CUS-318",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-319",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-320",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-321",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-322",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-323",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-324",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-325",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-326",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-327",
      "GST Number": "09AAHCG1529N1Z8",
      "Billing Address": " N-15 & 16 , Second floor Sector - 18 Noida UP",
      "location": "Sector 18, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-328",
      "GST Number": "",
      "Billing Address": "Techzone 4 Greater Noida West D - Mart ",
      "location": "Techzone 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-329",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-330",
      "GST Number": "",
      "Billing Address": "Shiv Shakti Enclave Sector 81 Near Shiv Mandir ",
      "location": "Sector 81 Phase 2, Noida, Uttar Pradesh, 201305",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-331",
      "GST Number": "",
      "Billing Address": "Godavari market sector 37 noida Shop no - 9",
      "location": "Shop No 9 Godavari Shopping Complex, Arun Vihar, Sector 37, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-332",
      "GST Number": "",
      "Billing Address": "Godavari market shop no - 9 sector 37",
      "location": "Shop No 9 Godavari Shopping Complex, Arun Vihar, Sector 37, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-333",
      "GST Number": "",
      "Billing Address": "No26, Shop No 8, Barolla, Gali, Baraula, Sector 49, Noida, Uttar Pradesh 201301",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-334",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-335",
      "GST Number": "09AAKCP3505A1ZR",
      "Billing Address": "Harish Chand Complex, Shop No. 1, 2nd Floor, Sarfabad. Sector 73 Near JM Arroma Society and Sunder Farm House",
      "location": "Sarfabad, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-336",
      "GST Number": "09AYDPR7489K1ZG",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-337",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-338",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-339",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-340",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-341",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-342",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-343",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-344",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-345",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-346",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-347",
      "GST Number": "",
      "Billing Address": "3rd Floor Unit .TF -1A Tower C Spectrum Mal Plot No .C And D Sec 75 Noida ",
      "location": "Sector 75, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-348",
      "GST Number": "",
      "Billing Address": "27 Godwari Complex Sector 37",
      "location": "2018, RWA Marg, Sector 37, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-349",
      "GST Number": "",
      "Billing Address": "Shop No - 07 Godavari Complex  ",
      "location": "RWA Marg, Sector 37, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-350",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-351",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-352",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-353",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-354",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-355",
      "GST Number": "",
      "Billing Address": "Sec-122 CM-30 Noida",
      "location": "Sector 123, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-356",
      "GST Number": "",
      "Billing Address": "Godavari Complex Sector - 37 ",
      "location": "RWA Marg, Sector 37, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-357",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-358",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-359",
      "GST Number": "",
      "Billing Address": "sector 104 hajipur noida",
      "location": "HA109, Hazipur, Sector 104, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-360",
      "GST Number": "09AAIFU5080C124",
      "Billing Address": "GR/In 2, TOWER - B, SPECTRUM@METRO, PLOT C & D, SECTOR 75, NOIDA, SECTOR-75 NOIDA, NOIDA CITY ZONE-4, Gautam Buddha Nagar, Uttar Pradesh - 201301 ",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-361",
      "GST Number": "",
      "Billing Address": "EATERY ~ A Complete Kitchen ~ , Sharma Market, Next to Bihari Market Near SKS World School, Greater Noida West, Sector 16(B), Uttar Pradesh 201306",
      "location": "Label",
      "Billing City": "Label",
      "Billing State": "Label",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-362",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-363",
      "GST Number": "",
      "Billing Address": "187 Street no - 8 West Guru Angad Nagar Laxmi Nagar",
      "location": "188, Street No 2, Gyan Kunj, Guru Angad Nagar West, Laxmi Nagar, New Delhi, Delhi, 110092, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-364",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-365",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-366",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-367",
      "GST Number": "",
      "Billing Address": "H-196, sector-63 noida",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-368",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-369",
      "GST Number": "09ABIFR0293B1ZA",
      "Billing Address": "Shop No 112, Gulshan Bellina Market, Noida Extension ",
      "location": "GF-136, Bellina Street, Sector 16, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-370",
      "GST Number": "09AAXFD3383J1ZP",
      "Billing Address": "Shop number, SE - 127, Jaipuria sunrise green, Plot no. 12A, Ahinsa khand 1, Indirapuram, Ghaziabad",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201014"
  },
  {
      "Customer Number": "CUS-371",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-372",
      "GST Number": "09AKYPS4243H1ZF",
      "Billing Address": " Shop-22, LG, Gh-02, Sector Tehzone-IV, Amrapali Leisure Valley Noida Uttar Pradesh 201308",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201308"
  },
  {
      "Customer Number": "CUS-373",
      "GST Number": "09AJJPR5108C2Z8",
      "Billing Address": "PK b -12 sector 122 noida up",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-374",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-375",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-376",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-377",
      "GST Number": "",
      "Billing Address": "Plot No - 86 Sam Residency Crossing Republic ",
      "location": "Crossing Republic Road, Dundahera, Ghaziabad, Uttar Pradesh, 201009",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201016"
  },
  {
      "Customer Number": "CUS-378",
      "GST Number": "09AAICM7682B1Z8",
      "Billing Address": "J 63, Sector 63 Noida Gautam Buddh Nagar",
      "location": "Sector 63, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-379",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-380",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-381",
      "GST Number": "",
      "Billing Address": "Men Nala Road metro station near 81 Mha singh market, salarpur Noida Uttar Pradesh 201304",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-382",
      "GST Number": "03AJXPK0001F1ZQ",
      "Billing Address": "Shop no. 09 Sector 67 Mohali",
      "location": "9, Sector 67, Sahibzada Ajit Singh Nagar, Punjab 160062, India",
      "Billing City": "Sahibzada Ajit Singh Nagar",
      "Billing State": "Punjab",
      "Billing Code": "160062"
  },
  {
      "Customer Number": "CUS-383",
      "GST Number": "09BWRPS3384K1ZI",
      "Billing Address": "SHOP NO-18, AMRAPALI PRINCELY ESTATE, SECTOR -76, NOIDA, NOIDA, Gautam Buddha Nagar, Uttar Pradesh, 201301",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-384",
      "GST Number": "09AAOPS3750K1Z1",
      "Billing Address": "27,Godavari Market. Near Arun Vihar Club, Sector 37",
      "location": "RWA Marg, Sector 37, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-385",
      "GST Number": "",
      "Billing Address": "A-38 Ground Floor Sector 67 Noida",
      "location": "J93J+896, Block A, Sector 67, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-386",
      "GST Number": "",
      "Billing Address": "DC enclave Old Haibatpur Road Greater Noida West ",
      "location": "Yusufpur, Greater Noida, Uttar Pradesh, 201009",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-387",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-388",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-389",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-390",
      "GST Number": "",
      "Billing Address": "AVJ HEIGHTS ZETA 1 Greater Noida Greater Noida UP 201306",
      "location": "Sakipur Village, Greater Noida, Uttar Pradesh, 201310",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-391",
      "GST Number": "09AFWPY3232K1ZK",
      "Billing Address": "tgip mall gate no 8 food court 3 flor",
      "location": "The Great India Place Mall, Sector 38, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-392",
      "GST Number": "09AAJCK4455F1ZC",
      "Billing Address": "D-106 Sector 63 Noida Gautam Buddha Nagar",
      "location": "Lohia Road, Sector 63, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-393",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-394",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-395",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-396",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-397",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-398",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-399",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-400",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-401",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-402",
      "GST Number": "",
      "Billing Address": "In front of metro pillar no. 33, sector 15, Noida Uttar Pradesh 201301 India",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-403",
      "GST Number": "09AAGFU0914P1ZQ",
      "Billing Address": "#220-221, First Floor, Gardens Galleria Mall, Sector 38A, Noida, Uttar Pradesh",
      "location": "Sector 38 A, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-404",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-405",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-406",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-407",
      "GST Number": "",
      "Billing Address": "D-101, 3rd Floor, Sector-63, Noida",
      "location": "D 101, D Block, Sector 63, Noida, Hazratpur Wajidpur, Uttar Pradesh 201301, India",
      "Billing City": "Hazratpur Wajidpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-408",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-409",
      "GST Number": "",
      "Billing Address": "Sector-12, Near wine shop 12/22 Market, Noida",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-410",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-411",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-412",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-413",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-414",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-415",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-416",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-417",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-418",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-419",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-420",
      "GST Number": "",
      "Billing Address": "Main Nala road salarpur Jagannath temple sec101",
      "location": "H92P+XRC, Sector 102, Salarpur Khadar, Salarpur, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-421",
      "GST Number": "",
      "Billing Address": "M-35 Pratap Vihar Ghaziabad",
      "location": "M - 35,M Block, Pratap Vihar sec 12, Sector 12, Block M, Pratap Vihar, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-422",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-423",
      "GST Number": "",
      "Billing Address": "Noida Sector 75 ",
      "location": "Sector 75, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-424",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-425",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-426",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-427",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-428",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-429",
      "GST Number": "",
      "Billing Address": "Plot no - 38. Gali no - 4, behind Punjab National Bank, Hazipur, Sector 104, Noida, Uttar Pradesh 201304",
      "location": "Hajipur, Noida, Uttar Pradesh, 201304",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-430",
      "GST Number": "",
      "Billing Address": "Amrapali zodiac noida sec 120",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-431",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-432",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-433",
      "GST Number": "",
      "Billing Address": "s-24, B4 Suri House",
      "location": "A12, Indra Nagar, A Block, Panchwathi, Azadpur, New Delhi, Delhi, 110033, India",
      "Billing City": "Delhi",
      "Billing State": "110033",
      "Billing Code": "110033"
  },
  {
      "Customer Number": "CUS-434",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-435",
      "GST Number": "",
      "Billing Address": "124 Block 2, Ganga Shopping Complex Sector 29 Noida",
      "location": "Sector 29, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-436",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-437",
      "GST Number": "09ABDFP9559R1Z1",
      "Billing Address": "Genzee cafe and fine dine.Shop no 19, Fourth floor, Spectrum metro mall sec 75.Oppo to metro mall sec 50",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-438",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-439",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-440",
      "GST Number": "",
      "Billing Address": "G 16 sector 18 noida",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-441",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-442",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-443",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-444",
      "GST Number": "",
      "Billing Address": "Chaska cafe Shop no OL-17 Paramount Golfmart UPSC Side C Zeta 2 201306",
      "location": "Norman Drive, Paramount Golf Foreste, Greater Noida, Uttar Pradesh, 201311",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-445",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-446",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-447",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-448",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-449",
      "GST Number": "",
      "Billing Address": "Rdr malal chaaap Gate no -1 shop no 53 Police chowki HCL sector 126 noida Noida Uttar Pradesh 201313 India",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201313"
  },
  {
      "Customer Number": "CUS-450",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-451",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-452",
      "GST Number": "",
      "Billing Address": "Sec 12 Z Block House No -67",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-453",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-454",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-455",
      "GST Number": "",
      "Billing Address": "A-804, Sanchar Nest, Wave City Marg, Sector - 6, Wave City,  Ghaziabad",
      "location": "MF5P+CJ, Ghaziabad, Uttar Pradesh 201002, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201002"
  },
  {
      "Customer Number": "CUS-456",
      "GST Number": "",
      "Billing Address": "Ground Floor, B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "location": "Ground Floor, B-25, B Block, Sector 2, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-457",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-458",
      "GST Number": "",
      "Billing Address": "4, Block A, Sector 68, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201305, India",
      "location": "4, Block A, Sector 68, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201305, India",
      "Billing City": "Basi Bahuddin Nagar",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-459",
      "GST Number": "",
      "Billing Address": "G-16 Sec-18 first floor",
      "location": "G-15, G Block, Pocket G, Sector 18, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-460",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-461",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-462",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-463",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-464",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-465",
      "GST Number": "09EPZPK8107L1ZW",
      "Billing Address": "GROUND FLOOR SHOP NO-9 AND 10 AMRAPLI CRYSTAL HOMEPLOT NO GH01/A SECTOR-76 NOIDA GAUTAM BUDH NAGAR, SECTOR-76 NOIDA, NOIDA CITY ZONE-4, Gautam Buddha Nagar , Uttar",
      "location": "Sector 76, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-466",
      "GST Number": "09ALBPG3731C1ZN",
      "Billing Address": "SCG85/40, bisrakh road,, chhaprola , greater Noida",
      "location": "32, near Bhola nath transport, Chhapraula, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-467",
      "GST Number": "09BZMPS5175C1ZX",
      "Billing Address": "I Energizer Sector 60 Gate No 5",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-468",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-469",
      "GST Number": "09AAOCP6549G1ZT",
      "Billing Address": "4th Floor , Gaur City Mall , Sec 4 Greater Noida",
      "location": "Sector 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-470",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-471",
      "GST Number": "",
      "Billing Address": "THE KLASSIC ARCADE, SHOP NO. TKA-0010009, JAYPEEGREENS WISH TOWN, POCKET NO. B-39 & B-40 SEC-134,Noida, Gautam Buddha Nagar, Uttar Pradesh,",
      "location": "Shop No G9, Klassic Arcade Jaypee Wishtown, Sector 133, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-472",
      "GST Number": "",
      "Billing Address": "Village Iteda Near Gaur Saundaryam,sector 4 Greater Noida West",
      "location": "Noida Greater Noida Link Road, Techzone 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-473",
      "GST Number": "",
      "Billing Address": "Alpha 2 omax india trend  Alpha 2 omax india trend centre  , \nGreater Noida, Uttar Pradesh,\nIndia -",
      "location": "2, Alpha-II Commercial Belt, Block I, Sector Alpha II, Brahmpur Rajraula Urf Nawada, Greater Noida, Uttar Pradesh 201306, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-474",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-475",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-476",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-477",
      "GST Number": "",
      "Billing Address": "players house cafe sarfabad",
      "location": "H9QQ+FV7, Sarfabad Village, Sarfabad, Sector 73, Noida, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-478",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-479",
      "GST Number": "09AHUPC7432R4ZD",
      "Billing Address": "Khasara # 1299, Hall # B , Indirapuram , Makhanpur Village . ",
      "location": "Indirapuram, Ghaziabad, Uttar Pradesh, 201014",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201014"
  },
  {
      "Customer Number": "CUS-480",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-481",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-482",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-483",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-484",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-485",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-486",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-487",
      "GST Number": "",
      "Billing Address": "Durga Complex Mayur Vihar Phase 2 Pocket b",
      "location": "Neelam Mata Road, Mayur Vihar Phase 2, New Delhi, Delhi, 110091",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-488",
      "GST Number": "09AAJFF3818N1ZX",
      "Billing Address": "piller no 45 nearby Regenta hotel baraula sector 49 Noida",
      "location": "Bank of India, sector 50 branch, Chahuah complex, near hotel regenta, Rajput Colony, Natthu Colony, Baraula, Sector 49, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-489",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-490",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-491",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-492",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-493",
      "GST Number": "",
      "Billing Address": "Shop no. LGF 01,  SUPERTECH ECOVILLAGE 3 MARKET GREATER NOIDA WEST,  NEAR ROZA GOLCHAKKAR",
      "location": "Fogon",
      "Billing City": "Fogon",
      "Billing State": "Fogon",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-494",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-495",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-496",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-497",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-498",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-499",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-500",
      "GST Number": "",
      "Billing Address": "C-204, Amrapali zodiac, noida sector -120, Noida Uttar Pradesh 201307",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-501",
      "GST Number": "09AAKCB6957C1ZF",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00041",
      "GST Number": "09ABBFG5312R1Z1",
      "Billing Address": "Floor No.: First Floor Unit 1 Building No./Flat No.: A- 72 Road/Street: Sector 4, Gautambuddha Nagar City/Town/Village: Noida District: Gautambuddha Nagar State: Uttar Pradesh",
      "location": "Sector 4, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-503",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-504",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00172",
      "GST Number": "",
      "Billing Address": "B-13, Shop No-11, Shalimar garden, Ext-2, Near Shiv Chowk",
      "location": "Dr Zakir Hussain Marg, Shalimar Garden Extension 2, Ghaziabad, Uttar Pradesh, 201005",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201005"
  },
  {
      "Customer Number": "CUS-00163",
      "GST Number": "",
      "Billing Address": "lgs - 10, supertech Eco , city sector - 137 , Noida",
      "location": "SUPERTECH ECOCITI, No. 11 & 12, Sector 137 Rd, Sector 137, Noida, Uttar Pradesh 201305, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-00174",
      "GST Number": "",
      "Billing Address": "Near sundarform Golf city market , sector 75 , Noida, Uttar Pradesh, ,, \nNoida, Uttar Pradesh,",
      "location": "4, Block A, Sector 68, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201305, India",
      "Billing City": "Basi Bahuddin Nagar",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-508",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-509",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-510",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00186",
      "GST Number": "",
      "Billing Address": "Dadri Main Road Noida Sector 110 ",
      "location": "Dadri Main Road, Salarpur Khadar, Noida, Uttar Pradesh, 201304",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-512",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-513",
      "GST Number": "",
      "Billing Address": "25, Bhangel, Salarpur Khadar, Salarpur, Noida, Uttar Pradesh 201301, India",
      "location": "25, Bhangel, Salarpur Khadar, Salarpur, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-514",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00160",
      "GST Number": "",
      "Billing Address": "Sector 110 Gejha road near vishal mega mart",
      "location": "G9RP+5VW, Gejha Rd, opp. vishal mega mart, Goyal Colony, Salarpur Khadar, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00161",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-517",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-518",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-519",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-520",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00162",
      "GST Number": "",
      "Billing Address": "Kolkata restaurant 201313, Raipur Khadar, Sector 126, \nNoida, Uttar Pradesh",
      "location": "B-824, Block B, New Sabzi Mandi, Azadpur, Delhi, 110033, India",
      "Billing City": "Delhi",
      "Billing State": "110033",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-522",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-523",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00194",
      "GST Number": "",
      "Billing Address": "gali no. 2 gram , sahadra , near gram panchayat,  sector 141",
      "location": "SUPERTECH ECOCITI, No. 11 & 12, Sector 137 Rd, Sector 137, Noida, Uttar Pradesh 201305, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-525",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-526",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-527",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-528",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-529",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-530",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00218",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-532",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00164",
      "GST Number": "09HRXPK6136C1Z9",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00173",
      "GST Number": "",
      "Billing Address": "LG -47 Cloud 9, Sec-1 Vaishali Ghaziabad",
      "location": "Gautam Palvi Road, Vaishali, Ghaziabad, Uttar Pradesh, 201019",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201019"
  },
  {
      "Customer Number": "CUS-535",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-536",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-537",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-538",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-539",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-540",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-541",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-542",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-543",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-544",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-545",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-546",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-547",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-548",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-549",
      "GST Number": "",
      "Billing Address": "sector 45 SS fitness g shivalika Bank",
      "location": "Jha Niwas, 2, Block C, Sector-45, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-00169",
      "GST Number": "",
      "Billing Address": "vill sadarpur sector 45 noida",
      "location": "1, Sadarpur Main Rd, near by Old Shiv Mandir, Block C, Sector-45, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-551",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-552",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-553",
      "GST Number": "",
      "Billing Address": "A one Pizza Hut Surajpur Lakhna Bali Road Bhagat Singh College",
      "location": "265, Integrated Freight Complex, Mayur Vihar Phase III, Ghazipur, New Delhi, Delhi, 110096, India",
      "Billing City": "Delhi",
      "Billing State": "110096",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-00207",
      "GST Number": "",
      "Billing Address": "plot no 35 , Kharsa 515 1st Floor Gali No 4 , Hazipur",
      "location": "8, near Punjab National Bank, Hazipur, Sector 104, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-555",
      "GST Number": "09ACCFA6417B1ZT",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00178",
      "GST Number": "09AOEPK7687R1ZS",
      "Billing Address": "B 40 Shiv Mandir Noida Sector 31",
      "location": "B 40 Shiv Mandir Noida Sector 31",
      "Billing City": "B 40 Shiv Mandir Noida Sector 31",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00170",
      "GST Number": "",
      "Billing Address": "shop , No.- 12 , Harsha mall, alpha- I , Greater Noida ",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-00171",
      "GST Number": "",
      "Billing Address": "Shop No - 19 VDS Market Noida Sector 110",
      "location": "Gejha Road, Sector 110, Noida, Uttar Pradesh, 201304",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-559",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-560",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-561",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00206",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-563",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-564",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00177",
      "GST Number": "",
      "Billing Address": "Salarpur Khader bhangel Noida",
      "location": "1, Dadri Main Rd, Bhangel, Salarpur Khadar, Noida, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-00175",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-567",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-568",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-569",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-570",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-571",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00190",
      "GST Number": "",
      "Billing Address": "Noor Masjid Choproli Noida Sector 168",
      "location": "Sector 168, Noida, Uttar Pradesh, 201306",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-573",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-574",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-575",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-576",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-577",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00191",
      "GST Number": "",
      "Billing Address": "LG79, Greater Noida W Rd, Gaur City 1, Center, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201301",
      "location": "3F-49E, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-00189",
      "GST Number": "",
      "Billing Address": "Greater Noida Galaxy Vega Market",
      "location": "Techzone 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-580",
      "GST Number": "27ACTPH8019F1ZC",
      "Billing Address": "BLDG NO E 20, A/503 A Wing Creek View Yogi Nagar, Borivali West",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "400091"
  },
  {
      "Customer Number": "CUS-581",
      "GST Number": "",
      "Billing Address": "Green Arch Market lgf 20A",
      "location": "LGF-26, Techzone 4, Amrapali Dream Valley, Greater Noida, Ithaira, Uttar Pradesh 201306, India",
      "Billing City": "Ithaira",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-582",
      "GST Number": "",
      "Billing Address": "Sec -73 Noida Supertech Capetown ",
      "location": "Sector 73, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-583",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-584",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-585",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-586",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00204",
      "GST Number": "",
      "Billing Address": "Tower L-1084 Noida Sector 16B Greater Noida West Near Ek Murthy Chowk",
      "location": "Max Towers, Plot No.C-001A, Delhi Noida Direct Flyway, Sector 16B, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-00180",
      "GST Number": "",
      "Billing Address": "8, B Block, Gardenia Glory, Sector 46, Noida, Uttar Pradesh , India",
      "location": "8, B Block, Gardenia Glory, Sector 46, Noida, Uttar Pradesh 201303, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-589",
      "GST Number": "",
      "Billing Address": "Sector 71, shop no. 12",
      "location": "B70, B Block, Sector 71, Noida, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-00176",
      "GST Number": "",
      "Billing Address": "Shivraj, Ravi pardhan market, sector 110, Noida, Uttar Pradesh, India - 201301",
      "location": "Khora Colony, Ghaziabad, Uttar Pradesh, 201020",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201020"
  },
  {
      "Customer Number": "CUS-591",
      "GST Number": "09AAJCK4846J1Z0",
      "Billing Address": "Krishna Apra Royal Plaza, G - 02, near ICICI Bank, Alpha-I Commercial Belt, Block E, Alpha1, Greater Noida",
      "location": "G2, Alpha-I Commercial Belt, Block E, Alpha I, Greater Noida, Uttar Pradesh 201310, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-00086",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00192",
      "GST Number": "",
      "Billing Address": "Ground flour,  kiosk -4, Eldeco Arcadia Omicron 1 , greater Noida",
      "location": "Eldeco Mystic Greens Block-E, Eldeco Mystic Greens, Omicron I, Greater Noida, Uttar Pradesh 201310, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-594",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-595",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-596",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-597",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-598",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00184",
      "GST Number": "",
      "Billing Address": "unistro kuleshra greter Noida 201304 near punchmukhi hanuman mandir",
      "location": "GCJQ+7PM, Kulesara, Noida, Greater Noida, Uttar Pradesh 201306, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201306"
  },
  {
      "Customer Number": "CUS-00193",
      "GST Number": "",
      "Billing Address": "GH 10/A Sector Tech zone 4 , Amrapali Dream Vellay",
      "location": "Techzone 4, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-601",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-602",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-603",
      "GST Number": "09BZDPK7407G1ZB",
      "Billing Address": "SHOP NO-1, GROUND & 1ST FLOOR, HOUSE NO.-83, VILLAGE-AGAHAPUR, SECTOR-41, NOIDA, Noida, Gautam budh nagar ",
      "location": "Dadri Main Road, Aghapur, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-604",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-605",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-606",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00200",
      "GST Number": "",
      "Billing Address": "Manvik foods \nSide c opp. Sector zeta greter noida, Paramount golf forest",
      "location": "3W47+4VC, Gunda Colony, Kankroli, Rajsamand, Rajasthan 313324, India",
      "Billing City": "Rajsamand",
      "Billing State": "Rajasthan",
      "Billing Code": "313324"
  },
  {
      "Customer Number": "CUS-608",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-609",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00159",
      "GST Number": "",
      "Billing Address": "Shop number KD 3&4, C Block Market,Kavinagar, Ghaziabad ",
      "location": "SH1-10, Tagore Road, Kavi Nagar, Ghaziabad, Uttar Pradesh, 201002",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201002"
  },
  {
      "Customer Number": "CUS-00168",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-612",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-613",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-614",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-615",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-616",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-617",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-618",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-619",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-620",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-621",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-622",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-623",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-624",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-625",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-626",
      "GST Number": "",
      "Billing Address": "A - 72 sector 4 Noida",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-627",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00201",
      "GST Number": "",
      "Billing Address": "Gaur City 1 Saya Zion Greater Noida ",
      "location": "Yusufpur, Greater Noida, Uttar Pradesh, 201009",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-629",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-630",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-631",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-632",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-633",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00203",
      "GST Number": "",
      "Billing Address": "sector 122 noida block 7A",
      "location": "HCV3+RQF, Shramik Kunj, Sector 122, Noida, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-635",
      "GST Number": "",
      "Billing Address": "Reviews\n4.0(23)\n1\n2\n3\n4\n5\nShop 62, assotech business cresterra, Sector 135, Noida,",
      "location": "Sea view Special Economic Zone,Building No. 4,Plot No. 20 & 21, INFOSPACE, Sector 135, Noida, Bajidpur, Uttar Pradesh 201304, India",
      "Billing City": "Bajidpur",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-636",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-637",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-638",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-639",
      "GST Number": "",
      "Billing Address": "A12, Indra Nagar, A Block, Panchwathi, Azadpur, New Delhi, Delhi, 110033, India",
      "location": "A12, Indra Nagar, A Block, Panchwathi, Azadpur, New Delhi, Delhi, 110033, India",
      "Billing City": "Delhi",
      "Billing State": "110033",
      "Billing Code": "110033"
  },
  {
      "Customer Number": "CUS-640",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-641",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-642",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-643",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-644",
      "GST Number": "",
      "Billing Address": "B46 Sector 63 Noida",
      "location": "Sector 62, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-645",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-646",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-647",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-648",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00181",
      "GST Number": "09AGRPV7195E1ZH",
      "Billing Address": "FB-406,4 TH FLOOR, GALAXY DIAMOND PLAZA SECTOR-4 GREATER NOIDA WEST",
      "location": "27, Haibatpur, Lohia Nagar, Greater Noida, Uttar Pradesh 201009, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-650",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-651",
      "GST Number": "",
      "Billing Address": "Vill Bhooda Sec 82 Phase II ",
      "location": "Bhoora Village, Noida, Uttar Pradesh, 201305",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-652",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-653",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00196",
      "GST Number": "",
      "Billing Address": "Bhramputra Shoping Complex Sector 29",
      "location": "31, Maharishi Dayanand Marg, Sector 29, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-655",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-656",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-657",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-658",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00205",
      "GST Number": "09AAACX2836N1ZU",
      "Billing Address": "Vaishali Sec 3 Near Signature Global Mall",
      "location": "Shop No. 74 , Bihari Market, Sector 3F, Sector 3, Vaishali, Ghaziabad, Uttar Pradesh 201010, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201010"
  },
  {
      "Customer Number": "CUS-660",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "110084"
  },
  {
      "Customer Number": "CUS-661",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-662",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-663",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-664",
      "GST Number": "",
      "Billing Address": "Basement, C 68, Sector 47, Noida",
      "location": "Sector 47, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-665",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-666",
      "GST Number": "",
      "Billing Address": "Old obadi Barola Sector - 76 Noida ",
      "location": "Sector 76, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-667",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-668",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00198",
      "GST Number": "",
      "Billing Address": "Sector 115 shorkha village , near Shambhu dayal public school",
      "location": "MSX TOWER-2, PARSVNATH BIBHAB PLAZA, Alfa Marg, Alpha-I Commercial Belt, Block E, Alpha I, Greater Noida, Uttar Pradesh, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-670",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00167",
      "GST Number": "",
      "Billing Address": "Shop 43, Ground Floor, Assotech Business Cresterra, Sector 135, Noida",
      "location": "3, Amritpuram, Block E, Chandila, Gamma 1, Greater Noida, Uttar Pradesh 201310, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-00165",
      "GST Number": "",
      "Billing Address": "Shop No - 103 Gulshan Bellina Market Sec 16 Greater Noida G.B Nager ",
      "location": "Bellina Street, Sector 16, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-673",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-674",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-675",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00187",
      "GST Number": "",
      "Billing Address": "sector 16b near SKS World School panchsheel green 2 Sharma market shop number 11",
      "location": "JF62+MM2, Panchsheel Greens 2, Ghaziabad, Uttar Pradesh 201009, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201009"
  },
  {
      "Customer Number": "CUS-00166",
      "GST Number": "",
      "Billing Address": "First floor sunder complex market, near sunder farm house, sarfabad sector 73 Noida",
      "location": "Sector 73, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-678",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-679",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-680",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-681",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-682",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-683",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-684",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-685",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-686",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-687",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-688",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-689",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-690",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-691",
      "GST Number": "09AANFT2330F1Z7",
      "Billing Address": "Floor No.: Ground Floor Building No./Flat No.: Shop No. 16 Road/Street: SECTOR-73, Noida Locality/Sub Locality: Sarfabad City/Town/Village: Noida District: Gautambuddha State: Uttar Pradesh PIN Code: 201301",
      "location": "Sarfabad Road, Sarfabad, Noida, Uttar Pradesh, 201307",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-692",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-693",
      "GST Number": "",
      "Billing Address": "Shop No 1, Block A Noida Special Zone, Noida Sector 82 ",
      "location": "City Kitchen Restaurant Noida special zone",
      "Billing City": "City Kitchen Restaurant Noida special zone",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-694",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-695",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-696",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-697",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-698",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-699",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-700",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-701",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-702",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-703",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00197",
      "GST Number": "",
      "Billing Address": "Shop No 136, Old court complex, Phase-2 Noida Sector 83, Industrial Area",
      "location": "Shop No 136, Old court complex, Phase 2 Noida sector 83, industerial Area",
      "Billing City": "Old court complex",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-705",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00216",
      "GST Number": "",
      "Billing Address": "Genpact Gate no 3 Noida sec 135 noida, SECTOR-136 NOIDA, NOIDA CITY ZONE-5, Gautam Buddha Nagar , Uttar Pradesh -",
      "location": "E111, Block E, Sector 15, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-707",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-708",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-709",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-710",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-711",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00217",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-713",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-714",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-715",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-716",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-717",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-718",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-719",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-720",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-721",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-722",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-723",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-724",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-725",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-726",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-727",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-728",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-729",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-730",
      "GST Number": "",
      "Billing Address": "122/3 Sector 62, Noida",
      "location": "Sector 62, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "110025"
  },
  {
      "Customer Number": "CUS-731",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-732",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-733",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-734",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-735",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-736",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-737",
      "GST Number": "09AAVFN4018J1ZR",
      "Billing Address": "C32, C Block, Pocket C, Sector 18, Noida, Uttar Pradesh 201301, India",
      "location": "C32, C Block, Pocket C, Sector 18, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-738",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-739",
      "GST Number": "09AHRPD6175D1Z5",
      "Billing Address": "574 krishna nagar opp Regent maruti showroom meerut road Ghaziabad",
      "location": "MCQM+VV6, Krishna Nagar, Harbans Nagar, Ghukna, Ghaziabad, Uttar Pradesh 201003, India",
      "Billing City": "Ghaziabad",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201003"
  },
  {
      "Customer Number": "CUS-740",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-741",
      "GST Number": "09AAFCP1003Q1ZA",
      "Billing Address": "Plot No-228,Udhyog Kendra Ext.-1,Ecotech-3 Greater Noida",
      "location": "Khera Choganpur, Greater Noida, Uttar Pradesh, 201318",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201318"
  },
  {
      "Customer Number": "CUS-742",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-743",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-744",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-745",
      "GST Number": "",
      "Billing Address": "4, SS Rana Rd, Kewal Park, Azadpur, Delhi, 110009, India",
      "location": "4, SS Rana Rd, Kewal Park, Azadpur, Delhi, 110009, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-00219",
      "GST Number": "",
      "Billing Address": "Gaur City Noida patwari Sector 2 CRN hospital",
      "location": "E-121-122, E Block, Sector 15, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-747",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-748",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-749",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-750",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-751",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-752",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-753",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-754",
      "GST Number": "09AAFCF1597H1ZC",
      "Billing Address": "Sector 63, Noida, Uttar Pradesh, 201301",
      "location": "Sector 63, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-755",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-756",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-757",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-758",
      "GST Number": "",
      "Billing Address": "khoda colony ghaziabad",
      "location": "300, Karan Vihar, Shiv Park, Khora Colony, Sector 62A, Noida, Uttar Pradesh 201020, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201020"
  },
  {
      "Customer Number": "CUS-759",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-760",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-761",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-762",
      "GST Number": "",
      "Billing Address": "23 Godavari Complex Sector 37",
      "location": "RWA Marg, Sector 37, Noida, Uttar Pradesh, 201303",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-763",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-764",
      "GST Number": "09adppn7048d1z7",
      "Billing Address": "wa-48 sector 135 noida up",
      "location": "WA 49, Wazidpur, Sector 135, Noida, Bajidpur, Uttar Pradesh 201304, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-765",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-766",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-767",
      "GST Number": "",
      "Billing Address": "G 38, noida  sector 18",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-768",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-769",
      "GST Number": "",
      "Billing Address": "GT -65 Block -C Sec -70",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201305"
  },
  {
      "Customer Number": "CUS-770",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-771",
      "GST Number": "07ABEFM0102A1Z9",
      "Billing Address": "Shop Number 4 Vijay Nagar single Storey Market,New Delhi ",
      "location": "Vijay Nagar, New Delhi, Delhi, 110009",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110009"
  },
  {
      "Customer Number": "CUS-772",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-773",
      "GST Number": "",
      "Billing Address": "Shop no. 1 opposite Sundarfarm,  Sector  74",
      "location": "E111, Block E, Sector 15, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-774",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-775",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-776",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-777",
      "GST Number": "07AAKCR3244E1ZH",
      "Billing Address": "C-2 PHASE 3 BADLI INDUSTRIAL AREA NEAR NDPL OFFICE",
      "location": "A12, Mount abu international school, Phase 2, Samaypur, Delhi, 110042, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-778",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-779",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-780",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-781",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-782",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-783",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-784",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-785",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-786",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-787",
      "GST Number": "",
      "Billing Address": "A9, Block A, Sector 68, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201307, India",
      "location": "A9, Block A, Sector 68, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201307, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-788",
      "GST Number": "",
      "Billing Address": "B-40 Shiv Mandir road Nithari Village Noida Sector 31 Uttar pradesh",
      "location": "B-40 Shiv Mandir Road Opposite B, Nithari Village",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-789",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-790",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-791",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-792",
      "GST Number": "",
      "Billing Address": "Sec 34 noida mother dairy market",
      "location": "4, Dharampal Satyapal Road, Sector 68, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201307"
  },
  {
      "Customer Number": "CUS-793",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-794",
      "GST Number": "",
      "Billing Address": "Shop 3, Baba Market, Near Green View Apartment, Sector 82, Near Sector 93, Noida",
      "location": "Shop 3, Baba Market, Near Green View Apartment, Sector 82, Near Sector 93, Noida",
      "Billing City": "Sector 82",
      "Billing State": "Near Sector 93",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-795",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-796",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-797",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-798",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-799",
      "GST Number": "",
      "Billing Address": "Dadri Main Road, Sector 82, Noida, Uttar Pradesh, 201304",
      "location": "Dadri Main Road, Sector 82, Noida, Uttar Pradesh, 201304",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201304"
  },
  {
      "Customer Number": "CUS-800",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-801",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-802",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-803",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-804",
      "GST Number": "",
      "Billing Address": "Save\nShop No-B-10, Himalya Pride Apartment, Greater Noida W Rd, Techzone 4, Amrapali Dream Valley, Noida, Greater Noida, Uttar Pradesh",
      "location": "E111, Block E, Sector 15, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-805",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-806",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-807",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-808",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-809",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-810",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-811",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-812",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-813",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "7976354679",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-814",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-815",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-816",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-817",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-818",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-819",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-820",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-821",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-822",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-823",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-824",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-825",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-826",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-827",
      "GST Number": "",
      "Billing Address": "Shop no 9 nehru garden police chowki sector 57",
      "location": "95, Ghaziabad, Shital Vihar, Khora Colony, Ghaziabad, New Delhi, Noida, Uttar Pradesh 201309, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201309"
  },
  {
      "Customer Number": "CUS-828",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-829",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-830",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-831",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-832",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-833",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-834",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-835",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-836",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-837",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-838",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-839",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-840",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-841",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-842",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-843",
      "GST Number": "",
      "Billing Address": "11/28 West Patel Nagar",
      "location": "11/30, Block 11, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008, India",
      "Billing City": "Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110008"
  },
  {
      "Customer Number": "CUS-844",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-845",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-846",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201303"
  },
  {
      "Customer Number": "CUS-847",
      "GST Number": "",
      "Billing Address": "A Block RP 1 Rohillapur, Noida Sector 132 ",
      "location": "A Block RP 1 Rohillapur Noida Sector 132",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-848",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-849",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-850",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-851",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-852",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-853",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-854",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-855",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-856",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-857",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-858",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-859",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-860",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-861",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-862",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-863",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-864",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-865",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-866",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-867",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-868",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-869",
      "GST Number": "",
      "Billing Address": "Bamboo Bites, opposite h.no 685, sector 22B gurgaon.",
      "location": "Sector 22, Gurugram, Haryana 122022, India",
      "Billing City": "Gurugram",
      "Billing State": "Haryana",
      "Billing Code": "122022"
  },
  {
      "Customer Number": "CUS-870",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-871",
      "GST Number": "",
      "Billing Address": "Noida Sector 22 ",
      "location": "Stadium Marg, Sector 11, Noida, Uttar Pradesh, 201301",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-872",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-873",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-874",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-875",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-876",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-877",
      "GST Number": "06abcfb1752f1zw",
      "Billing Address": "Kiosk 2 , Fortis hospital , Manesar ,",
      "location": "Plot No. 2, Sector 5, Imt Manesar, Gurugram, Haryana 122052, India",
      "Billing City": "Gurugram",
      "Billing State": "Haryana",
      "Billing Code": "122052"
  },
  {
      "Customer Number": "CUS-878",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-879",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-880",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-881",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-882",
      "GST Number": "07ACBFA5957D1ZJ",
      "Billing Address": "1st Floor , 21/31L , Mall Road Civil Lines",
      "location": "Ring Road, Timarpur, New Delhi, Delhi, 110054",
      "Billing City": "New Delhi",
      "Billing State": "Delhi",
      "Billing Code": "110054"
  },
  {
      "Customer Number": "CUS-883",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-884",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-885",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-886",
      "GST Number": "09dxtps9328q1zw",
      "Billing Address": "D 158, Laegerstromia, Eta I, Greater Noida, Uttar Pradesh 201310, India",
      "location": "D 158, Laegerstromia, Eta I, Greater Noida, Uttar Pradesh 201310, India",
      "Billing City": "Greater Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201310"
  },
  {
      "Customer Number": "CUS-887",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-888",
      "GST Number": "",
      "Billing Address": "Anjali market D block",
      "location": "141, D Block, Block D, Sector 27, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-889",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-890",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-891",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-892",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-893",
      "GST Number": "",
      "Billing Address": "main gate salarpur,  Uday market,  opposite city  life mall, sector 110 noida",
      "location": "Main Gate No.1, Above Krishna Medical Store, Salarpur Khadar, Gauthambudh Nagar, Bhangel, Salarpur Khadar, Salarpur, Noida, Uttar Pradesh, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-894",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-895",
      "GST Number": "",
      "Billing Address": "LG 20 ALFA PLAZA \nALFA 1st",
      "location": "E111, Block E, Sector 15, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-896",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-897",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-898",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-899",
      "GST Number": "",
      "Billing Address": "Shop no 1354, sector 18 faridabad ",
      "location": "Tham House, 17/1099, Sector 17, Faridabad, Haryana 121002, India",
      "Billing City": "Faridabad",
      "Billing State": "Haryana",
      "Billing Code": "121002"
  },
  {
      "Customer Number": "CUS-900",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-901",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-902",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-903",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-904",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-905",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-906",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  },
  {
      "Customer Number": "CUS-907",
      "GST Number": "",
      "Billing Address": "H/9,sector-63,Noida,Above royal enfield showroom Electronic City metro station Gate no -2,gautam budh nagar",
      "location": "Jaypee Instutute of Information Technology, A-10, Block A, H Block, Sector 63, Noida, Uttar Pradesh 201301, India",
      "Billing City": "Noida",
      "Billing State": "Uttar Pradesh",
      "Billing Code": "201301"
  },
  {
      "Customer Number": "CUS-908",
      "GST Number": "",
      "Billing Address": "",
      "location": "",
      "Billing City": "",
      "Billing State": "",
      "Billing Code": ""
  }
];

start().catch(err => console.error(err));

async function start(params) {  
  let result = "";
  
  for (let customerData of data) {
    if (!customerData["GST Number"])
      continue;
    let gstData = await gst(customerData["GST Number"]);
    if (gstData) {
      let address = gstData?.principal_address;
      if (address) {
        result += customerData + ",\"" + address.address + "\"\n";
      }
    }
  }

  console.log(result);
}
