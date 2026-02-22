# OIKN WebGIS Training - MAPID

Repository ini merupakan tugas pelatihan WebGIS yang diselenggarakan oleh MapID untuk Otorita Ibu Kota Nusantara (OIKN). Project ini membangun infrastruktur WebGIS lengkap menggunakan Docker, yang terdiri dari database spasial PostGIS, server peta GeoServer, dan frontend peta interaktif berbasis MapLibre.

## Teknologi yang Digunakan

- **PostGIS** — Ekstensi spasial PostgreSQL untuk menyimpan dan mengolah data geospasial
- **GeoServer** — Server open source untuk berbagi data geospasial melalui standar OGC (WMS, WFS, WMTS)
- **MapLibre GL JS** — Library JavaScript untuk menampilkan peta interaktif di browser
- **Vite** — Build tool untuk pengembangan frontend
- **QGIS** — Digunakan untuk persiapan dan styling data geospasial
- **Docker Compose** — Orkestrasi container untuk menjalankan seluruh stack

## Struktur Repository

```
├── frontend/          # Aplikasi web MapLibre + Vite
│   ├── src/
│   │   ├── main.js    # Entry point aplikasi
│   │   ├── map/       # Konfigurasi peta
│   │   ├── controls/  # Kontrol navigasi peta
│   │   ├── markers/   # Marker lokasi (Jakarta, Nusantara, dll.)
│   │   ├── handlers/  # Event handler peta
│   │   └── events/    # Map events
│   └── index.html
├── data/              # Data dan konfigurasi GeoServer
│   ├── workspaces/    # Workspace GeoServer (ne, tata_ruang, dll.)
│   ├── styles/        # File SLD untuk styling layer
│   ├── qgis/          # Project QGIS dan data sumber (shapefile, GeoJSON, GeoPackage)
│   └── ...
├── data_postgis/      # Volume data PostGIS
├── docker-compose.yml # Konfigurasi Docker untuk PostGIS & GeoServer
├── LICENSE            # MIT License
└── README.md
```

## Prasyarat

- [Docker](https://docs.docker.com/get-docker/) dan Docker Compose
- [Node.js](https://nodejs.org/) (untuk pengembangan frontend)

## Cara Menjalankan

### 1. Jalankan PostGIS dan GeoServer

```bash
docker compose up -d
```

Layanan yang akan berjalan:

| Layanan    | URL / Port                    | Keterangan                         |
| ---------- | ----------------------------- | ---------------------------------- |
| PostGIS    | `localhost:5433`              | Database PostgreSQL + ekstensi PostGIS |
| GeoServer  | http://localhost:8080/geoserver | Panel admin GeoServer              |

Kredensial default PostGIS:
- Database: `geodata`
- User: `admin`
- Password: `password123`

### 2. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:5173` (default Vite).

## Data Geospasial

Project ini menggunakan beberapa dataset, antara lain:

- **Natural Earth** — Data batas negara, garis pantai, dan kota-kota di dunia
- **Tata Ruang** — Data RDTR WPKIPP (Rencana Detail Tata Ruang Wilayah Perencanaan Kawasan IKN Penajam Paser)
- **QGIS Project** — File project QGIS (`KIPP IKN.qgz`) beserta data sumber dalam format Shapefile, GeoJSON, dan GeoPackage

## Lisensi

[MIT License](LICENSE) — Ahmad Zaenun Faiz
