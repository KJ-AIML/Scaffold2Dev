# 📦 Scaffold2Dev

**Scaffold2Dev** is a **powerful CLI tool and collection of project scaffolds/boilerplates** that helps developers kickstart new projects **faster, easier, and in a more structured way.**
No more wasting time on repetitive setup — just clone the repository, install locally, and start coding right away 🚀

---

## ✨ Key Ideas

* **CLI Tool** → Interactive command-line interface for easy project generation
* **Multiple Installation Options** → Install via npm or clone locally for development
* **Fast Start** → Spin up projects instantly without long setup
* **Multi-Stack** → Supports Rust, Python, and Agentic AI applications
* **Clean Architecture** → All scaffolds follow Clean Architecture and Hexagonal Architecture patterns
* **Best Practices** → Pre-configured with standard, production-ready structures
* **Reusable** → Easy to reuse and customize for different projects

---

## 🚀 Quick Start

### Method 1: Install from npm (Recommended)

```bash
# Install the CLI globally
npm install -g scaffold2dev-cli-toolkit

# Use anywhere
scaffold2dev-cli
# or short alias
s2d
```

### Method 2: Local Development Installation

```bash
# Clone the repository
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev

# Install dependencies
cd cli
pnpm install

# Run the CLI
node script.js
# or use npm script
npm run cli
```

### Method 3: Install CLI Globally from Source

```bash
# After cloning and installing dependencies
cd Scaffold2Dev/cli
pnpm install -g .

# Then you can use anywhere
scaffold2dev
# or short alias
s2d
```

---

## 🛠️ Available Scaffolds

### 🦀 Rust Scaffolds

#### Clean Architecture + Axum (`scaffold_rs_clean_axum`)

**Modern Rust backend scaffold with Axum framework, Clean Architecture, and production-ready setup**

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

**Using CLI (Recommended):**
```bash
# Clone and setup (first time only)
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli
pnpm install

# Run the interactive CLI
node script.js
# Select Rust → Clean Architecture + Axum
```

**Direct Usage:**
```bash
# Make the scaffold executable
chmod +x scaffold/rust/scaffold_rs_clean_axum

# Create new project
./scaffold/rust/scaffold_rs_clean_axum my-rust-api

# Navigate to project
cd my-rust-api
```

2. **Run development server:**
```bash
./run.sh
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

### 🐍 Python Scaffolds

#### Clean Architecture + FastAPI (`scaffold_py_clean_fastapi`)

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

**Using CLI (Recommended):**
```bash
# Clone and setup (first time only)
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli
pnpm install

# Run the interactive CLI
node script.js
# Select Python → Clean Architecture + FastAPI
```

**Direct Usage:**
```bash
# Install UV package manager (if not installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Make the scaffold executable
chmod +x scaffold/python/scaffold_py_clean_fastapi

# Create new project
./scaffold/python/scaffold_py_clean_fastapi my-python-api

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

#### Agentic AI Scaffold (`scaffold_py_agentic`)

**Advanced Agentic AI system scaffold with multi-agent architecture, cognitive loops, and real-time monitoring**

##### 🚀 Features
- **Multi-Agent System** - Coordinated agent architecture
- **Cognitive Loop** - Advanced reasoning and decision-making
- **Memory System** - Persistent and working memory management
- **RESTful API** - FastAPI-based web interface
- **Real-time Monitoring** - System health and performance tracking
- **Docker Ready** - Complete containerization setup

##### 🛠️ Quick Start

**Using CLI (Recommended):**
```bash
# Clone and setup (first time only)
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli
pnpm install

# Run the interactive CLI
node script.js
# Select Python → Agentic AI System
```

**Direct Usage:**
```bash
# Make the scaffold executable
chmod +x scaffold/python/scaffold_py_agentic

# Create new project
./scaffold/python/scaffold_py_agentic my-agentic-system

# Navigate to project
cd my-agentic-system
```

