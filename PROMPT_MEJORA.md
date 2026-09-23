# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `store/interfaces.json` — El topic pide gestion de estado: este archivo es el ejercicio.
- `store/blocks/home.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.
- `store/blocks/product.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.
- `store/blocks/minicart.jsonc` — El topic pide gestion de estado: este archivo es el ejercicio.

## Como saber que terminaste

```bash
npm install && npx tsc --noEmit
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad eCommerce, Tecnología Vtex, Advanced

### Brecha de conocimiento
Aplica conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones y alineadas con la UX definida en el proyecto.

### Misión / candidato
Candidato con experiencia avanzada en eCommerce, trabajando en mejora de experiencia de usuario mediante animaciones y transiciones web.

### Reto
- Tema: VTEX IO microinteracciones 1790190526597
- Seniority: advanced-l2
- Tipo: practical
- Título: Mejora de Experiencia de Usuario en eCommerce mediante Animaciones y Transiciones
- Tiempo estimado: 15 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Análisis de Requerimientos y Diseño de Animaciones — objetivo: Identificar las interacciones clave en el flujo de compra y diseñar animaciones y transiciones que mejoren la experiencia de usuario. — entregable (NO resolver): Documento de diseño que describe las animaciones y transiciones propuestas para las interacciones clave en el flujo de compra.
- Fase 2: Implementación de Animaciones y Transiciones — objetivo: Implementar las animaciones y transiciones diseñadas en la fase anterior en la plataforma VTEX. — entregable (NO resolver): Plataforma VTEX con las animaciones y transiciones implementadas y funcionando correctamente.
- Fase 3: Evaluación y Optimización — objetivo: Evaluar el impacto de las animaciones y transiciones en la experiencia de usuario y realizar optimizaciones necesarias. — entregable (NO resolver): Documento que describe las optimizaciones realizadas, los resultados obtenidos y las métricas de impacto en la experiencia de usuario.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "react-jsx",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./",
    "baseUrl": "./",
    "paths": {
      "@/*": ["react/*"],
      "styles/*": ["styles/*"]
    },
    "lib": ["dom", "dom.iterable", "esnext"],
    "types": ["node", "vtex.types"],
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": [
    "react/**/*",
    "store/**/*",
    "styles/**/*",
    "manifest.json"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
    "**/*.test.tsx"
  ],
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

// === ARCHIVO: manifest.json ===
{
  "vendor": "vtex",
  "name": "store-ui-animations",
  "version": "1.0.0",
  "builders": {
    "react": "3.x",
    "store": "4.x",
    "styles": "2.x"
  },
  "dependencies": {
    "vtex.store": "2.x",
    "vtex.store-ui": "3.x",
    "vtex.styleguide": "9.x",
    "vtex.css-handles": "0.x",
    "vtex.product-summary": "2.x",
    "vtex.product-details": "2.x",
    "vtex.minicart": "2.x"
  },
  "peerDependencies": {
    "react": "18.x",
    "react-dom": "18.x"
  },
  "settings": {
    "title": "Store UI with Animations",
    "description": "Custom store components with animations and transitions for improved UX",
    "group": "store",
    "icons": [
      {
        "name": "default",
        "path": "assets/icons/default.svg"
      }
    ],
    "theme": {
      "default": "vtex.theme"
    }
  },
  "scripts": {
    "lint": "vtex lint",
    "lint:fix": "vtex lint --fix",
    "prettier": "vtex prettier --write",
    "test": "vtex test"
  },
  "policies": [
    {
      "name": "outbound-access",
      "attrs": {
        "host": "api.vtex.com",
        "path": "/**"
      }
    }
  ],
  "billingOptions": {
    "type": "free"
  },
  "registries": [
    "vtex.assets-builder@0.x"
  ],
  "memory": {
    "default": "256Mi",
    "max": "512Mi"
  },
  "workspaces": [
    "react",
    "store",
    "styles"
  ]
}

// === ARCHIVO: store/interfaces.json ===
{
  "home": {
    "props": {
      "title": "string",
      "products": "array"
    }
  },
  "product": {
    "props": {
      "name": "string",
      "price": "number",
      "addToCart": "function"
    }
  }
}

// === ARCHIVO: store/blocks/home.jsonc ===
{
  "$schema": "http://json.schemastore.org/jsonc",
  "blocks": [
    {
      "id": "hero",
      "type": "hero-banner",
      "props": {
        "title": "Welcome to our store!"
      }
    },
    {
      "id": "featured-products",
      "type": "product-list",
      "props": {
        "products": []
      }
    }
  ]
}

// === ARCHIVO: store/blocks/product.jsonc ===
{
  "$schema": "http://json.schemastore.org/jsonc",
  "blocks": [
    {
      "id": "product-details",
      "type": "product-details",
      "props": {
        "name": "Product Name",
        "price": 100,
        "addToCart": {
          "type": "function"
        }
      }
    },
    {
      "id": "add-to-cart-button",
      "type": "add-to-cart-button",
      "props": {
        "onClick": {
          "type": "function"
        }
      }
    }
  ]
}

// === ARCHIVO: store/blocks/minicart.jsonc ===
{
  // SUPERFICIE DE PRÁCTICA: Composición del bloque del minicart con transiciones fluidas al añadir/eliminar productos.
  // Los estudiantes deben implementar las animaciones y transiciones según las especificaciones del diseño.
  "components": [
    {
      "type": "minicart",
      "props": {
        "animation": "slide-in",
        "transition": "fade-out"
      }
    }
  ]
}

// === ARCHIVO: react/components/ProductCard.tsx ===
import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Product } from 'vtex.store-ui';
import { addToCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['product-card', 'product-image', 'product-name', 'product-price'];

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useVTEX();
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    handleAnimation('hover');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    handleAnimation('leave');
  };

  return (
    <div
      className={`${cssHandles(CSS_HANDLES).productCard} ${styles.productCard}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className={cssHandles(CSS_HANDLES).productImage}
        src={product.imageUrl}
        alt={product.name}
      />
      <div className={cssHandles(CSS_HANDLES).productName}>{product.name}</div>
      <div className={cssHandles(CSS_HANDLES).productPrice}>{product.price}</div>
      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCard;

