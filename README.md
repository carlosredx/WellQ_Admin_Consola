# 🏥 WellQ — Admin Consola

## 📖 Explicación del proyecto

Panel de administración web para la gestión integral de una aplicación, permitiendo la administración de usuarios, roles y permisos mediante un sistema de acceso diferenciado. Implementa autenticación segura con JWT, recuperación de cuentas, gestión de tickets y operaciones internas mediante una API REST. 

### 🛠️ Tecnologías Utilizadas
- Python • FastAPI • React • Vite • PostgreSQL • SQLModel • JWT • bcrypt • TailwindCSS

## ☁️ Arquitectura y Despliegue

La solución fue desplegada bajo una arquitectura cloud distribuida, separando la infraestructura de la siguiente manera:
- **Frontend**: Desplegado en **Vercel**.
- **Backend**: API alojada en **Google Cloud Run**.
- **Base de Datos**: PostgreSQL alojada en **Neon**.

## 📥 Instalación y Pruebas Locales

Para levantar la aplicación correctamente de forma local, sigue este paso a paso. Para una instalación local desde cero, revisar también el archivo `INSTALL.md`, el cual explica qué `.env` se necesitan y cómo se entregan las credenciales privadas.

### 1. Configuración del backend

Abre una terminal en la raíz del proyecto.

```bash
# 1. Entramos a la carpeta del backend
cd backend

# 2. Creamos el entorno virtual de Python
python -m venv venv

# 3. Activamos el entorno virtual
.\venv\Scripts\activate

# 4. Actualizamos pip
python -m pip install --upgrade pip

# 5. Instalamos dependencias del backend
pip install -r requirements.txt

# 6. Cargamos datos iniciales a la base de datos
python seed.py

# 7. Eliminamos duplicados históricos si corresponde
python cleanup_duplicates.py

# 8. Encendemos el backend local
uvicorn app.main:app --reload --port 8000
```

*Antes de ejecutar el backend local, debe existir `backend/.env`. Ese archivo no se sube a Git y se entrega de manera interna.*

### 2. Configuración del frontend

Abre una segunda terminal en la raíz del proyecto.

```bash
# 1. Entramos a la carpeta del frontend
cd frontend

# 2. Instalamos dependencias del frontend
npm install

# 3. Encendemos la interfaz
npm run dev
```

## 🐙 Comandos para subir cambios a Git

Usar estos comandos cuando quieras subir cambios al repositorio.
Importante: no subir archivos privados como `.env`.

```bash
# 1. Revisa qué archivos cambiaron
git status

# 2. Empaqueta los archivos modificados o creados que sí deben subirse
git add .

# 3. Crea el commit con un mensaje descriptivo
git commit -m "Explica brevemente que cambiaste"

# 4. Sube los cambios al repositorio
git push
```
