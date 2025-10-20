import { useState, useEffect } from "react";

/**
 * Hook para diferir la carga de componentes no críticos
 * Mejora el LCP cargando solo lo esencial primero
 */
export const useDeferredComponent = (delay = 1000) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return shouldRender;
};

/**
 * Hook para detectar si el componente está en viewport
 * Útil para lazy loading de secciones
 */
export const useIntersectionObserver = (threshold = 0.1) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
};