#### Hybrid Agentic + Clean Architecture (`scaffold_py_hybrid_agentic_clean`)

**Combines Agentic AI capabilities with Clean Architecture patterns for enterprise-grade applications**

##### 🛠️ Quick Start

**Using CLI (Recommended):**
```bash
# Clone and setup (first time only)
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli
pnpm install

# Run the interactive CLI
node script.js
# Select Python → Hybrid Agentic + Clean
```

**Direct Usage:**
```bash
# Make the scaffold executable
chmod +x scaffold/python/scaffold_py_hybrid_agentic_clean

# Create new project
./scaffold/python/scaffold_py_hybrid_agentic_clean my-hybrid-system

# Navigate to project
cd my-hybrid-system
```

---

## 🚦 Getting Started

### Using the CLI Tool (Recommended)

1. **Clone and setup the repository:**
   ```bash
   git clone https://github.com/KJ-AIML/Scaffold2Dev.git
   cd Scaffold2Dev/cli
   pnpm install
   ```

2. **Run the interactive CLI:**
   ```bash
   node script.js
   # or use npm script
   npm run cli
   ```

3. **Optional - Install globally for system-wide access:**
   ```bash
   pnpm install -g .
   # Then use anywhere with:
   scaffold2dev
   # or short alias
   s2d
   ```

4. **Follow the prompts** to select your preferred stack and configuration
5. **Start coding** with best practices already in place!

### Using Direct Scaffold Scripts

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KJ-AIML/Scaffold2Dev.git
   cd Scaffold2Dev
   ```

2. **Choose your scaffold** from the `scaffold/` directory
3. **Make it executable and run:**
   ```bash
   chmod +x scaffold/[language]/[scaffold-name]
   ./scaffold/[language]/[scaffold-name] your-project-name
   ```
4. **Follow the scaffold-specific README** for detailed setup
5. **Start coding** with clean architecture patterns!

## 📋 Available Templates Summary

| Language | Template | Description | Status |
|----------|----------|-------------|--------|
| 🦀 Rust | Clean + Axum | Modern web server with Clean Architecture | ✅ Available |
| 🐍 Python | Clean + FastAPI | API server with Clean Architecture | ✅ Available |
| 🐍 Python | Agentic AI | Multi-agent system with cognitive loops | ✅ Available |
| 🐍 Python | Hybrid Agentic + Clean | Enterprise Agentic AI with Clean Architecture | ✅ Available |

## 💡 Installation Methods

### Method 1: NPM Installation (Recommended)
```bash
# Install from npm registry
npm install -g scaffold2dev-cli-toolkit

# Use anywhere
scaffold2dev-cli
# or short alias
s2d
```

### Method 2: Local Development
```bash
# Clone the repository
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli

# Install dependencies
pnpm install

# Run CLI
node script.js
```

### Method 3: Global Installation from Source
```bash
# After cloning and installing dependencies
cd Scaffold2Dev/cli
pnpm install -g .

# Use anywhere
scaffold2dev
# or short alias
s2d
```

### Method 4: Direct Scaffold Usage
```bash
# Clone repository
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev

# Make scaffold executable and run
chmod +x scaffold/[language]/scaffold_[template]
./scaffold/[language]/scaffold_[template] your-project-name
```

## 🤝 Contributing

We welcome contributions! Feel free to:
- Add new scaffolds for different tech stacks
- Improve existing scaffolds and CLI tool
- Update documentation
- Report issues or suggest features
- Enhance the interactive CLI experience

### Development Setup
```bash
# Fork and clone the repository
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev

# Install CLI dependencies
cd cli
pnpm install

# Test your changes
node script.js
```

### Adding New Scaffolds
1. Create your scaffold script in `scaffold/[language]/`
2. Make it executable: `chmod +x scaffold/[language]/scaffold_your_template`
3. Add it to the CLI options in `cli/script.js`
4. Update this README with documentation
5. Test thoroughly and submit a PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
