<div align="center">

# 📦 Scaffold2Dev
**Modern CLI Tool & Project Scaffolds Collection**

*Revolutionizing Project Setup with Clean Architecture & Best Practices*

[![npm version](https://img.shields.io/badge/npm-v1.0.0+-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/scaffold2dev-cli-toolkit)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Rust](https://img.shields.io/badge/Rust-1.80+-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![Python](https://img.shields.io/badge/Python-3.13+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Axum](https://img.shields.io/badge/Axum-Latest-FF6B35?style=for-the-badge&logo=rust&logoColor=white)](https://github.com/tokio-rs/axum)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/KJ-AIML/Scaffold2Dev?style=for-the-badge&logo=github)](https://github.com/KJ-AIML/Scaffold2Dev)

[🎯 Overview](#-key-ideas) • [🚀 Quick Start](#-quick-start) • [🛠️ Scaffolds](#️-available-scaffolds) • [💡 Installation](#-installation--usage) • [🚦 Getting Started](#-getting-started) • [🤝 Contributing](#-contributing)

</div>

---

**Scaffold2Dev** is a **powerful CLI tool and collection of project scaffolds/boilerplates** that helps developers kickstart new projects **faster, easier, and in a more structured way.**

No more wasting time on repetitive setup — just install via npm and start coding right away! 🚀

> 💡 **New**: Now available on npm! Install globally with `npm install -g scaffold2dev-cli-toolkit`

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

**🚀 Quick Start:**
```bash
# Install CLI globally
npm install -g scaffold2dev-cli-toolkit

# Create new project
scaffold2dev-cli
# or use short alias
s2d
# Select: Rust → Clean Architecture + Axum
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

**🚀 Quick Start:**
```bash
# Install CLI globally
npm install -g scaffold2dev-cli-toolkit

# Create new project
scaffold2dev-cli
# or use short alias
s2d
# Select: Python → Clean Architecture + FastAPI
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

**🚀 Quick Start:**
```bash
# Install CLI globally
npm install -g scaffold2dev-cli-toolkit

# Create new project
scaffold2dev-cli
# or use short alias
s2d
# Select: Python → Agentic AI System
```

#### Hybrid Agentic + Clean Architecture (`scaffold_py_hybrid_agentic_clean`)

**Combines Agentic AI capabilities with Clean Architecture patterns for enterprise-grade applications**

##### 🛠️ Quick Start

**🚀 Quick Start:**
```bash
# Install CLI globally
npm install -g scaffold2dev-cli-toolkit

# Create new project
scaffold2dev-cli
# or use short alias
s2d
# Select: Python → Hybrid Agentic + Clean
```

---

## 🚦 Getting Started

### 🎯 3-Step Quick Start

1. **📦 Install the CLI:**
   ```bash
   npm install -g scaffold2dev-cli-toolkit
   ```

2. **🚀 Create your project:**
   ```bash
   scaffold2dev-cli
   # or use short alias: s2d
   ```

3. **✨ Follow the interactive prompts** to select your stack and start coding!

### 🔧 What You Get

- **🏗️ Clean Architecture** - Domain-driven design patterns
- **📚 Best Practices** - Production-ready project structure  
- **🚀 Fast Setup** - No more boilerplate configuration
- **🔄 Hot Reload** - Development server with auto-restart
- **📖 Documentation** - Auto-generated API docs
- **🐳 Docker Ready** - Containerization setup included
- **🧪 Testing Setup** - Unit and integration test structure

## 📋 Available Templates Summary

| Language | Template | Description | Status |
|----------|----------|-------------|--------|
| 🦀 Rust | Clean + Axum | Modern web server with Clean Architecture | ✅ Available |
| 🐍 Python | Clean + FastAPI | API server with Clean Architecture | ✅ Available |
| 🐍 Python | Agentic AI | Multi-agent system with cognitive loops | ✅ Available |
| 🐍 Python | Hybrid Agentic + Clean | Enterprise Agentic AI with Clean Architecture | ✅ Available |

## 💡 Installation & Usage

### 🚀 Quick Install (Recommended)
```bash
# Install globally via npm
npm install -g scaffold2dev-cli-toolkit

# Start creating projects
scaffold2dev-cli
# or use short alias
s2d
```

### 🛠️ Development Setup
```bash
# For contributors and local development
git clone https://github.com/KJ-AIML/Scaffold2Dev.git
cd Scaffold2Dev/cli
pnpm install

# Run locally
node script.js
```

### 📦 Alternative Package Managers
```bash
# Using yarn
yarn global add scaffold2dev-cli-toolkit

# Using pnpm
pnpm add -g scaffold2dev-cli-toolkit
```

## 🤝 Contributing

[![Contributors Welcome](https://img.shields.io/badge/contributors-welcome-brightgreen.svg?style=flat)](https://github.com/KJ-AIML/Scaffold2Dev/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/KJ-AIML/Scaffold2Dev/pulls)

We welcome contributions! Here's how you can help:

### 🎯 Ways to Contribute
- **🏗️ Add new scaffolds** for different tech stacks
- **⚡ Improve existing scaffolds** and CLI tool
- **📝 Update documentation** and examples
- **🐛 Report issues** or suggest features
- **✨ Enhance the interactive CLI** experience

### 🛠️ Development Setup
```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/Scaffold2Dev.git
cd Scaffold2Dev

# 2. Install CLI dependencies
cd cli
pnpm install

# 3. Test your changes
node script.js
```

### 📋 Adding New Scaffolds
1. **Create** your scaffold in `cli/scaffold/[language]/`
2. **Update** CLI options in `cli/script.js`
3. **Document** your scaffold in this README
4. **Test** thoroughly with different project names
5. **Submit** a PR with clear description

### 🔗 Useful Links
- [📋 Issues](https://github.com/KJ-AIML/Scaffold2Dev/issues) - Report bugs or request features
- [🔄 Pull Requests](https://github.com/KJ-AIML/Scaffold2Dev/pulls) - Submit your contributions
- [📖 Wiki](https://github.com/KJ-AIML/Scaffold2Dev/wiki) - Detailed documentation
- [💬 Discussions](https://github.com/KJ-AIML/Scaffold2Dev/discussions) - Community chat

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
