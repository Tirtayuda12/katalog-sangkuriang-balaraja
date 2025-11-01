"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";


export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <main className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
        Sangkuriang Katalog
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-green-200 bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mt-3 text-green-800">
              {item.name}
            </h2>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            <p className="text-sm text-gray-500 mt-1 italic">
              Kategori: {item.category}
            </p>
            <p className="text-green-700 font-bold mt-2">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
