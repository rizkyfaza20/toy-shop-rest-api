import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Toys
  await prisma.toy.createMany({
    data: [
      { name: 'Boneka Beruang', description: 'Boneka beruang yang lembut dan lucu.', price: 199000, stock: 100 },
      { name: 'Mobil Remote', description: 'Mobil remote control berkecepatan tinggi.', price: 499000, stock: 50 },
      { name: 'Set Lego', description: 'Kreatif dengan balok-balok Lego.', price: 599000, stock: 30 },
      { name: 'Rumah Boneka', description: 'Rumah boneka kayu untuk anak-anak.', price: 899000, stock: 20 },
      { name: 'Puzzle 1000 Pieces', description: 'Puzzle seru dengan 1000 keping.', price: 159000, stock: 75 },
      { name: 'Action Figure', description: 'Action figure pahlawan super.', price: 249000, stock: 40 },
      { name: 'Gasing', description: 'Gasing tradisional kayu.', price: 59000, stock: 200 },
      { name: 'Kereta Mainan', description: 'Set kereta api elektrik.', price: 799000, stock: 15 },
      { name: 'Kubus Rubik', description: 'Kubus Rubik 3x3 kecepatan.', price: 99000, stock: 100 },
      { name: 'Lompat Tali', description: 'Tali lompat warna-warni.', price: 79000, stock: 120 },
    ],
  });

  // Seed Customers
  await prisma.customer.createMany({
    data: [
      { name: 'Andi Saputra', address: 'Jl. Melati No. 12, Jakarta', number: '0812-1234-5678', email: 'andi.saputra@example.com' },
      { name: 'Budi Santoso', address: 'Jl. Kenanga No. 45, Bandung', number: '0813-5678-1234', email: 'budi.santoso@example.com' },
      { name: 'Citra Dewi', address: 'Jl. Mawar No. 7, Surabaya', number: '0814-7890-4567', email: 'citra.dewi@example.com' },
      { name: 'Dewi Lestari', address: 'Jl. Dahlia No. 22, Yogyakarta', number: '0815-9876-5432', email: 'dewi.lestari@example.com' },
      { name: 'Eka Putra', address: 'Jl. Anggrek No. 5, Semarang', number: '0816-6789-1234', email: 'eka.putra@example.com' },
      { name: 'Fajar Pratama', address: 'Jl. Kamboja No. 10, Medan', number: '0817-2345-6789', email: 'fajar.pratama@example.com' },
      { name: 'Gita Ayu', address: 'Jl. Flamboyan No. 18, Denpasar', number: '0818-4321-9876', email: 'gita.ayu@example.com' },
      { name: 'Hadi Wibowo', address: 'Jl. Teratai No. 3, Makassar', number: '0819-5678-9012', email: 'hadi.wibowo@example.com' },
      { name: 'Indah Permata', address: 'Jl. Sawo No. 30, Balikpapan', number: '0821-1234-8765', email: 'indah.permata@example.com' },
      { name: 'Joko Susilo', address: 'Jl. Mangga No. 77, Malang', number: '0822-9876-1234', email: 'joko.susilo@example.com' },
    ],
  });

  // Seed Orders
  await prisma.orders.createMany({
    data: [
      { order_id: 'ORD001', customer_id: 1, order_date: new Date('2025-04-01'), total_order: 299000 },
      { order_id: 'ORD002', customer_id: 2, order_date: new Date('2025-04-02'), total_order: 499000 },
      { order_id: 'ORD003', customer_id: 3, order_date: new Date('2025-04-03'), total_order: 159000 },
      { order_id: 'ORD004', customer_id: 4, order_date: new Date('2025-04-04'), total_order: 899000 },
      { order_id: 'ORD005', customer_id: 5, order_date: new Date('2025-04-05'), total_order: 799000 },
      { order_id: 'ORD006', customer_id: 6, order_date: new Date('2025-04-06'), total_order: 249000 },
      { order_id: 'ORD007', customer_id: 7, order_date: new Date('2025-04-07'), total_order: 199000 },
      { order_id: 'ORD008', customer_id: 8, order_date: new Date('2025-04-08'), total_order: 459000 },
      { order_id: 'ORD009', customer_id: 9, order_date: new Date('2025-04-09'), total_order: 99000 },
      { order_id: 'ORD010', customer_id: 10, order_date: new Date('2025-04-10'), total_order: 579000 },
    ],
  });
}

main()
  .then(() => {
    console.log('Sample data inserted successfully.');
  })
  .catch((e) => {
    console.error('Error inserting sample data:', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
