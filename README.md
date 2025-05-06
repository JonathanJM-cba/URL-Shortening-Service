# API de Acortamiento de URL

Este proyecto es una **API RESTfull** para un servicio de acortamiento de URL. Permite a los usuarios crear URLs cortas, redirigir a las URLs originales, actualizarlas, eliminarlas y obtener estadísticas de acceso.

Basado en el desafío de [roadmap.sh URL Shortening Service](https://roadmap.sh/projects/url-shortening-service)

---

## 🚀 Características

- ✂️ Crear URLs cortas únicas
- 🔗 Recuperar la URL original
- ♻️ Actualizar URLs cortas existentes
- ❌ Eliminar URLs cortas
- 📈 Obtener estadísticas de accesos
- 🔐 Validaciones y manejo de errores

---

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- PostgresSQL para base de datos relacional

---

## 📁 Estructura del Proyecto (sugerida)

```
url-shortener-api/
├── controllers/
│   └── linkController.js
├── models/
│   └── linkModel.js
├── routes/
│   └── linkRoute.js
├── utils/
│   └── generateShortCode.js
├── .env
├── app.js
├── package.json
└── README.md
```

---

## 📌 Endpoints de la API

### ➕ Crear URL Corta

`POST /shorten`

**Body:**

```json
{
  "url": "https://www.example.com/some/long/url"
}
```

**Respuesta Exitosa (201):**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

---

### 🔍 Recuperar URL Original

`GET /shorten/:shortCode`

**Respuesta Exitosa (200):**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z"
}
```

---

### ✏️ Actualizar URL Corta

`PUT /shorten/:shortCode`

**Body:**

```json
{
  "url": "https://www.example.com/some/updated/url"
}
```

**Respuesta Exitosa (200):**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/updated/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:30:00Z"
}
```

---

### 🗑️ Eliminar URL Corta

`DELETE /shorten/:shortCode`

**Respuesta Exitosa (204):** No devuelve contenido.

---

### 📊 Obtener Estadísticas

`GET /shorten/:shortCode/stats`

**Respuesta Exitosa (200):**

```json
{
  "id": "1",
  "url": "https://www.example.com/some/long/url",
  "shortCode": "abc123",
  "createdAt": "2021-09-01T12:00:00Z",
  "updatedAt": "2021-09-01T12:00:00Z",
  "accessCount": 10
}
```

---

## ⚙️ Instalación

```bash
git clone https://github.com/JonathanJM-cba/URL-Shortening-Service.git
cd api-servicio-acortamiento-rul
npm install
npm start
npm run dev
```

Configura tus variables de entorno en un archivo `.env`. El ejemplo se encuentra en el archivo .env.example

---

## 🧪 Testing

Puedes probar los endpoints usando [Postman](https://www.postman.com/).

---

## 👤 Autor

- Nombre: Jonathan Muñoz
- Email: jonathan20cba@gmail.com
