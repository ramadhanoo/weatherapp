import {Colors} from '../Themes';
export const API_VERSION = '2.5';
export const BASE_URL = `https://api.openweathermap.org/data/${API_VERSION}`;
export const API_STATUS = 'dev';
export const API_STATUS2 = 'staging';
export const Api_status3 = 'prod';
export const ZONE = 'London,uk';

export const API_KEY = '06d529056e6a8272293c9dddeb9e57f2';

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