// === ARCHIVO: react/components/AddToCartButton.tsx ===
import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Product } from 'vtex.store-ui';
import { addToCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['add-to-cart-button', 'add-to-cart-success', 'add-to-cart-error'];

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { t } = useVTEX();
  const [isAdded, setIsAdded] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  const handleClick = () => {
    addToCart(product)
     .then(() => {
        setIsAdded(true);
        handleAnimation('success');
      })
     .catch(() => {
        setHasError(true);
        handleAnimation('error');
      });
  };

  return (
    <button
      className={`${cssHandles(CSS_HANDLES).addToCartButton} ${isAdded? cssHandles(CSS_HANDLES).addToCartSuccess : ''} ${hasError? cssHandles(CSS_HANDLES).addToCartError : ''} ${styles.addToCartButton}`}
      onClick={handleClick}
    >
      {isAdded? t('productAdded') : t('addToCart')}
    </button>
  );
};

export default AddToCartButton;

// === ARCHIVO: react/components/MiniCart.tsx ===
import React from 'react';
import { useVTEX } from 'vtex.styleguide';
import { cssHandles } from '@vtex/css-handles';
import { Cart } from 'vtex.store-ui';
import { removeFromCart } from 'react/hooks/useCartAnimation';
import { handleAnimation } from 'react/utils/animationUtils';
import styles from 'styles/global/animations.css';

const CSS_HANDLES = ['mini-cart', 'mini-cart-item', 'mini-cart-total'];

interface MiniCartProps {
  cart: Cart;
}

const MiniCart: React.FC<MiniCartProps> = ({ cart }) => {
  const { t } = useVTEX();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    handleAnimation('toggle');
  };

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    handleAnimation('remove');
  };

  return (
    <div
      className={`${cssHandles(CSS_HANDLES).miniCart} ${isOpen? cssHandles(CSS_HANDLES).miniCartOpen : ''} ${styles.miniCart}`}
    >
      <button onClick={handleToggle}>{t('viewCart')}</button>
      {isOpen && (
        <div className={cssHandles(CSS_HANDLES).miniCartItem}>
          {cart.items.map(item => (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.quantity} x {item.price}</div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          ))}
          <div className={cssHandles(CSS_HANDLES).miniCartTotal}>{t('total')}: {cart.total}</div>
        </div>
      )}
    </div>
  );
};

export default MiniCart;

// === ARCHIVO: react/hooks/useCartAnimation.ts ===
import { useState, useEffect } from 'react';
import { useVTEX } from 'vtex.render-runtime';
import { animate } from 'react/utils/animationUtils';

type CartItem = {
  id: string;
  quantity: number;
};

const useCartAnimation = () => {
  const { cart } = useVTEX();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [animationState, setAnimationState] = useState<'idle' | 'adding' | 'removing' | 'updating'>('idle');

  useEffect(() => {
    setCartItems(cart.items);
  }, [cart.items]);

  const addItemToCart = (item: CartItem) => {
    setAnimationState('adding');
    animate('cart-add', item);
    setTimeout(() => {
      setCartItems((prevItems) => [
       ...prevItems,
        { id: item.id, quantity: item.quantity },
      ]);
      setAnimationState('idle');
    }, 1000);
  };

  const removeItemFromCart = (itemId: string) => {
    setAnimationState('removing');
    animate('cart-remove', cartItems.find((item) => item.id === itemId));
    setTimeout(() => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id!== itemId));
      setAnimationState('idle');
    }, 1000);
  };

  const updateItemQuantity = (itemId: string, quantity: number) => {
    setAnimationState('updating');
    animate('cart-update', cartItems.find((item) => item.id === itemId));
    setTimeout(() => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId? {...item, quantity } : item
        )
      );
      setAnimationState('idle');
    }, 1000);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    animationState,
  };
};

