import { z } from "zod";

// Definir el esquema con zod para las imágenes
const imageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
});

// Servicio para consumir las imágenes desde Google Sheets
const imageApi = {
  list: async () => {
    try {
      const document = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUlKHATIelLoZ0znWCHDkXXKi4Lbiuo_vN2RzuBV0Uv6IVf8NlSNif5jeesgIr3kU2LvNb8op3vTjP/pub?output=tsv"
      ).then((res) => res.text());

      const rows = document
        .split("\n")
        .slice(1) // Ignorar encabezado
        .map((row) => row.trim().split("\t"));

      const images = rows.map(([src, alt]) =>
        imageSchema.parse({ src, alt })
      );

      return images;    
    } catch (error) {
      console.error("Error al obtener imágenes:", error);
      throw new Error("No se pudieron obtener las imágenes");
    }
  },
};

export default imageApi;
