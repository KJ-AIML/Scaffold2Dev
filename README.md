# 📦 Scaffold2Dev

**Scaffold2Dev** is a **collection of project scaffolds/boilerplates** that helps developers kickstart new projects **faster, easier, and in a more structured way.**
No more wasting time on repetitive setup — just pick the scaffold for your preferred stack and start coding right away 🚀

---

## ✨ Key Ideas

* **Fast Start** → Spin up projects instantly without long setup
* **Multi-Stack** → Supports multiple technologies such as Rust, Django, Python
* **Best Practices** → Pre-configured with standard, production-ready structures
* **Reusable** → Easy to reuse and customize for different projects

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

## 🐍 Python Scaffold (`scaffold_py`)

**Modern Python backend scaffold with FastAPI framework, Clean Architecture, and production-ready setup**

#### 🚀 Features
- **FastAPI Framework** - High-performance, modern Python web framework
- **Clean Architecture** - Domain-Driven Design (DDD) with Hexagonal Architecture pattern
- **UV Package Manager** - Ultra-fast Python package installer and resolver
- **Docker Ready** - Multi-stage Dockerfile with development environment
- **Dependency Injection** - Clean dependency management with dependency-injector
- **Structured Logging** - File and console logging with rotation
- **Configuration Management** - Environment-based settings with Pydantic
- **Health Checks** - Built-in monitoring endpoints
- **GRPC Support** - Ready for gRPC communication setup

#### 📁 Project Structure

```
your-project/
├── src/
│   ├── adapter/
│   │   ├── inbound/           # API layer
│   │   │   ├── api/
│   │   │   │   ├── router/     # Route definitions
│   │   │   │   ├── v1/         # API v1 endpoints
│   │   │   │   └── validators/ # Request validation
│   │   │   └── grpcserver/     # gRPC server setup
│   │   └── outbound/          # External services
│   │       └── mongodb/       # Database adapters
│   ├── application/           # Business logic & services
│   │   ├── mappers/           # Data mappers
│   │   └── usecases/          # Use case implementations
│   ├── domain/               # Core business entities
│   │   ├── dtos/             # Data transfer objects
│   │   ├── entities/         # Domain entities
│   │   ├── services/         # Domain services
│   │   └── repositories/     # Repository interfaces
│   ├── infrastructure/       # Technical concerns
│   │   ├── communication/    # External communication
│   │   ├── config/          # Configuration management
│   │   ├── injectors/       # Dependency injection
│   │   ├── logging/         # Logging setup
│   │   └── persistence/     # Data persistence
│   └── helpers/             # Utility functions
├── env.properties           # Environment configuration
├── Dockerfile              # Container setup
├── docker-compose.dev.yaml # Development environment
├── pyproject.toml          # Python project metadata
└── run.sh                  # Development script
```

#### 🛠️ Quick Start

1. **Prerequisites:**
```bash
# Install UV package manager
curl -LsSf https://astral.sh/uv/install.sh | sh

# Make the scaffold executable
chmod +x scaffold_py
```

2. **Create new Python project:**
```bash
# Create new project
./scaffold_py my-python-api

# Navigate to project
cd my-python-api
```

3. **Install dependencies:**
```bash
uv sync
```

4. **Run development server:**
```bash
# Using UV
uv run src/main.py
# Server will start at http://localhost:3000

# Or using Docker
./run.sh
```

#### 📊 Default Endpoints
- `GET /health` - Health check endpoint
- `GET /{project}/api/v1/` - Your API routes (based on project name)

#### 🔧 Configuration
Environment variables in `env.properties`:
```bash
# Docker Configuration
IMAGE_VERSION=1.0.0
IMAGE_NAME=your-project
CONTAINER_NAME=your-project
CONTAINER_PORT=10000

# FastAPI Configuration
HOST=0.0.0.0
PORT=3000
DEBUG=true
APP_NAME=your-project
APP_VERSION=1.0.0
PREFIX=/your-project/api/v1
```

#### 🧪 Development Tips
- Use `./run.sh` for Docker development with hot reload
- Run `./run.sh build` to build without starting
- Use `./run.sh prod` for production mode
- Project follows Clean Architecture principles
- Keep domain logic pure (no external dependencies)
- Use dependency injection for external services

#### 📦 Key Dependencies
- **FastAPI** - Modern web framework
- **Uvicorn** - ASGI server
- **Pydantic Settings** - Configuration management
- **Dependency Injector** - DI container
- **Python 3.13+** - Latest Python features

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
