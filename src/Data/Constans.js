import {Colors, Images} from '../Themes';

export const BASE_URL = 'https://api.sampleapis.com';

export const API_STATUS = 'dev';
export const API_STATUS2 = 'staging';
export const Api_status3 = 'prod';

export const DATA_RUMAH_SAKIT = [
  {
    namaRumahSakit: 'rumah sakit coba',
    daerah: 'Jakarta',
    lat: -6.0174783,
    long: 106.049864,
    jarak: 0,
  },
  {
    namaRumahSakit: 'rumah sakit bintaro',
    daerah: 'Jakarta',
    lat: -6.2765517,
    long: 106.7229619,
    jarak: 0,
  },
];

export const MENU_ACTIONS = [
  {
    name: 'Machiato',
    images: Images.coffe1,
  },
  {
    name: 'Americano',
    images: Images.coffe2,
  },
  {
    name: 'Hot',
    images: Images.coffe3,
  },
  {
    name: 'Camomile',
    images: Images.coffe1,
  },
];

export const LIST_WINE = [
  {
    id: 1,
    name: 'Reds Wine',
    icons: 'wine-sharp',
    actionName: 'reds',
  },
  {
    id: 2,
    name: 'Whites',
    icons: 'ios-color-filter',
    actionName: 'whites',
  },
  {
    id: 3,
    name: 'Sparkling',
    icons: 'partly-sunny-outline',
    actionName: 'sparkling',
  },
  {
    id: 4,
    name: 'Rose',
    icons: 'md-rose-outline',
    actionName: 'rose',
  },
  {
    id: 5,
    name: 'Dessert',
    icons: 'fast-food-sharp',
    actionName: 'dessert',
  },
  {
    id: 6,
    name: 'Reds Wine',
    icons: 'wine-sharp',
    actionName: 'reds',
  },
  {
    id: 7,
    name: 'Whites',
    icons: 'ios-color-filter',
    actionName: 'whites',
  },
  {
    id: 8,
    name: 'Sparkling',
    icons: 'partly-sunny-outline',
    actionName: 'sparkling',
  },
  {
    id: 9,
    name: 'Rose',
    icons: 'md-rose-outline',
    actionName: 'rose',
  },
  {
    id: 10,
    name: 'Dessert',
    icons: 'fast-food-sharp',
    actionName: 'dessert',
  },
];

export const LANG = {
  eng: {
    opening: 'Find the best',
    secondOpening: 'coffee for you',
    searchDesc: 'search your coffee',
    next: 'Next',
    deskripsiPruduk: 'Description',
    size: 'Size',
    price: 'Price',
    order: 'Orders',
    payment: 'Payment',
    favorit: 'Your Favorit',
    logout: 'Logout',
    settingsDm: 'Settings Dark Mode',
    language: 'Language',
    wallet: 'Wallet',
  },
  idn: {
    opening: 'Temukan yang terbaik',
    secondOpening: 'kopi untukmu',
    searchDesc: 'cari kopi mu',
    next: 'Lanjut',
    deskripsiPruduk: 'Deskripsi',
    size: 'Ukuran',
    price: 'Harga',
    order: 'Pesananan',
    payment: 'Pembayaran',
    favorit: 'Favorit Anda',
    logout: 'Keluar',
    settingsDm: 'Pengaturan Mode Gelap',
    language: 'Bahasa',
    wallet: 'Dompet',
  },
};

export const DYNAMIC_THEME = {
  dark: {
    backgroundColor: '#1B1A17',
    cardColor: Colors.blue,
    textColor: '#fff',
  },
  light: {
    backgroundColor: '#fff',
    cardColor: Colors.red,
    textColor: '#444444',
  },
};
