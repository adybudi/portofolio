---
name: portfolio-workflow
description: Procedures and runbooks for developing, testing, and maintaining the portfolio codebase.
---

# Portfolio Project Workflows & Commands

## 1. Running Tests
To run full application test suite:
```bash
php artisan test
```

## 2. Local Development Environment
To start full development stack (artisan serve, vite, queue listener, pail logger concurrently):
```bash
composer dev
# or npm run dev
```

## 3. Database Migration & Storage Symlink
If media uploads or database schema updates are made:
```bash
php artisan migrate
php artisan storage:link
```

## 4. Backup Operations
- Export JSON backup route: `route('admin.backup.export')`
- Import JSON backup route: `route('admin.backup.import')`
