# Aplicación de Chat con React, Socket.IO y TypeScript

Este proyecto es una aplicación de chat interactiva desarrollada con React, TypeScript, y Socket.IO. Proporciona un chat en tiempo real entre usuarios y un bot, con un diseño oscuro/claro, soporte multilingüe y una integración completa con un backend construido en Node.js y Express.

---

## **Características**

- **Chat en tiempo real**: Comunicación instantánea usando Socket.IO.
- **Gestión de mensajes**:
  - Crear nuevos mensajes.
  - Eliminar todos los mensajes.
  - Visualización de mensajes previos almacenados en la base de datos.
- **Temas oscuros y claros**: Cambia entre modos oscuros y claros con un interruptor.
- **Soporte multilingüe**: Cambia entre español e inglés con un botón.
- **Backend conectado**: Backend desarrollado con Node.js, Express y Prisma.

---

## **Tecnologías usadas**

### **Frontend:**
- React
- TypeScript
- Tailwind CSS
- i18next (para la traducción)
- Socket.IO Client

### **Backend:**
- Node.js
- Express
- Prisma (ORM para manejar la base de datos)
- Socket.IO Server
- Swagger (Documentación de API)

### **Base de datos:**
- PostgreSQL (configurable para otras bases de datos compatibles con Prisma)

---

## **Instalación y configuración**

### **Requisitos previos:**
1. Node.js instalado (v16 o superior).
2. PostgreSQL u otra base de datos configurada.
3. Tener `pnpm`, `npm` o `yarn` instalado.

### **Pasos para levantar el proyecto:**

#### **1. Clona el repositorio:**
```bash
 git clone <URL_DEL_REPOSITORIO>
```

#### **2. Configura las variables de entorno:**
Crea un archivo `.env` en la raíz del proyecto tanto para el backend como para el frontend. Asegúrate de incluir:

**Backend (.env):**
```
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_bd
PORT=3000
VITE_BACKEND_URL=http://localhost:3000
```

**Frontend (.env):**
```
VITE_BACKEND_URL=http://localhost:3000
```

#### **3. Instala las dependencias:**

Para el backend:
```bash
cd backend
pnpm install
```

Para el frontend:
```bash
cd frontend
pnpm install
```

#### **4. Configura la base de datos con Prisma:**
Ejecuta las migraciones para crear las tablas necesarias en la base de datos:
```bash
cd backend
pnpm prisma migrate dev
```

#### **5. Levanta el servidor backend:**
```bash
pnpm dev
```

#### **6. Levanta el cliente frontend:**
En otra terminal:
```bash
cd frontend
pnpm dev
```

El frontend estará disponible en `http://localhost:5173` y el backend en `http://localhost:3000`.

---

## **Estructura del proyecto**

### **Frontend:**
- **`src/components`**: Contiene componentes reutilizables como `Chat`, `ToggleTheme`, y `Language`.
- **`src/api`**: Funciones para interactuar con la API del backend (obtener, crear y eliminar mensajes).
- **`src/config`**: Configuración de Socket.IO e internacionalización.
- **`src/i18n.ts`**: Configuración de i18next para soporte multilingüe.

### **Backend:**
- **`/routes`**: Rutas API (por ejemplo, `/api/messages`).
- **`/config`**: Configuraciones de Express, Swagger, y Socket.IO.
- **`/prisma`**: Archivos de esquema para la base de datos.
- **`/docs`**: Documentación Swagger.

---

## **Uso de la aplicación**

1. Escribe un mensaje en el campo de entrada y envíalo con el botón de enviar (✈️).
2. Observa los mensajes en tiempo real gracias a Socket.IO.
3. Cambia entre los modos claro y oscuro usando el botón de tema.
4. Cambia entre español e inglés usando los botones de idioma.
5. Elimina todos los mensajes presionando el botón 🗑️ (confirmación requerida).

---

## **Próximos pasos**
- Implementar autenticación de usuarios.
- Mejorar el diseño visual.
- Agregar soporte para emojis y adjuntos.
- Implementar roles para usuarios y administradores.

---

¡Gracias por probar esta aplicación! Si tienes preguntas o sugerencias, no dudes en abrir un issue en el repositorio.

