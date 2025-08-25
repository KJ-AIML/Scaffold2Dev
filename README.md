# 📦 Scaffold2Dev

**Scaffold2Dev** คือ **คลังรวมโครงสร้างโปรเจกต์ (scaffolds/boilerplates)** ที่ช่วยให้นักพัฒนาเริ่มต้นโครงการใหม่ได้ **ไวขึ้น ง่ายขึ้น และเป็นระบบมากขึ้น**
ไม่ต้องเสียเวลาตั้งค่าใหม่ทุกครั้ง แค่เลือก scaffold ที่ตรงกับสแตกที่ต้องการ แล้วเริ่มพัฒนาต่อได้ทันที 🚀

---

## ✨ Key Idea

* **Fast Start** → ขึ้นโปรเจกต์ได้ทันที ไม่ต้องเซ็ตอัพนาน
* **Multi-Stack** → รองรับหลายเทคโนโลยี เช่น Rust, Django, Python
* **Best Practices** → วางโครงตามมาตรฐาน พร้อมใช้งานจริง
* **Reusable** → ใช้ซ้ำได้ ปรับแต่งเพิ่มได้ง่าย

---

## 🦀 Available Scaffolds

### Rust Scaffold (`scaffold_rust`)

**Modern Rust backend scaffold with Axum framework, hot reload, and clean architecture**

#### 🚀 Features
- **Axum Framework** - Modern, fast, and ergonomic web framework
- **Hot Reload** - Automatic restart on code changes during development
- **Clean Architecture** - Domain-Driven Design (DDD) with clear separation of concerns
- **OpenAPI Documentation** - Auto-generated API docs with Scalar UI
- **Structured Logging** - Comprehensive logging with tracing
- **CORS Support** - Cross-origin resource sharing enabled
- **Graceful Shutdown** - Proper signal handling for production

#### 📁 Project Structure

```
your-project/
├── src/
│   ├── adapter/
│   │   ├── inbound/           # API layer
│   │   │   └── api/
│   │   │       └── controller/
│   │   │           ├── router/     # Route definitions
│   │   │           ├── shared/     # Shared DTOs & handlers
│   │   │           ├── v1/         # API v1 endpoints
│   │   │           └── docs/       # OpenAPI docs
│   │   └── outbound/          # External services
│   ├── application/           # Business logic & services
│   ├── domain/               # Core business entities
│   ├── infrastructure/       # Config & external dependencies
│   └── shared/               # Common utilities & middleware
├── Cargo.toml               # Dependencies configuration
└── README.md
```

#### 🛠️ Quick Start

1. **Create new Rust project:**
```bash
# Make the scaffold executable
chmod +x scaffold_rust

# Create new project
./scaffold_rust my-rust-api

# Navigate to project
cd my-rust-api
```

2. **Install dependencies:**
```bash
cargo build
```

3. **Run development server:**
```bash
cargo run
# Server will start at http://localhost:8080
```

4. **View API documentation:**
- Open http://localhost:8080/scalar for Scalar UI

#### 📊 Default Endpoints
- `GET /health` - Health check endpoint
- `GET /scalar` - Interactive API documentation (Scalar UI)
- `GET /api-docs/openapi.json` - OpenAPI specification
- `GET /api/v1/info` - API version information

#### 🔧 Configuration
Environment variables are loaded from `.env` file:
```bash
CONTAINER_NAME=your-project-container
IMAGE_NAME=your-project
PORT=8080
ENVIRONMENT=development
RUST_LOG=info
DEBUG=true
tower_http=debug
```

#### 🧪 Development Tips
- Use `cargo watch -x run` for automatic reload
- Run tests with `cargo test`
- Check formatting with `cargo fmt`
- Run linter with `cargo clippy`

---

## 🚦 Getting Started

1. **Choose your scaffold** from the available options
2. **Run the scaffold script** to generate your project
3. **Follow the scaffold-specific README** for detailed setup
4. **Start coding** with best practices already in place!

## 🤝 Contributing

We welcome contributions! Feel free to:
- Add new scaffolds for different tech stacks
- Improve existing scaffolds
- Update documentation
- Report issues or suggest features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.