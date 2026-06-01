# Contributing to zod-ph

Welcome! Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and follow the steps below.

1. Fork the repository
2. Create a feature branch
3. Write tests (Vitest)
4. Run `pnpm lint && pnpm typecheck && pnpm test`
5. Submit a pull request

Please ensure all validators follow the project's pattern: a Zod schema function returning a `z.ZodType` with appropriate options.
