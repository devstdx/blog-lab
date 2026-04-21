"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ClickOutside() {
  const router = useRouter();

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Solo manejamos clics con el botón izquierdo
      if (e.button !== 0) return;

      const target = e.target as HTMLElement;

      // Verificamos si el clic ocurrió fuera del contenido principal del post.
      // Específicamente, si NO estamos dentro de:
      // 1. El article (que contiene el post y su cabecera)
      // 2. El header global del sitio
      // 3. El footer global del sitio
      const isInsidePost = target.closest('article');
      const isInsideHeader = target.closest('header');
      const isInsideFooter = target.closest('footer');

      // Si el clic es fuera de todas estas zonas "activas", redirigimos
      if (!isInsidePost && !isInsideHeader && !isInsideFooter) {
        router.push("/");
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, [router]);

  return null;
}
