# Aplicación de Chat con React, Socket.IO y TypeScript

Este proyecto es una aplicación de chat interactiva desarrollada con React, TypeScript, y Socket.IO. Proporciona un chat entre usuarios y un bot, con integración con backend construido en Node.js y Express.

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
- Prisma (ORM para manejar la base de datos de mysql)
- Socket.IO Server
- Swagger (Documentación de API)

---

## **Instalación y configuración** 

### **Requisitos previos:**
1. Node.js instalado (v16 o superior).
2. mysql u otra base de datos configurada.
3. Tener `pnpm`, `npm` o `yarn` instalado.

### **Pasos para levantar backend:**

#### **1. Ingrese con la consola al backend e instale las dependencias:**
Desde la raíz del proyecto:
```bash
 cd back
 npm install
```

#### **2. Copie el archivo .env.example y renómbrelo a .env:**
Ajuste los valores según su configuración de base de datos y puerto.
```bash
 cp .env.example .env
```

#### **3. Configure la base de datos con Prisma y levante la aplicación:**
Ejecute las migraciones para crear las tablas necesarias en la base de datos.
```bash
npx prisma migrate dev
npm run dev
```

### **Pasos para levantar frontend:**

#### **1. Ingrese con la consola al frontend e instale las dependencias:**
Desde la raíz del proyecto y en otra terminal.
```bash
 cd front
 npm install
```

#### **2. Copie el archivo .env.example y renómbrelo a .env:**
Ajuste el valor de la URL donde se expone el backend.
```bash
 cp .env.example .env
```

#### **4. Levante la aplicación:**
```bash
npm run dev
```

Con las dos terminales levantadas, podrá ver la página en la URL mostrada por Vite en la consola.

## **Estructura del proyecto**

### **Frontend:**
- **`src/components`**: Contiene componentes reutilizables como `Chat`, `ToggleTheme`, y `Language`.
- **`src/api`**: Funciones para interactuar con la API del backend (obtener, crear y eliminar mensajes).
- **`src/config`**: Configuración de Socket.IO e internacionalización.

### **Backend:**
- **`src/api`**: Rutas API (por ejemplo, `/api/messages`).
- **`src/config`**: Configuraciones de Express, Swagger, y Socket.IO.
- **`/prisma`**: Archivos de esquema para la base de datos.
- **`/docs`**: Documentación Swagger.

---

## **Uso de la aplicación**

1. Escribe un mensaje en el campo de entrada y envíalo con el botón de enviar (✈️).
2. Observa los mensajes en tiempo real gracias a Socket.IO.
![alt text](/assets/socket.gif)
3. Cambia entre los modos claro y oscuro usando el botón de tema.
4. Cambia entre español e inglés usando los botones de idioma.
![alt text](/assets/theme.gif)
5. Elimina todos los mensajes presionando el botón 🗑️ (confirmación requerida).
![alt text](/assets/delete.gif)


---

## **Para tener en cuenta**

1. Para probar los endpoints, se ha proporcionado un folder de REST Client en el directorio raíz del proyecto de backend. Deberá tener la extensión REST Client en Visual Studio Code. Si aún no la tiene instalada, puede encontrarla [aquí](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)..

2. El frontend en producción se expone en la URL: 
```bash
https://pocket-indol.vercel.app/
```
3. La documentación del backend con Swagger se encuentra en **URL del backend** + **/docs**. Para produccion:

```bash
https://pocket-q81q.onrender.com/docs/
```
---

## **Próximos pasos**
- Implementar autenticación de usuarios.
- Mejorar el diseño visual.
- Agregar soporte para emojis y adjuntos.
- Implementar roles para usuarios y administradores.

---