export default useCartAnimation;

// === ARCHIVO: react/utils/animationUtils.ts ===
import { Easing } from '@vtex/css-handles';

type AnimationOptions = {
  duration?: number;
  easing?: string;
};

const defaultAnimationOptions: AnimationOptions = {
  duration: 500,
  easing: Easing.easeInOutCubic,
};

const animate = (type: string, target: HTMLElement | null, options: AnimationOptions = defaultAnimationOptions) => {
  if (!target) return;

  const { duration = 500, easing = Easing.easeInOutCubic } = options;

  target.style.transition = `transform ${duration}ms ${easing}, opacity ${duration}ms ${easing}`;

  switch (type) {
    case 'cart-add':
      target.style.transform = 'scale(1.1)';
      target.style.opacity = '0.8';
      setTimeout(() => {
        target.style.transform = 'scale(1)';
        target.style.opacity = '1';
      }, duration);
      break;
    case 'cart-remove':
      target.style.transform = 'scale(0.9)';
      target.style.opacity = '0.5';
      setTimeout(() => {
        target.style.display = 'none';
      }, duration);
      break;
    case 'cart-update':
      target.style.transform = 'rotate(360deg)';
      setTimeout(() => {
        target.style.transform = 'rotate(0deg)';
      }, duration);
      break;
    default:
      break;
  }
};

export { animate, defaultAnimationOptions, AnimationOptions };

// === ARCHIVO: styles/configs/animation.tokens.json ===
{
  "fadeIn": {
    "duration": "0.3s",
    "delay": "0s",
    "easing": "ease-out"
  },
  "slideIn": {
    "duration": "0.5s",
    "delay": "0.2s",
    "easing": "ease-in-out"
  },
  "scaleUp": {
    "duration": "0.4s",
    "delay": "0s",
    "easing": "ease-in"
  }
}

// === ARCHIVO: styles/global/animations.css ===
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@keyframes scaleUp {
  from { transform: scale(0.9); }
  to { transform: scale(1); }
}

.fadeIn {
  animation: fadeIn 0.3s ease-out;
}

.slideIn {
  animation: slideIn 0.5s ease-in-out 0.2s;
}

.scaleUp {
  animation: scaleUp 0.4s ease-in;
}

// === ARCHIVO: README.md ===
# Proyecto de Mejora de Experiencia de Usuario en eCommerce mediante Animaciones y Transiciones

## Descripción
Este proyecto tiene como objetivo mejorar la experiencia de usuario en una plataforma de eCommerce utilizando animaciones y transiciones. El enfoque está en aplicar conscientemente conceptos de animaciones y transiciones orientadas a microinteracciones, alineadas con la UX definida en el proyecto.

## Instrucciones de Setup
1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-repositorio/proyecto.git
   cd proyecto
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto:
   ```bash
   npm run start
   ```

## Estructura de Archivos
- `styles/configs/animation.tokens.json`: Tokens de diseño para animaciones.
- `styles/global/animations.css`: Definición de keyframes y clases CSS reutilizables para animaciones.
- `react/components/ProductCard.tsx`: Componente de tarjeta de producto.
- `react/components/AddToCartButton.tsx`: Componente de botón para añadir al carrito.
- `react/components/MiniCart.tsx`: Componente de mini carrito.
- `react/hooks/useCartAnimation.ts`: Hook para manejar animaciones del carrito.
- `react/utils/animationUtils.ts`: Utilidades para animaciones.

## Guía de Implementación
1. Define tus tokens de animación en `styles/configs/animation.tokens.json`.
2. Crea tus keyframes y clases CSS en `styles/global/animations.css`.
3. Utiliza los tokens y clases CSS en tus componentes React.
4. Implementa las animaciones en tus componentes utilizando los hooks y utilidades proporcionados.

## Notas
- Asegúrate de seguir las convenciones de nomenclatura y estructura de archivos.
- Utiliza VTEX Signals para el manejo de estado reactivo en tus componentes.
- Sigue el patrón contenedor/presentacional para separar la lógica de negocio de la presentación.
- Utiliza tokens de diseño centralizados para asegurar la consistencia en tus animaciones.
- Sigue la convención BEM para los nombres de tus clases CSS.
```
