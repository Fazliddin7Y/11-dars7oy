import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// Kategoriyalarni API'dan olish
const fetchCategories = async () => {
  // Fake Store API uchun token olish zarur emas, chunki u autentifikatsiyani talab qilmaydi
  try {
    // API'dan kategoriyalarni olish
    const { data } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    return data; // Ma'lumotlarni qaytarish
  } catch (error) {
    // API so‘rovi xatolik keltirsa, xatolikni qaytarish
    throw new Error("Kategoriyalarni olishda xatolik yuz berdi: " + error.message);
  }
};

// Kategoriyalarni query bilan olish uchun custom hook
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"], // Query key
    queryFn: fetchCategories, // Fetching function
    onError: (error) => {
      console.error("Kategoriyalarni olishda xatolik:", error);
    },
  });
};
